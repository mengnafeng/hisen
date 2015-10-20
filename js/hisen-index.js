/**
 * Created by Administrator on 2015/9/5 0005.
 */

var HS_index = (function () {
    initModule = function ($container) {
        initModule($container);
    };
    return { initModule: initModule };
})();

//初始化
HS_index.indexShell = (function(){
    var configMap = {
        indexHtml :
        '<div id="shortcut"></div>'+
        '<div id="header"></div>'+
        '<div id="nav"></div>'+
        '<div class="banner">' +
        '</div>' +
        '<div id="main" class="w mt20">' +
        '<div class="index-pptj"></div>' +
        '<div class="index-Hots"></div>' +
        '<div class="index-News"></div>' +
        '<div class="jjj_box" id="index-jccs"></div>' +
        '<div class="jjj_box" id="index-jjcs"></div>' +
        '<div class="jjj_box" id="index-jscs"></div>' +
        '<div class="index-teja"></div>' +
        '</div>' +
        '</div>'+
        '<div class="floor-nav">' +
        '</div>'
    }
    initModule = function ( $container) {
        createDOM( $container)
    };
    createDOM = function($container){
        $container.html( configMap.indexHtml );
    };
    return { initModule : initModule };
})();

//轮播图
HS_index.indexBanner = (function(){
    var bannerConfigMap = {
        bannerHtml :
        '<ul>' +
            '{{each banner as value i}}'+
            '<li style="background:{{value.url}} center no-repeat">' +
			'<a href="{{value.href}}"></a>'+
			'</li>' +
			'{{/each}}'+
			 
            
        '</ul>'+
        '<ol>' +
        '{{each banner as value i}}'+
            '<li>' +
            '</li>' +
        '{{/each}}'+
        '</ol>'
    };
    bannerModule = function(place,data){
        bannerDOM(place,data)
    };
    bannerDOM = function(place,data){
        var render = template.compile(bannerConfigMap.bannerHtml);
        var html = render(data);
        place.html(html)
    };
    return { bannerModule : bannerModule };
})();

//品牌推荐
HS_index.indexPptj = (function(){
    var pptjConfigMap = {
        pptjHtml :
        '<div class="tub_bg1"><a href="javascript:;" class="index-more">品牌库>></a>品牌推荐</div> <div class="index-pptj-box">'+
        ' <div class="left-box w235" id="dhtx">' +
        '{{each tuijian.left as value i}}'+
        '<a href="{{value.href}}" title="{{value.title}}" target="_blank"><img src="{{value.url}}" alt="{{value.alt}}"/></a> ' +
        '{{/each}}'+
        '<div class="nohide"> ' +
        '<h3></h3> ' +
        '<a href="javascripr:;" title=""><img class="pptj_logo" src="images/11112.png" alt="航标卫浴logo"/></a> ' +
        '<p><a href="javascripr:;" title="">航标卫浴</a><br><span>大牌限时购</span></p> ' +
        '</div> ' +
        '</div> ' +
        '<ul class="center-box w720 clearfix"> ' +
        '{{each tuijian.li as value i}}'+
        '<li> ' +
        '<a  href="{{value.href}}"title="{{value.title}}" target="_blank"><img src="{{value.url}}" alt="{{value.alt}}"/></a> ' +
        '</li> ' +
        '{{/each}}'+
        '</ul> ' +
        '<div class="right-box w235"> ' +
        '{{each tuijian.right as value i}}'+
        '<a href="{{value.href}}" title="{{value.title}}" target="_blank"><img src="{{value.url}}" alt="{{value.alt}}"/></a> ' +
        '{{/each}}'+
        '</div>'+
        '</div>'
    };
    pptjModule = function(place,data){
        pptjDOM(place,data)
    };
    pptjDOM = function(place,data){
        var render = template.compile(pptjConfigMap.pptjHtml);
        var html = render(data);
        place.html(html)
    };
    return { pptjModule : pptjModule };
})();

//热销产品，新品热卖
HS_index.indexRxcp = (function(){
    var rxcpConfigMap = {
        rxcpHtml :
        '<div class="tub_bg"><a href="javascript:;" class="index-more">更多商品>></a>' +
        '{{each nametitle as value i}}'+
        '{{value}}' +
        '{{/each}}'+
        '</div>' +
        '<ul class="clearfix"> ' +
        '{{each rexiao as value i}}'+
        '<li><a href="{{value.href}}" title="{{value.title}}"><img src="{{value.url}}" alt="{{value.title}}"/></a></li> ' +
        '{{/each}}'+
        '</ul>'
    };
    rxcpModule = function(place,data){

        rxcpDOM(place,data)
        rxcpBind()
    };
    rxcpDOM = function(place,data){
        var render = template.compile(rxcpConfigMap.rxcpHtml);
        var html = render(data);
        place.html(html)
    };
    rxcpBind = function(){

    };
    return { rxcpModule : rxcpModule };
})();

//建材城,家具城,装饰城
HS_index.indexJcc = (function(){
    var jccConfigMap = {
        jccHtml :
        '<div class="tub_bg">' +
        '<a href="javascript:;" class="index-more">更多新品>></a> ' +
        '<div class="jjj-list"> ' +
        '{{each jiancai.tub_bg as value i}}'+
        '<a href="{{value.href}}" title="">{{value.title}}</a><span>|</span>' +
        '{{/each}}'+
        '</div>' +
        '{{each nametitle as value i}}'+
        '{{value}} ' +
        '{{/each}}'+
        '</div> ' +
        '<div class="jjj_box_pic clearfix"> ' +
        '<div class="jjj_left"> ' +
        '{{each jiancai.j_left as value i}}'+
        '<a href="{{value.href}}"  title="{{value.title}}"><img src="{{value.url}}" alt="{{value.title}}"/></a> ' +
        '{{/each}}'+
        '</div> ' +
        '<div class="jjj_center"> ' +
        '<ul> ' +
        '{{each jiancai.j_center as value i}}'+
        '<li><a href="{{value.href}}" title="{{value.title}}"><img src="{{value.url}}"  alt="{{value.title}}"></a></li> ' +
        '{{/each}}'+
        '</ul> ' +
        '<ol> ' +
        '<li class="cur"></li> ' +
        '<li></li> ' +
        '<li></li> ' +
        '</ol> ' +
        '</div> ' +
        '<div class="jjj_right"> ' +
        '{{each jiancai.j_right as value i}}'+
        '<a href="{{value.href}}"  title="{{value.title}}"><img src="{{value.url}}" alt="{{value.title}}"/></a> ' +
        '{{/each}}'+
        '</div> ' +
        '</div> ' +
        '<div class="jjj_box_pic1 clearfix"> ' +
        '<ul class="jjj_left_1 clearfix"> ' +
        '{{each jiancai.b_left as value i}}'+
        '<li><a href="{{value.href}}" title="{{value.title}}">{{value.title}}</a></li> ' +
        '{{/each}}'+
        '</ul> ' +
        '<ul class="jjj_right_1 clearfix"> ' +
        '{{each jiancai.b_right as value i}}'+
        '<li><a href="{{value.href}}" title="{{value.title}}"><img src="{{value.url}}" alt="{{value.title}}"/></a></li> ' +
        '{{/each}}'+
        '</ul> ' +
        '</div> ' +
        '<div class="jjj_logo"> ' +
        '<ul class="clearfix"> ' +
        '{{each jiancai.jc_logo as value i}}'+
        '<li> ' +
        '<img src="{{value.url}}" alt=""/> ' +
        '<p><a href="javascript:;" title="">九州度</a></p> ' +
        '</li> ' +
        '{{/each}}'+
        '</ul> ' +
        '</div>'
    };
    jccModule = function(place,data){
        jccDOM(place,data)
        jccBind()
    };
    jccDOM = function(place,data){
        var render = template.compile(jccConfigMap.jccHtml);
        var html = render(data);
        place.html(html)
    };
    jccBind = function(){

    };
    return { jccModule : jccModule };
})();

//特价城
HS_index.indexTj= (function(){
    var tjConfigMap = {
        tjHtml :
        '<div class="tub_bg"><a href="javascript:;" class="index-more">更多特价>></a>' +
        '{{each nametitle as value i}}' +
        '{{value}}'+
        '{{/each}}'+
        '</div>' +

        '<ul class="clearfix"> ' +
        '{{each tejia as value i}}' +
        '<li> ' +
        '<a href="{{value.href}}" title="{{value.title}}"><img src="{{value.url}}" alt="{{value.title}}"/></a> ' +
        '<p class="tej_pp">{{value.title}}</p> ' +
        '<p class="tej_ppp">{{value.xn}}</p> ' +
        '<p class="tej_pppp">价格：￥<b>{{value.jg}}</b> <span>原价：￥<i>{{value.yj}}</i></span></p> ' +
        '<a href="" class="tej_but">立即抢购</a> ' +
        '</li> ' +
        '{{/each}}'+
        '</ul>'
    };
    tjModule = function(place,data){
        tjDOM(place,data)
    };
    tjDOM = function(place,data){
        var render = template.compile(tjConfigMap.tjHtml);
        var html = render(data);
        place.html(html);
    };
    return { tjModule : tjModule };
})();

//楼层导航
HS_index.indexFloorNav = (function(){
    var floorNavConfigMap = {
        floorNavHtml :
        '<span class="floor-nav-top"><img src="images/fnav/zhixiaoc.png"></span> ' +
        '<ul class="floor-nav-li"> ' +
        '{{each fnav as value i}}'+
        '<li>{{i+1}}F<span>{{value.title}}</span></li> ' +
        '{{/each}}'+
        '</ul> '

    };
    floorNavModule = function(place,data){
        floorNavDOM(place,data);
        bindNavEvent();
    };
    floorNavDOM = function(place,data){
        var render = template.compile(floorNavConfigMap.floorNavHtml);
        var html = render(data);
        place.html(html)
    };
    bindNavEvent = function(){
        $(".floor-nav li").hover(function(){
            $(this).addClass("hov");
        },function(){
            $(this).removeClass("hov");
        })
        $(".floor-nav li").click(function(){
			$(".floor-nav li").removeClass("cur");
            $(this).addClass("cur");
        });
    };
    return { floorNavModule : floorNavModule };
})();

