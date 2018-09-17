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

//获取商品id
function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//浏览商品
$(function () {
    $(".goods_img").click(function () {
        var id=$(this).parent().index()%7;
        setCookie("goodsid",id,1);
        window.location.href="/goodsDetail.html";
    })
})

//添加商品到购物车
var goods_number=new Array(7);
var goods_number_total=0;
for (var i = 0; i < goods_number.length; i++) {
    goods_number[i]=0;
}
function add_gooods_number(index) {
    goods_number[index]++;
}
$(function () {
    $(".pinfo_buy").click(function () {
        var id=parseInt($(this).parent().parent().parent().index())%7;
        add_gooods_number(id);
        goods_number_total++;
        // for (i = 0; i <goods_number.length; i++) {
        //     goods_number_total+=goods_number[i];
        // }
        //sidebar显示购物车商品数量
        $(".sidebar_shopcart_num").text(goods_number_total);
    })
})

$(function () {
    //header
    $(".item_down").mouseover(function () {
        $(this).find(".item_down_nav").stop(true, false).slideDown("fast");
    })
    $(".item_down").mouseout(function () {
        $(this).find(".item_down_nav").slideUp("fast");
    })

    //购物车
    $(".header_cshopcar").mouseover(function () {
        $(this).find(".header_shopgoods").stop(true, false).slideDown("fast");
    })
    $(".header_cshopcar").mouseout(function () {
        $(this).find(".header_shopgoods").slideUp("fast");
    })

    //知我商城
    $("#hfcli").mouseover(function () {
        $(this).find(".header_footernav_hide").stop(true, false).slideDown("fast");
    })
    $("#hfcli").mouseout(function () {
        $(this).find(".header_footernav_hide").slideUp("fast");
    })

//    返回顶部
    $(".sidebar_gotop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    })

    //左侧导航栏显示
    $(window).bind("scroll", function () {
        if ($(window).scrollTop() > 520) {
            $(".sidenav").css(
                // {"display":"block"},
                {"opacity": "1"}
            )
        } else {
            $(".sidenav").css(
                // {"display":"none"},
                {"opacity": "0"}
            )
        }
    })
})

//    slideshow
$(function () {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("myslide");
        var slides_btn = document.getElementsByClassName("myslide_btn");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides_btn[i].style.background = "#6c6c6c";
        }
        slides[slideIndex].style.display = "block";
        slides_btn[slideIndex].style.background = "#00c8ff";

        $(".myslide_btn").click(function () {
            slideIndex = $(this).index();
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                slides_btn[i].style.background = "#6c6c6c";
            }
            slides_btn[slideIndex].style.background = "#00c8ff";
            slides[slideIndex].style.display = "block";
        })
        slideIndex++;
        if (slideIndex > slides.length - 1) {
            slideIndex = 0
        }
        // $(".slideshow_container").mouseover(function () {
        //     clearTimeout(timer)
        // })
        // $(".slideshow_container").mouseout(function () {
        //     setTimeout(showSlides,3000);
        // })
        setTimeout(showSlides, 3000);
    }

})

