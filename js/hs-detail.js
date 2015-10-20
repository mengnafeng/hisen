/**
 * Created by Administrator on 2015/9/8 0008.
 */
$(function(){
    var HS_detail = {};
    HS_detail.dataBind = function(url,callback){
        $.ajax({
            type:"post",
            url:url,
            success:function(data){
                callback(data)

            }
        });
    };
    HS_detail.dataBind("json/header.json",function(data){
        HS_top.ad.topModule();
        HS_header.headModule($('#header'),data);
    });
    HS_detail.dataBind("json/nav.json",function(data){
        HS_nav.navModule($('#nav'),data);
        $(".nav_L").hide();
        $(".navWrap_left .allSub").mouseenter(function(){
            $(".nav_L").show();
        });
        $(".navWrap_left .allSub").mouseleave(function(){
            $(".nav_L").hide();
        });
    });
    HS_detail.dataBind("json/detail.json",function(data){
        details.title.init($('#zhifu'),null);
        details.ad.init($('.xq_bd_l'),null);
        details.allnav.init($('.xq_bd_all'),null);
        details.xq_ft.init($('.xq_ft'),null);
    });
    HS_detail.dataBind("json/foot.json",function(data){
        HS_footerWrap.footerModule($('body'),data);
    });

});