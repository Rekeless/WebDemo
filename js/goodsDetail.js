//获取产品id
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
//
function checkCookie_goods() {
    var goodsid = parseInt(getCookie("goodsid"))+1;
    if (goodsid != "") {
        if(goodsid==1){
            $(".pos_end").text("可莱丝APE乳清蛋白面膜10片");
            $(".di_text").text("可莱丝APE乳清蛋白面膜10片，含有APE生物酶成分。能够促进肌肤代谢，给问题细胞打造排除口，排除皮肤垃圾，恢复肌肤健康，逐步改善痘痘肌肤。")
            $(".detailpro_show_img img").attr("src","images/goods_show_"+goodsid+".jpg");
            $(".dsb_btnbox_price span").text("85");
        }
        if(goodsid==2){
            $(".pos_end").text("巴宝莉节奏/动感节拍男士香水4.5ml");
            $(".di_text").text("巴宝莉节奏/动感节拍男士香水4.5ml，有关于活在当下的男人香水，历史和现在的气息完美结合。充满男性活力、诠释出充满个人自由的生活态度，前调和中调优雅和带有烟熏和皮革的木材。后调甘甜的柑橘和辛辣的黑胡椒产生强烈对比，男人味十足！")
            $(".detailpro_show_img img").attr("src","images/goods_show_"+goodsid+".jpg");
            $(".dsb_btnbox_price span").text("55");
        }
    }
}

//显示用户名
function checkCookie_user() {
    var username = getCookie("username");
    var welcome = $("<li></li>").text("欢迎，知我用户" + username);
    var unlogin = $("<li></li>").text("退出")
    if (username != "") {
        $(".header_top_content_left>ul>li:eq(1)").remove();
        $(".header_top_content_left>ul>li:eq(1)").remove();
        $(".header_top_content_left>ul").append(welcome);
        $(".header_top_content_left>ul").append(unlogin);

        //退出登陆

        $(".header_top_content_left>ul>li:eq(2)").click(function () {
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            location.reload();
        })
    }
}

$(function () {
    //header
    $(".item_down").mouseover(function () {
        $(this).find(".item_down_nav").stop(true, false).slideDown("fast");
    })
    $(".item_down").mouseout(function () {
        $(this).find(".item_down_nav").slideUp("fast");
    })

    //    返回顶部
    $(".sidebar_gotop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);    })

//    商品导航栏
    $(window).bind("scroll",function () {
        if($(window).scrollTop() > 1164) {
            $(".dib_title").addClass("dib_title_float")
        }
        else if($(window).scrollTop() < 1164){
            $(".dib_title").removeClass("dib_title_float")

        }
        })
})