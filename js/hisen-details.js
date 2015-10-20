/**
 * Created by 冯萌娜 on 2015/9/5.
 */
var details = {}
//详情页  支付模块start
details.title=(function(){

    var config={
        main_html:
        '<div class="xq_hd_l">'
        +'<h3 class="xq_bt">'
        +'<a href="javascript:;">[ 凯玛特 ]</a>'
        +'<strong>凯玛特  20112-TL 台灯</strong>'
    +'<span>编号：KMT-CZC-93530</span>'
    +'</h3>'
    +'<div class="xq_slider" >'
        +'<div class="spec-preview" id="small">'
        +'<img src="images/83fcdc784a839fb05b91ca2edbea5895.jpg" width="510" height="339" alt=""/>'
        +'<div class="toum" id="toum"></div>'
        +'<div class="da" id="da"><img src="images/83fcdc784a839fb05b91ca2edbea5895.jpg" width="1024" alt=""/></div>'
        +'</div>'
        +'<div class="spec-scroll">'
        +'<a href="javascript:;" class="xq_prev">&lt;</a>'
        +'<div class="items">'
        +'<ul>'
        +'<li><img src="images/83fcdc784a839fb05b91ca2edbea5895.jpg" alt=""/></li>'
        +'<li><img src="images/83fcdc784a839fb05b91ca2edbea5895.jpg" alt=""/></li>'
        +'<li><img src="images/83fcdc784a839fb05b91ca2edbea5895.jpg" alt=""/></li>'
        +'<li><img src="images/83fcdc784a839fb05b91ca2edbea5895.jpg" alt=""/></li>'
        +'</ul>'
        +'</div>'
        +'<a href="javascript:;"class="xq_next">&gt;</a>'
        +'</div>'
        +'<div class="xq_fx">'
        +'<a href="javascript:;">分享</a>'
        +'<a href="javascript:;">收藏</a>'
        +'</div>'
        +'</div>'
        +'<div  style="float: right; margin-top: 10px;width: 470px">'
        +'<div class="xq_sp">'
        +'<h3 class="xq_dbt">凯玛特 20112-TL欧式风格树脂台灯</h3>'
        +'<div class="xqsm_puic">'
        +'<dl>'
        +'<dt>本站价：</dt>'
        +'<dd>'
        +'<i>'
        +'<span style="color:#ca033b">￥</span>'
        +'</i>'
        +'<b>580</b>'
        +'</dd>'
        +'</dl>'
        +'<dl>'
        +'<dt>已售：</dt>'
        +'<dd>'
        +'<i>0</i>'
        +'件'
        +'</dd>'
        +'</dl>'
        +'<dl>'
        +'<dt>服务：</dt>'
        +'<dd>'
        +'由'
        +'<i>城中诚家园</i>'
        +'发货并提供售后服务。'
        +'</dd>'
        +'</dl>'
        +'</div>'
        +'</div>'
        +'<div class="xq_spgs">'
        +'<div class="xq_spgg">'
        +'<dl>'
        +'<dt>规格：</dt>'
        +'</dl>'
        +'<ul>'
        +'<li class="kuang">420*210*740mm</li>'
        +'</ul>'
        +'</div>'
        +'<dl class="xq_sl clear">'
        +'<dt>数量：</dt>'
        +'<dd>'
        +'<input type="text" value="1" id="numinput"/>件'
        +'<div class="dei" id="dei">+</div>'
        +'<div class="dei1" id="dei1">-</div>'
        +'</dd>'
        +'</dl>'
        +'</div>'
        +'<div class="xqzf_puic">'
        +'<dl class=" xq_fk">'
        +'<dt>付款：</dt>'
        +'<dd>'
        +'<a href="javascript:;">'
        +'<img src="images/payment.jpg" alt=""/>'
        +'</a>'
        +'</dd>'
        +'</dl>'
        +'<div class="xa_but">'
        +'<a href="javascript:;" class="y_button">立即购买</a>'
        +'<a href="javascript:;"class="g_button">加入购物车</a>'
        +'</div>'
        +'<p class="ydwz">'
        +'<a href="javascript:;" style="color: #ca033b;">体验店地址</a>'
        +'<a href="javascript:;" style="margin: 0 7px;">|</a>'
        +'<a href="javascript:;">郑重承诺</a>'
        +'<a href="javascript:;">质保一年</a>'
        +'<a href="javascript:;">价格保护</a>'
        +'<a href="javascript:;">常见问题</a>'
        +'</p>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'<div class="xq_hd_r"><img src="images/2015-9-5 19-50-13.png" alt=""/>'
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
        //+- start
        var dei=document.getElementById('dei');
        var dei1=document.getElementById('dei1');
        var numinput=document.getElementById('numinput');
        var numval;
        dei.onclick=function(){
            numval=parseInt(numinput.value)+1
            numinput.value=numval
        };
        dei1.onclick=function(){
            if(numval>1){
                numval=numinput.value-1
                numinput.value=numval
            }
        };
        //+-  end

        //放大镜 start
        function show(id){id.style.display = 'block';}
        function hide(id){id.style.display = 'none';}
        var toum=document.getElementById('toum');
        var toumW=toum.style.width=510/1024*450+'px';
        var toumH=toum.style.height=300*339/682+'px';
        var small=document.getElementById('small')
        var da=document.getElementById('da')
        var mouseX=0;
        var mouseY=0;
        var daX=0;
        var daY=0;
        var dapic=da.children[0]
        small.onmouseover=function(){
            show(da);
            show(toum)
        };
        small.onmouseout =function(){
            hide(da)
            hide(toum)
        };
        small.onmousemove=function(e){
            var e=e||event
            mouseX= e.clientX-small.offsetLeft-parseInt(toumW)/2
            mouseY= e.clientY-small.offsetTop-parseInt(toumH)/2
            if(mouseX<0){
                mouseX=0;
            }else if(mouseX>510-parseInt(toumW)){
                mouseX=510-parseInt(toumW)
            };
            if(mouseY<0){
                mouseY=0
            }else if(mouseY>339-parseInt(toumH)){
                mouseY=339-parseInt(toumH);
            }
            toum.style.left=mouseX+'px'
            toum.style.top=mouseY+'px'

            daX=1024/510*mouseX
            daY=682/339*mouseY
            dapic.style.marginLeft=-daX+'px'
            dapic.style.marginTop=-daY+'px'
        }

    }
    return {init : init}
}())
//详情页  支付模块end
//详情页  ad模块start
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
    //详情页  支付模块end
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
//详情页  ad模块end

//详情页  nav start
details.allnav=(function(){

    var config={
        main_html:
        '<h3 id="navall">'
        +'<span class="current">商品详情</span>'
        +'<span>规格参数</span>'
        +'<span>用户评价</span>'
        +'<span>购买记录</span>'
        +'<span>售后服务</span>'
        +'<span>常见问题</span>'
        +'</h3>'
        +'<ul class="alltit" id="alltit">'
        +'<li class="current">'
        +'<div class="smk">'
        +'<div style="width: 200px;height: 20px;background: #fff;"></div>'
        +'<img src="images/haha.png" alt=""/>'
        +'<div class="rfix" id="rfix">'
        +'<img src="images/fixed.png" alt=""/>'
        +'</div>'

        +'<img src="images/20150703064011_40432.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064011_19758.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064011_37438.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064011_33749.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064011_46529.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064011_37501.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064011_42041.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064011_23631.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064012_29248.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064012_26943.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064012_21859.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064012_11930.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064012_19525.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064012_30272.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064012_75330.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064012_18335.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064012_93298.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064013_44675.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064013_75890.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064013_17533.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064020_11505.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064021_22340.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064021_31978.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064021_29212.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064021_50454.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064021_87030.jpg" alt="" width="790px"/>'
        +'<img src="images/20150703064021_28058.jpg" alt="" width="790px"/>'
        +'</div>'
        +'</li>'
        +'<li>'
        +'<img src="images/2015-9-7 18-27-29.png" alt="" style="margin-top: 20px;"/>'
        +'</li>'
        +'<li></li>'
        +'<li></li>'
        +'<li></li>'
        +'<li></li>'
        +'</ul>'
    }
    //详情页  支付模块end
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
        var rfix=document.getElementById('rfix');
        var rfixoff=rfix.offsetTop
        var rfixleft=rfix.offsetLeft;

        window.onscroll=function(){
                var scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                if(scrolltop>=rfixoff){
                    rfix.className='rfix1'
                    rfix.style.left=rfixleft+'px'
                }else{
                    rfix.className='rfix'
                    rfix.style.left=rfixleft+'px'
                }
            }
        var spans=document.getElementById('navall').getElementsByTagName('span');
        var lis=document.getElementById('alltit').getElementsByTagName('li');
        for(var i=0;i<spans.length;i++){
            spans[i].index=i
            spans[i].onclick=function(){
                for(var i=0;i<spans.length;i++){
                    lis[i].className=''
                    spans[i].className='';
                    this.className='current'
                }
                lis[this.index].className='current'
            }
        }
    }
    return {init : init}
}())
//详情页 nav end

//详情页底部 star
details.xq_ft=(function(){

    var config={
        main_html:
        '<div class="jzsj">'
        +'<h3>家装设计<span>DESIGN</span></h3>'
        +'<dl>'
        +'<a href="javascript:;">'
        +'<dt>'
        +'<img src="images/83fcdc784a839fb05b91ca2edbea5895.jpg" alt="" width="175" height="138"/>'
        +'</dt>'
        +'<dd><strong>如何选择房子的装修风格</strong></dd>'
        +'<dd> 在准备装修房子的时候，最难以下定决心的就是选什么样的风格。但是这个偏偏是要在 开工之前就定好的，中途更改的话就容易不伦不类。那么选什么样的风格才是最合适自己的呢？要怎样确定呢？ 从容不迫地思考 如果......</dd>'
        +'</a>'
        +'</dl>'
        +'</div>'
        +'<div class="jzzs">'
        +'<h3>家装知识</h3>'
        +'<ul>'
        +'<li>'
        +'<a href="javascript:;">家装创意</a>'
        +'<span>2014-01-02</span>'
        +'</li>'
        +'</ul>'
        +'</div>'


    }
    //详情页  支付模块end
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

