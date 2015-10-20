/**
 * Created by 冯萌娜 on 2015/9/5.
 */
var details = {}

details.ad=(function(){

    var config={
        main_html:
        '<div class="rqrm">'
        +'<h2>人气热卖</h2>'
        +'<ul  id="rqrm">'
        +'<li class="current">'
        +'<b>￥13800</b>'
        +'<span></span>'
        +'<a href="javascript:;">西蒙电气 吊灯铭...</a>'
        +'<dl>'
        +'<dt>'
        +'<a href="javascript:;"><img src="images/1.png" alt="" width="170" height="113"/></a>'
        +'</dt>'
        +'<dd class="wz_bg"></dd>'
        +'<dd class="wz">热销量：11</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<b>￥13800</b>'
        +'<span>2</span>'
        +'<a href="javascript:;">西蒙电气 吊灯铭...</a>'
        +'<dl>'
        +'<dt>'
        +'<a href="javascript:;"><img src="images/1.png" alt="" width="170" height="113"/></a>'
        +'</dt>'
        +'<dd class="wz_bg"></dd>'
        +'<dd class="wz">热销量：11</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<b>￥13800</b>'
        +'<span>3</span>'
        +'<a href="javascript:;">西蒙电气 吊灯铭...</a>'
        +'<dl>'
        +'<dt>'
        +'<a href="javascript:;"><img src="images/1.png" alt="" width="170" height="113"/></a>'
        +'</dt>'
        +'<dd class="wz_bg"></dd>'
        +'<dd class="wz">热销量：11</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<b>￥13800</b>'
        +'<span>4</span>'
        +'<a href="javascript:;">西蒙电气 吊灯铭...</a>'
        +'<dl>'
        +'<dt>'
        +'<a href="javascript:;"><img src="images/1.png" alt="" width="170" height="113"/></a>'
        +'</dt>'
        +'<dd class="wz_bg"></dd>'
        +'<dd class="wz">热销量：11</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<b>￥13800</b>'
        +'<span>5</span>'
        +'<a href="javascript:;">西蒙电气 吊灯铭...</a>'
        +'<dl>'
        +'<dt>'
        +'<a href="javascript:;"><img src="images/1.png" alt="" width="170" height="113"/></a>'
        +'</dt>'
        +'<dd class="wz_bg"></dd>'
        +'<dd class="wz">热销量：11</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<b>￥13800</b>'
        +'<span>6</span>'
        +'<a href="javascript:;">西蒙电气 吊灯铭...</a>'
        +'<dl>'
        +'<dt>'
        +'<a href="javascript:;"><img src="images/1.png" alt="" width="170" height="113"/></a>'
        +'</dt>'
        +'<dd class="wz_bg"></dd>'
        +'<dd class="wz">热销量：11</dd>'
        +'</dl>'
        +'</li>'
        +'</ul>'
        +'</div>'
        +'<div class="xgpp">'
        +'<h2>相关品牌</h2>'
        +'<div>'
        +'<ul>'
        +'<li>舒舍旗舰店</li>'
        +'<li>兴永家具旗</li>'
        +'<li>克度国际旗</li>'
        +'<li>晨宇家具</li>'
        +'<li>瑞龙</li>'
        +'<li>欧奢</li>'
        +'<li>MBA</li>'
        +'<li>VOK</li>'
        +'<li>海玛臻品</li>'
        +'<li>韩之彩</li>'
        +'<li>奥斯丽诗</li>'
        +'</ul>'
        +'<ul class="lgh">'
        +'<li>英郦庄园</li>'
        +'<li>御舍木工坊</li>'
        +'<li>艺轩家具</li>'
        +'<li>阿罗吉斯</li>'
        +'<li>米拉诺旗舰</li>'
        +'<li>凯瑞蒂旗舰</li>'
        +'<li>米兰布艺</li>'
        +'<li>朗司卫浴</li>'
        +'<li>天丽壁纸</li>'
        +'<li>赛百家旗舰</li>'
        +'</ul>'
        +'</div>'
        +'</div>'
        +'<div class="djhml">'
        +'<h2>大家还买了</h2>'
        +'</div>'
        +'<div class="djlll">'
        +'<h2>大家还浏览了</h2>'
        +'</div>'
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
        var rqrm=document.getElementById('rqrm');
        var rlis=rqrm.getElementsByTagName('li');
        var rspans=rqrm.getElementsByTagName('span');
        for(var i=0;i<rlis.length;i++){
            rlis[i].onmouseover= function () {
                for(var i=0;i<rlis.length;i++){
                    rlis[i].className=''
                    this.className='current'
                }
            }
        }
        function syz(){
            for(var j=0;j<rspans.length;j++){
                rspans[j].innerHTML=j+1
            }
        }
        syz();

    }
    return {init : init}
}())
