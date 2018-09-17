$(function () {
    //header
    $(".item_down").mouseover(function () {
        $(this).find(".item_down_nav").stop(true, false).slideDown("fast");
    })
    $(".item_down").mouseout(function () {
        $(this).find(".item_down_nav").slideUp("fast");
    })
})

//获取用户名
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
//显示用户名
function checkCookie() {
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
//商品数量
$(function () {
    var goods_number=1;
    $(".mcci_goods_number_decrease").click(function () {
        goods_number--;
        if (goods_number<=0){
            goods_number=0;
        }
        $(".mcci_goods_number_input").text(goods_number);
        $("#goods_price_total").text(goods_number*49.9);
        $("#goods_score").text(parseInt(goods_number*49.9));
        $(".mcci_footer_number i").text(goods_number);
        $(".mcci_footer_total_price").text(goods_number*49.9);

    })
    $(".mcci_goods_number_increase").click(function () {
        goods_number++;
        $(".mcci_goods_number_input").text(goods_number);
        $("#goods_price_total").text(goods_number*49.9);
        $("#goods_score").text(parseInt(goods_number*49.9));
        $(".mcci_footer_number i").text(goods_number);
        $(".mcci_footer_total_price").text(goods_number*49.9);
    })
    $("#goods_drop").click(function () {
        goods_number=0;
        $(".mcci_goods_number_input").text(goods_number);
        $("#goods_price_total").text(goods_number*49.9);
        $("#goods_score").text(parseInt(goods_number*49.9));
        $(".mcci_footer_number i").text(goods_number);
        $(".mcci_footer_total_price").text(goods_number*49.9);
    })
    
})