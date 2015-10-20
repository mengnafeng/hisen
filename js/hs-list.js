/**
 * Created by Administrator on 2015/9/8 0008.
 */
(function () {
    function List() {

    };
    List.prototype = {
        suaiEvent: function (ele) {
            $(ele).live("click", function () {
                var page = $(this).index() + 1;
                listFn.bindData("json/list-page" + page + ".json", function (data) {
                    HS_list.product.init($("#juc-a-abox6wrap"), data);
                    HS_list.page.init($("#page"), data,true);
                });
            })
        },
        bindData: function (url, callback) {
            $.ajax({
                type: "post",
                url: url,
                success: function (data) {
                    callback(data);

                }
            });
        }
    };
    var listFn = new List();

    listFn.bindData("json/header.json", function (data) {
        HS_top.ad.topModule();
        HS_header.headModule($('#header'), data);
    });

    listFn.bindData("json/nav.json", function (data) {
        HS_nav.navModule($('#nav'), data);
    });

    listFn.bindData("json/list-json.json", function (data) {
        HS_list.top.init($("h3"), null);
        HS_list.list.init($("#juc-a-a_box5wrap"), data);
        HS_list.class.init($("#warpin"), data);

    });

    listFn.bindData("json/list-page1.json", function (data) {
        HS_list.product.init($("#juc-a-abox6wrap"), data);
        HS_list.page.init($("#page"), data,false);
    });

    listFn.bindData("json/foot.json", function (data) {
        HS_footerWrap.footerModule($('body'), data);
    });

    listFn.bindData("json/detail.json", function (data) {
        details.ad.init($('.xq_bd_l'), null);
    });

    $("#page .links a").live("click", function () {
        var page = $(this).html();
        listFn.bindData("json/list-page" + page + ".json", function (data) {
            HS_list.product.init($("#juc-a-abox6wrap"), data);
            HS_list.page.init($("#page"), data);
        });
        $("html,body").animate({scrollTop: 390}, 0)
    });
    listFn.suaiEvent(".listpingp li");
    listFn.suaiEvent(".listfengg li");
    listFn.suaiEvent(".listcaiz li");
    listFn.suaiEvent(".listjiag li");
})();