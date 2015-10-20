/**
 * Created by Administrator on 2015/9/8 0008.
 */
var HS_top = {}

HS_top.ad=(function(){

    var config={
        main_html:
        '<div class="shortcut-box"> ' +
        '<ul> ' +
        '<li><span>您好！请</span><a href="login.html" class="login">登录</a> <a href="register.html" class="zhuce">免费注册</a></li> ' +
        '<li><a>我的订单</a></li> ' +
        '<li><a>我的嗨森</a></li> ' +
        '<li><a>嗨森会员</a></li> ' +
        '<li><a>企业采购</a></li> ' +
        '<li><a>关注嗨森</a></li> ' +
        '<li><a>客户服务</a></li> ' +
        '</ul> ' +
        '</div>'
        }
    topModule=function(){
        topeDom();
    };
    topeDom=function(){
        $("#shortcut").html(config.main_html);
    }
    return {topModule : topModule}
}())
