https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET

orBE2Js9tyI6DeU3hdotXUvbTS8xEPrHfbs56aXbjSqsa5HSkRmXqtczzrsKDsZ-Q16zglJSxkysdoC8e2oPw00TEJSDc-8-QhjzuJ-lLkELSAjAFAYFN

curl -i -H 'Accept: application/json' -H 'Content-Type: application/json' -XPOST -d '{"button": [{"name": "加盟申请", "sub_button": [], "url": "http://coupon.ktvsky.com/ktv_bar", "type": "view"}, {"name": "录音列表", "sub_button": [], "url": "http://k.ktvsky.com/bar/userinfo/new", "type": "view"}, {"name": "用户反馈", "type": "view", "url": "http://wx.handle.ktvdaren.com/song_new/nextpage/feedback.html?uid=9e9183fd41ee5663935b96fed2bf54d6"}]}' 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token=orBE2Js9tyI6DeU3hdotXUvbTS8xEPrHfbs56aXbjSqsa5HSkRmXqtczzrsKDsZ-Q16zglJSxkysdoC8e2oPw00TEJSDc-8-QhjzuJ-lLkELSAjAFAYFN'
curl -i -H 'Accept: application/json' -H 'Content-Type: application/json' -XPOST -d '{"button": [{"name": "加盟申请", "sub_button": [], "url": "http://coupon.ktvsky.com/ktv_bar", "type": "view"}, {"name": "用户反馈", "type": "view", "url": "http://wx.handle.ktvdaren.com/song_new/nextpage/feedback.html?uid=9e9183fd41ee5663935b96fed2bf54d6"}]}' 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token=orBE2Js9tyI6DeU3hdotXUvbTS8xEPrHfbs56aXbjSqsa5HSkRmXqtczzrsKDsZ-Q16zglJSxkysdoC8e2oPw00TEJSDc-8-QhjzuJ-lLkELSAjAFAYFN'



