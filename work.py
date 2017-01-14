location.href = '//coupon.ktvsky.com/ktv/order/common?fee='+ (data.total_fee) +'&return_url='+ location.href +'&info=购买套餐&type=12&ktv_id='+ $('#ktv').val() +'&origin_oid='+data.order_id;

class DisIndexHandler(BaseHandler):

    # 购买会员卡按钮,跳转到公共支付页面
    def post(self):
        try:
            phone_num = int(self.get_argument('phone_num'))
            ktv_id = int(self.get_argument('ktv_id'))
            total_fee = int(self.get_argument('total_fee'))
            card_type = int(self.get_argument('card_type'))
        except Exception as e:
            logging.error(e)
            raise utils.APIError(errcode=10001)
        info = '会员卡分销'
        order_id = 'SO' + str(phone_num) + 'D' + str(ktv_id)+ 'T' + datetime.datetime.now().strftime('%Y%m%d%H%M%S')
        self.send_json(dict(total_fee=total_fee, order_id=order_id, ktv_id=ktv_id, info=info))

    # 分销首页
    @check_openid
    async def get(self):
        try:
            ktv_id = int(self.get_argument('ktv_id'))
            s_openid = self.get_argument('s_openid')
        except Exception as e:
            logging.error(e)
            raise utils.APIError(errcode=10001)

        coupon_card_info = await ctrl.custom.get_ktv_coupon_info(ktv_id)
        coupon_create_his = await ctrl.custom.get_ktv_coupon_info()
        earn_sum_rank = ctrl.custom.get_earn_sum_rank()
        config = await utils.async_common_api('/wx/share/config', dict(url=self.request.full_url()))

        self.render('dis_index.tpl',
                    coupon_card_info=coupon_card_info,
                    coupon_create_his = coupon_create_his,
                    earn_sum_rank=earn_sum_rank,
                    config=config,
                    s_openid=s_openid,
                    ktv_id=ktv_id
                    )


class DisInfoHandler(BaseHandler):

    async def get(self):
        try:
            openid = self.get_cookie('agent_openid')
        except Exception as e:
            logging.error(e)
            return self.render('custom/error.tpl')

        user_info = ctrl.custom.get_dis_user(openid)

        config = await utils.async_common_api('/wx/share/config', dict(url=self.request.full_url()))

        self.render('dis_info.tpl',
                    flag=user_info['flag'],
                    config=config
                    )


class DisOrderHandler(BaseHandler):

    def gen_order_id(self, openid, ktv_id):
        order_id = 'SO' + openid + 'D' + str(ktv_id)+ 'T' + datetime.datetime.now().strftime('%Y%m%d%H%M%S')[:64]
        return order_id[:31]    # 线下订单id

    async def pay_query(self, order_id, loop=1):
        logging.info('query gzh_order loop %s'%loop)

        order = ctrl.custom.get_dis_order(order_id)
        try:
            http_client = utils.get_async_client()
            request = utils.http_request(COMMON_ORDER_URL.format(order_id=order['order_id']))

            res = await utils.fetch(http_client, request)
            res = json.loads(res.body.decode())
            logging.info('query order result: %s'%res)
            if res['is_pay']:
                # TODO: check total_fee
                ctrl.custom.update_gzh_order(order['order_id'], data=dict(state=2))
            return res
        except Exception as e:
            logging.error(e)
            if loop>0:
                IOLoop.current().add_timeout(time.time()+60, self.pay_query, order_id, loop-1)
            raise utils.APIError(errcode=19004, errmsg='查单失败')

    async def prepay(self, openid, order_id, fee=0):
        try:
            # res = await wxpay.WeiXinJSAPIPay(order_id, '您支付了%s' % (fee / 100), fee, openid).prepay()
            ctrl.web.update_dis_order(data=dict(order_id=order_id, state=3))   # 3未支付
            # return res

        except Exception as e:
            logging.error(e)
            raise utils.APIError(errcode=19003)

    @forbid_frequent_api_call(params={'cookie_keys': ['openid'], 'second': 5})
    async def post(self):
        try:
            ktv_id = self.get_argument('ktv_id')
            s_openid = self.get_argument('s_openid','')
            openid = self.get_cookie('agent_openid')
            fee = int(self.get_argument('fee', 999))

        except Exception as e:
            logging.error(e)
            raise utils.APIError(errcode=10001)

        print(self.request.arguments)
        order_id = self.gen_order_id(openid, ktv_id)    # 订单线下id
        ctrl.custom.update_dis_order(dict(order_id=order_id, openid=openid, ktv_id=ktv_id, s_openid=s_openid, fee=fee))

        prepay_data = await self.prepay(openid=openid, order_id=order_id, fee=fee)
        logging.error(prepay_data)
        res = dict(order_id=order_id, pay_data=prepay_data)
        self.send_json(res)

location.href = '//coupon.ktvsky.com/ktv/order/common?fee='+ (data.total_fee) +'&return_url='+ location.href +'&info=购买套餐&type=12&ktv_id='+ $('#ktv').val() +'&origin_oid='+data.order_id;
