#调用common接口获取access_cotke(wow)
curl -s 'http://gm.ktvsky.3231266f50027675yg.custom.ucloud.cn/open/wx/token?secret=b649fa6fe892817e501c1e564dcd6b5b&appid=wx07e7e13d46a5c6fb'

#代码方式更改公众号底部tab
curl -i -H 'Accept: application/json' -H 'Content-Type: application/json' -XPOST -d '{"button": [{"name": "加盟申请", "sub_button": [], "url": "http://coupon.ktvsky.com/ktv_bar", "type": "view"}, {"name": "录音列表", "sub_button": [], "url": "http://k.ktvsky.com/bar/userinfo/new", "type": "view"}, {"name": "用户反馈", "type": "view", "url": "http://static.ktvsky.com/wow/feedback.html"}]}' 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token=S8KuNnxExNbwpFntw10j78mRn64ujfgw86mtOJYmhz1NBN4XuPltxpKEPjAEKqvvS4YscHSQnaJLy505cxpIVty-z-ff2mCip8srFQ4v1SL_DN1hvFFolophTXpfyM-_MSCeAEAZFP'
