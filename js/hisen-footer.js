/**
 * Created by Evil.01 on 2015/9/6.
 */

var HS_footerWrap= (function(){
    footerModule = function ($container_A,data_A) {
        HS_footerWrap.shell.footerModule($container_A,data_A)
    };
    return {footerModule:footerModule}
})();

HS_footerWrap.shell = (function(){
    var footerWrap = {

        footerWrap_html :['<div class="footerWrap">',
            '    <div class="links_bg">',
            '        <div class="links w">',
            '            <div class="links_one fl">',
            '                <dl>',
            '                    <dt>24小时客服热线</dt>',
            '                    <dd>400 0352 070</dd>',
            '                </dl>',
            '                <dl class="top20">',
            '                    <dt>售后投诉电话</dt>',
            '                    <dd>0352-5118777</dd>',
            '                </dl>',
            '            </div>',
            '            <div class="links_two fl">',
            '                <dl>',
            '                    <dt>关于城中诚</dt>',
            '                    <dd>关于我们</dd>',
            '                    <dd>诚聘英才</dd>',
            '                    <dd>联系我们</dd>',
            '                </dl>',
            '                <dl>',
            '                    <dt>购物流程</dt>',
            '                    <dd>常见问题</dd>',
            '                    <dd>支付方式</dd>',
            '                    <dd>注册协议</dd>',
            '                </dl>',
            '                <dl>',
            '                    <dt>配送方式</dt>',
            '                    <dd>配送运费</dd>',
            '                    <dd>验货与签收</dd>',
            '                </dl>',
            '                <dl>',
            '                    <dt>售后服务</dt>',
            '                    <dd>售后政策</dd>',
            '                    <dd>退款说明</dd>',
            '                    <dd>取消订单</dd>',
            '                </dl>',
            '                <dl>',
            '                    <dt>购物保障</dt>',
            '                    <dd>郑重承诺</dd>',
            '                    <dd>7天退换货</dd>',
            '                    <dd>一年质保</dd>',
            '                    <dd>免责声明</dd>',
            '                </dl>',
            '            </div>',
            '            <div class="links_three fr">',
            '                <dl>',
            '                    <dt>城中诚微信公众号</dt>',
            '                    <dd>',
            '                        <img src="images/wx.png" alt="二维码">',
            '                    </dd>',
            '                    <dd>扫一扫，更多惊喜</dd>',
            '                </dl>',
            '            </div>',
            '        </div>',
            '    </div>',
            '    <div class="footer_icon w">',
            '        {{each xinyong as value i}}',
            '        <a href="{{value.url}}">',
            '            <p class="iconBg"></p>',
            '            <p>{{value.title1}}</p>',
            '            <p>{{value.title2}}</p>',
            '        </a>',
            '        {{/each}}',
            '    </div>',
            '    <div class="yq_link w">',
            '        <ul>',
            '            <li><b>友情链接：</b></li>',
            '            <li><a href="javascript:;">家居园</a></li>',
            '            <li><a href="javascript:;">乐家卫浴</a></li>',
            '            <li><a href="javascript:;">大同在线</a></li>',
            '            <li><a href="javascript:;">大同都市网</a></li>',
            '            <li><a href="javascript:;">大同建筑装饰网</a></li>',
            '            <li><a href="javascript:;">产品供应</a></li>',
            '        </ul>',
            '    </div>',
            '    <div class="footer w">',
            '        <p>',
            '            <a href="javascript:;">网站首页 |</a>',
            '            <a href="javascript:;"> 品牌大全 |</a>',
            '            <a href="javascript:;"> 客服中心 |</a>',
            '            <a href="javascript:;"> 联系我们 |</a>',
            '            <a href="javascript:;"> 家私资讯 |</a>',
            '            <a href="javascript:;"> 网站地图</a>',
            '        </p>',
            '        <p>Copyright (C) 2014 大同城中诚电子商务有限公司 版权所有，并保留所有权利。 晋ICP备14000932号-1</p>',
            '    </div>',
            '</div>'].join("")
    };

    footerModule = function ($container_A,data_A) {
        footerDOM($container_A,data_A);
        bindEvent();
        setJqueryMap();
    };
    footerDOM = function($container_A,data_A){
        var render = template.compile(footerWrap.footerWrap_html)
        var html =render(data_A)
        $container_A.append(html);
    };

    return {footerModule:footerModule}
}())
