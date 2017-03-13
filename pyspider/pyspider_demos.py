#----------------------------------------------
#eg1 战旗tv 最简单的json接口抓取
#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# Created on 2016-11-02 13:41:31
# Project: douyu_api
# success!

import json
from pyspider.libs.base_handler import *
from pyspider.database.mysql.mysqldb import ToMysql

class Handler(BaseHandler):
    crawl_config = {
    }

    @every(minutes=24 * 60)
    def on_start(self):
        for i in range(1, 20):
            self.crawl('https://www.zhanqi.tv/api/static/v2.1/live/list/50/%s.json' % i, callback=self.parse_json)

    @config(age=10 * 24 * 60 * 60)
    def parse_json(self, response):
        print response.text
        response = response.text
        print json.loads(response)
        res = json.loads(response)['data']['rooms']

        for item in res:
            video_id = item['videoId']
            yield {
                "room_id" : item['id'],
                 "show_img" : item['bpic'],
                 "category" : item['gameName'],
                 "link" : 'http://www.zhanqi.tv' + item['url'],
                 "title" : item['title'],
                 "anchor" : item['nickname'],
                 "head_img" : item['avatar']+'-big',
                 "num" : item['online'],
                 "video_link" : 'http://www.zhanqi.tv/live/embed?roomId=%s' % (video_id),
                 "m3u8_link" : 'http://dlhls.cdn.zhanqi.tv/zqlive/%s.m3u8' % (video_id),
                 "source" : "zhanqi"
            }

    def on_result(self, result):
            #print result
            if not result:
                return
            sql = ToMysql()
            sql.into('tvshow',**result)
#--------------------------------------------
#eg2 yy直播 配合js
#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# Created on 2016-11-18 15:13:55
# Project: liujianfang

import json
from pyspider.libs.base_handler import *
from pyspider.database.mysql.mysqldb import ToMysql

class Handler(BaseHandler):
    crawl_config = {
    }

    @every(minutes=24 * 60)
    def on_start(self):
        self.crawl('http://www.yy.com/mobileweb/play/live?sid=22490906&ssid=22490906#!/live/room', callback=self.get_videolink)

    @config(age=10 * 24 * 60 * 60)
    def parse_json(self, response):
            res = response.json['data']['data']
            for item in res:
                link = item['liveUrl'].split('?')[0]
                save = {
                    "room_id" : item['sid'],
                     "show_img" : item['thumb'],
                     "category" : '',
                     "link" : link,
                     "title" : item['desc'],
                     "anchor" : item['name'],
                     "num" : item['users'],
                     "source" : "yy"
                }

                print save
                self.crawl('http://www.yy.com/mobileweb/play/live?sid=%s&ssid=%s#!/live/room' % (item['sid'],item['ssid']),
                    callback=self.get_videolink,
                    save = save,
                    headers={'User-Agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16'},
                    fetch_type='js',
                    js_script="""function() {setTimeout("", 10000);}""",
                    validate_cert=False
                    )

    def get_videolink(self, response):
        print response.doc
        result = response.save
        m3u8_link = response.doc('#player').attr.src
        head_img = response.doc('.anchor-icon').attr.style.split('url')[1][2:-3]
        result['head_img'] = head_img
        result['m3u8_link'] = m3u8_link
        yield result

    def on_result(self, result):
            #print result
            if not result:
                return
            sql = ToMysql()
            sql.into('tvshow',**result)

#--------------------------------------------
#eg3 花椒直播 xpath方式
#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# Created on 2016-11-18 15:13:55
# Project: liujianfang

import json
from pyspider.libs.base_handler import *
from pyspider.database.mysql.mysqldb import ToMysql

class Handler(BaseHandler):
    crawl_config = {
    }

    @every(minutes=24 * 60)
    def on_start(self):
        # max=8
        for i in range(1, 8):
            self.crawl('http://www.huajiao.com/category/1000?pageno=%s' % i, callback=self.index_page)

    @config(age=10 * 24 * 60 * 60)
    def index_page(self, response):

        for each in response.doc('ul.g-list2 > li'):
                save = {
                    "room_id" : each.xpath('div/a/@href')[0].encode('utf8').split('/')[-1],
                     "show_img" : each.xpath('div/a/div[1]/img/@src')[0].encode('utf8'),
                     "category" : '',
                     "link" : each.xpath('div/a/@href')[0].encode('utf8'),
                     "title" : each.xpath('div/a/div[2]/div[1]/text()')[0].encode('utf8'),
                     "anchor" : each.xpath('div/a/div[2]/div[1]/text()')[0].encode('utf8'),
                     "num" : each.xpath('div/a/div[2]/div[2]/span/text()')[0].encode('utf8'),
                     "source" : "huajiao"
                }

                print save
                self.crawl('http://h.huajiao.com/l/index?liveid=%s&userid=&time=&reference=&from=&isappinstalled=&version=&qd=&channel=' % each.xpath('div/a/@href')[0].encode('utf8').split('/')[-1],
                          callback=self.get_videolink,
                          save = save,
                          headers={'User-Agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16'},
                          fetch_type='js',
                          validate_cert=False
                          )

    def get_videolink(self, response):
        result = response.save
        m3u8_link = response.doc('.h5_player > video').attr.src

        result['m3u8_link'] = m3u8_link
        yield result

    def on_result(self, result):
            #print result
            if not result:
                return
            sql = ToMysql()
            sql.into('tvshow',**result)

#--------------------------------------------
#eg4 一个歌曲爬去的工作实例
#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# Created on 2016-11-07 13:37:09
# Project: ktvsong

from pyspider.libs.base_handler import *
import csv
import os

class Handler(BaseHandler):
    crawl_config = {
         'proxy': '60.0.126.222:8118'
    }

    def on_start(self):
        print os.getcwd()
        for i in range(1, 2394):
            url = 'http://m.25xz.com/special/%s.shtml' % i
            self.crawl(url,
                     callback=self.index_page,
                     headers={'User-Agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16'},
                     fetch_type='js',
                     validate_cert=False
                      )

    def index_page(self, response):

        singer = response.doc('#header > span').text().encode('utf8').split('-')[0]
        for each in response.doc('.list-song > li'):
            song = each.xpath('a/div[2]/div[1]/text()')[0].encode('utf8')
            print singer, song
            yield {
                'singer':singer,
                'song':song
            }

    def on_result(self, result):
        if not result:
            return
        value_list = []
        value_list.append(result['song'])
        value_list.append(result['singer'])
        with open('zangzugequ.csv', 'a+') as csvfile:
            writer = csv.writer(csvfile,dialect='excel')
            writer.writerow(value_list)
            print 'success'
