/**
 * Created by 冯萌娜 on 2015/9/5.
 */
var HS_list = {

}
HS_list.top=(function(){
    var config={
        main_html:
         '<a href="javascript:;">嗨森购首页</a>&nbsp;>&nbsp;'
        +'<a href="javascript:;">建材</a>&nbsp;>&nbsp;'
        +'<a href="javascript:;">灯饰照明</a>'

    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        config.data = data;
        createDom();
        bindEvent();
    };
    createDom=function(){
        var $container = config.$container;
        var data = config.data;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);
    }
    bindEvent=function(){

    }
    return {init : init}
}())

HS_list.list=(function(){
    var config={
        main_html:
        '{{each product as value i}}'
        +'<dl>'
        +'<dt>'
        +'<a href="{{value.url}}" target="_blank">'
        +'<img title="" src="{{value.src}}" alt="" height="110px" width="186px">'
        +'</a>'
        +'</dt>'
        +'<dd>'
        +'<a href="#" target="_blank">品质保证</a>'
        +'</dd>'
        +'<dd class="yansee">'
        +'<a href="{{value.url}}" target="_blank">{{value.title}}</a>'
        +'</dd>'
        +'<dd>￥'
        +'<span>'
        +'<a href="{{value.url}}" target="_blank">{{value.price}}</a>'
        +'</span>'
        +'</dd>'
        +'<dd id="lvbg">'
        +'<a href="{{value.url}}" target="_blank">去看看</a>'
        +'</dd>'
        +'</dl>'
        +'{{/each}}'
    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        createDom(data);
        bindEvent();
    };
    createDom=function(data){
        var $container = config.$container;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);
        $("#juc-a-a_box5wrap dl").eq(1).addClass("iopg")
        $("#juc-a-a_box5wrap dl").eq(2).addClass("iopg bxs")
    }
    bindEvent=function(){

    }
    return {init : init}
}())

HS_list.product=(function(){
    var config={
        main_html:
        '{{each productLists as value i}}'
        +'<li>'
        +'<a href="javascript:;" target="_blank">'
        +'<img title="{{value.title}}" src="{{value.src}}" alt="{{value.title}}">'
        +'</a>'
        +'<p style="height:36px;" class="p_bt">'
        +'<a href="{{value.url}}" target="_blank">凯玛特  20112-TL欧式风格树脂台灯</a>'
        +'</p>'
        +'<p class="p_jq">'
        +'<span class="hong bold jq">￥{{value.price}}</span>'
        +'<em>|</em>'
        +'<span class="xl">销量：{{value.sales}}</span>'
        +'</p>'
        +'<div class="js_nohide" style="display:none;">'
        +'<div class="js_nohide_1">'
        +'<span class="ssd">'
        +'<a href="javascript:void(0);" class="add" onclick="go_car(7453)">加入购物车</a>'
        +'</span>'
        +'<span style="margin-left:10px;" class="ssd1">'
        +'<a href="javascript:void(0);">收藏该商品</a>'
        +'</span>'
        +'</div>'
        +'</div>'
        +'</li>'
        +'{{/each}}'
    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        config.data = data;
        createDom();
        bindEvent();
    };
    createDom=function(){
        var $container = config.$container;
        var data = config.data;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);
    }
    bindEvent=function(){
        $("#juc-a-a_box6 ul li").hover(function(){
                $(this).css({"z-index":"15"});
                $(this).find(".js_nohide").show();
                $(this).find(".js_nohide").css({"z-index":"35"});
            },
            function(){
                $(this).css({"z-index":"0"});
                $(this).find(".js_nohide").hide();
                $(this).find(".js_nohide").css({"z-index":"0"});
            });
    }
    return {init : init}
}())

HS_list.class=(function(){
    var config={
        main_html:
        '<dl class="clearfix the-one" style="border:none;">'
        +'<dt>品牌：</dt>'
        +'<dd style="position:relative;">'
        +'<div class="sx-pp" style="height:auto;overflow:hidden;">'
        +'<ul class="clearfix listpingp">'
        +'{{each brand as value i}}'
        +'<li><a href="{{value.url}}" class="ceon"><img src="{{value.src}}" height="51" width="102"></a></li>'
        +'{{/each}}'
        +'</ul>'
        +'</div>'
        +'</dd>'
        +'</dl>'
        +'<dl class="clearfix the-one the-two" style="border-top:1px solid #f0f0f0;">'
        +'<dt>风格：</dt>'
        +'<dd style="position:relative;">'
        +'<div style="height: 35px; overflow: hidden;" class="sx-ohter">'
        +'<ul class="clearfix listfengg">'
        +'{{each styles as value i}}'
        +'<li><a href="{{value.url}}" class="ceon">{{value.title}}</a></li>'
        +'{{/each}}'
        +'</ul>'
        +'</div>'
        +'<div class="sx-more1">更多 ↓<span></span></div>'
        +'</dd>'
        +'</dl>'
        +'<dl class="clearfix the-one the-two" style="border-top:1px solid #f0f0f0;">'
        +'<dt>材质：</dt>'
        +'<dd style="position:relative;">'
        +'<div style="height: 35px; overflow: hidden;" class="sx-ohter">'
        +'<ul class="clearfix listcaiz">'
        +'{{each materials as value i}}'
        +'<li><a href="{{value.url}}" class="ceon">{{value.title}}</a></li>'
        +'{{/each}}'
        +'</ul>'
        +'</div>'
        +'<div class="sx-more1">更多 ↓<span></span></div>'
        +'</dd>'
        +'</dl>'
        +'<dl class="clearfix the-one the-two" style="border-top:1px solid #f0f0f0;">'
        +'<dt>价格：</dt>'
        +'<dd style="position:relative;">'
        +'<div style="height: 35px; overflow: hidden;" class="sx-ohter">'
        +'<ul class="clearfix listjiag">'
        +'{{each prices as value i}}'
        +'<li><a href="{{value.url}}" class="ceon">{{value.price}}</a></li>'
        +'{{/each}}'
        +'</ul>'
        +'</div>'
        +'<div class="sx-more1">更多 ↓<span></span></div>'
        +'</dd>'
        +'</dl>'
    }
    var init,createDom,bindEvent;
    init=function($container,data){
        config.$container = $container;
        config.data = data;
        createDom(data);
        bindEvent(data);
    };
    createDom=function(data){
        var $container = config.$container;
        var data = config.data;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);
    }
    bindEvent=function(){
         var oo = "";
        $(".listpingp li a,.listfengg li a,.listcaiz li a,.listjiag li a").live("click",function(){
            $(this).parent().siblings().children("a").removeClass("cur")
            $(this).toggleClass("cur")
        })
    }
    return {init : init}
}())

HS_list.page=(function(){
    var config={
        main_html:
        '<p class="links">'
        +'<span class="disabled">第 {{cur}} 页 / 共 {{page}} 页</span>'
        +'<span class="disabled">首页</span>'
        +'<span class="disabled">上一页</span>'
        +'{{each pagelength as value i}}'
        +'<a href="javascript:;">{{i+1}}</a>'
        +'{{/each}}'
        +'<span class="disabled">下一页</span>'
        +'<span class="disabled">尾页</span>'
        +'</p>'
    }
    var init,createDom,bindEvent;
    init=function($container,data,num){
        config.$container = $container;
        createDom(data);
        bindEvent(data,num);
    };
    createDom=function(data){
        data.pagelength = [];
        data.pagelength.length = data.page;
        var $container = config.$container;
        var render = template.compile(config.main_html);
        var html = render(data);
        $container.html(html);
    }
    bindEvent=function(data,num){
        if(!num){
            $("#page .links a").eq(data.cur-1).addClass("cur");
        }else{
            $("#page .links a").eq(0).addClass("cur");
        }
    }
    return {init : init}
}())

