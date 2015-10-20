/**
 * Created by Evil.01 on 2015/9/6.
 */

var HS_header= (function(){
    headModule = function ($container,data) {
        HS_header.shell.headModule($container,data)
    };
    return {headModule:headModule}
})();

HS_header.shell = (function(){
    var configMap = {
        header_html :[
            '    <div class="topWrap w">',
            '        <div class="logo">',
            '            <h1><a href="index.html"><img src="images/logo.jpg" alt="嗨森网 "/></a></h1>',
            '        </div>',
            '        <div class="top_c">',
            '{{each gonggao as value i}}',
            '            <img src="images/top_c.gif" alt="秒杀不定时_疯狂抢购_低到你想不到"/>',
            '{{/each}}',
            '        </div>',
            '        <div class="top_r">',
            '            <div class="searchWrap">',
            '                <div class="search">',
            '                    <form>',
            '                        <input class="txt" type="text"/>',
            '                        <input class="sum" type="submit" value="搜索"/>',
            '                    </form>',
            '                </div>',
            '                <ul class="hotSeach">',
            '{{each hotseach as value i}}',
            '                    <li><a class="bs" href="{{value.href}}">{{value.title}}</a></li>',
            '{{/each}}',
            '                </ul>',
            '            </div>',
            '            <div class="wdczc">',
            '                <h2><a href="javascript:;">我的嗨森购</a></h2>',
            '            </div>',
            '            <div class="gwc">',
            '                <div class="che"><h2><a href="http://www.dtczc.com/index.php/car/my_car.html">购物车<span class="bold green">0</span>件</a></h2></div>',
            '            </div>',
            '        </div>',
            '    </div>'].join("")
    };

    headModule = function ($container,data) {
        headDOM($container,data);
        bindEvent();
        setJqueryMap();
    };
    headDOM = function($container,data){
        var render1 = template.compile(configMap.header_html)
        var html1 =render1(data)

        $container.append(html1);

    };

    bindEvent = function(){

    };

    setJqueryMap = function(){

    };
return {headModule:headModule}



})();
