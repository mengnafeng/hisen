/**
 * Created by Administrator on 2015/9/5 0005.
 */

$(function(){
        function Index(){
        }
        Index.prototype = {
			//轮播图
            banner:function(data){
                var num=0;
                var olNum = 0;
                var timer = setInterval(autoplay,4000);
                $(".banner ol li").eq(0).addClass("cur");
                $(".banner ul li").eq(0).show();
                 function autoplay(){
                     num++;
                     if(num>=data.banner.length){
                         num=0;
                     }
                     bannerplay(num);
                };
                $(".banner").live("mouseover",function(){
                    clearInterval(timer)
                });
                $(".banner").live("mouseout",function(){
                    timer = setInterval(autoplay,4000);
                });
                $(".banner ol li").on("click",function(){
                    olNum = $(this).index();
                    num = olNum;
                    bannerplay(olNum);
                });
                function bannerplay(num){
                    $(".banner ol li").eq(num).addClass("cur").siblings().removeClass("cur");
                    $(".banner ul li").eq(num).fadeIn(800).siblings().fadeOut(800);
                };

            },
			//品牌推荐
            tuijian:function(){
                $(".index-pptj-box .left-box").live("mouseover",function(){
                    $(this).children(".nohide").stop().animate({height:175},400)
                })
                $(".index-pptj-box .left-box").live("mouseout",function(){
                    $(this).children(".nohide").stop().animate({height:0},400)
                })
            },
			//绑定数据
            dataBind:function(url,callback){
                $.ajax({
                    url:url,
                    type:"post",
                    success:function(data){
                        callback(data);
                    }
                });
            },
			//滚动屏幕
			scrollPage:function(callback){
				var floorNum = 0;//定义当前楼层，默认是0

				//获取各个楼层到顶部的距离
				var floor1 = $(".index-Hots").position().top;
				var floor2 = $(".index-News").position().top;
				var floor3 = $(".jjj_box").eq(0).position().top;
				var floor4 = $(".jjj_box").eq(1).position().top;
				var floor5 = $(".jjj_box").eq(2).position().top;
				var floor6 = $(".index-teja").position().top;

				//屏幕滚动的距离
				var scrollTop = $(window).scrollTop() + $(window).height()-200;
				bindScrollData(floorNum);//页面按F5刷新也要加载对应楼层以上的数据。
				for(var i=0;i<floorNum;i++){
					bindScrollData(i);
					}
				//滚动屏幕
				$(window).scroll(function(){
					bindScrollData(floorNum)
				});
				function bindScrollData(Num){
					scrollTop = $(window).scrollTop() + $(window).height()-200;
					if(scrollTop>floor1){
						$(".floor-nav").show();
						}else{
						$(".floor-nav").hide();
						}
					if(scrollTop>=floor1&&scrollTop<floor2){
						scrollGo(0);
						floorNum = 1;
					}else if(scrollTop>=floor2&&scrollTop<floor3){
						scrollGo(1);
						floorNum = 2;
					}else if(scrollTop>=floor3&&scrollTop<floor4){
						scrollGo(2);
						floorNum = 3;
					}else if(scrollTop>=floor4&&scrollTop<floor5){
						scrollGo(3);
						floorNum = 4;
					}else if(scrollTop>=floor5&&scrollTop<floor6){
						scrollGo(4);
						floorNum = 5;
					}else if(scrollTop>=floor6){
						scrollGo(5);
						floorNum = 6;
					}
					callback(Num)
					
				}
				$(".floor-nav li").live("click",function(){
					var index = $(this).index()
					var thisOffsetTop;
					if(index==0){
						thisOffsetTop = floor1
					}else if(index==1){
						thisOffsetTop = floor2
					}else if(index==2){
						thisOffsetTop = floor3
					}else if(index==3){
						thisOffsetTop = floor4
					}else if(index==4){
						thisOffsetTop = floor5
					}else if(index==5){
						thisOffsetTop = floor6
					}
					$("html,body").animate({scrollTop:thisOffsetTop},1000); 
					})
				function scrollGo(num){
					$(".floor-nav li").removeClass("cur");
					$(".floor-nav li").eq(num).addClass("cur");
				}	
			}
        };
        var indexFn = new Index();
		var keyNum = 1;
        //初始化标签
        var body = $("body");
        HS_index.initModule($("body"));

        //发送初始化请求

		//加载顶部，头部模块
		indexFn.dataBind("json/header.json",function(data){
			HS_top.ad.topModule();
			HS_header.headModule($('#header'),data);
        });

		//加载导航模块
        indexFn.dataBind("json/nav.json",function(data){
            HS_nav.navModule($('#nav'),data);
        });

		//加载楼层导航模块
		indexFn.dataBind("json/floornav.json",function(data){
			HS_index.indexFloorNav.floorNavModule($('.floor-nav'),data)
		});

		//加载底部模块
		indexFn.dataBind("json/foot.json",function(data){
			HS_footerWrap.footerModule($('body'),data);
		});

		//加载初始化楼层模块
        indexFn.dataBind("json/index.json",function(data){
            //绑定初始化数据
            HS_index.indexBanner.bannerModule($(".banner"),data);
             HS_index.indexPptj.pptjModule($(".index-pptj"),data);
             HS_index.indexRxcp.rxcpModule($(".index-Hots"),data);
             indexFn.banner(data);
			 indexFn.tuijian(data);
         });

		//滚动屏幕的时候加载对应楼层的模块
		indexFn.scrollPage(function(num){
			if(num==1&&keyNum==1){
				keyNum = 2;
				indexFn.dataBind("json/index1.json",function(data){
            		HS_index.indexRxcp.rxcpModule($(".index-News"),data);
				});
			}else if(num==2&&keyNum==2){
				keyNum = 1;
				indexFn.dataBind("json/index2.json",function(data){
					HS_index.indexJcc.jccModule($("#index-jccs"),data);
				});
			}else if(num==3&&keyNum==1){
				keyNum = 2;
				indexFn.dataBind("json/index3.json",function(data){
					HS_index.indexJcc.jccModule($("#index-jjcs"),data);
				});
			}else if(num==4&&keyNum==2){
				keyNum = 1;
				indexFn.dataBind("json/index4.json",function(data){
					HS_index.indexJcc.jccModule($("#index-jscs"),data);
				});
			}else if(num==5&&keyNum==1){
				keyNum= 3;
				indexFn.dataBind("json/index5.json",function(data){
					HS_index.indexTj.tjModule($(".index-teja"),data);
				});
			}	
		});
});

