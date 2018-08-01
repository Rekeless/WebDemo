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
        $(this).find(".header_footernav_hide").stop(true,false).slideDown("fast");
    })
    $("#hfcli").mouseout(function () {
        $(this).find(".header_footernav_hide").slideUp("fast");
    })
    
//    返回顶部
    $(".sidebar_gotop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);    })

    //左侧导航栏显示
    $(window).bind("scroll",function () {
        if($(window).scrollTop() > 520) {
            $(".sidenav").css(
                // {"display":"block"},
                {"opacity":"1"}
            )
        } else {
            $(".sidenav").css(
                // {"display":"none"},
                {"opacity":"0"}
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
            slideIndex=$(this).index();
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                slides_btn[i].style.background = "#6c6c6c";
            }
            slides_btn[slideIndex].style.background = "#00c8ff";
            slides[slideIndex].style.display = "block";
        })
        slideIndex++;
        if (slideIndex> slides.length-1) {slideIndex = 0}

        // $(".slideshow_container").mouseover(function () {
        //     clearTimeout(timer)
        // })
        // $(".slideshow_container").mouseout(function () {
        //     setTimeout(showSlides,3000);
        // })
        setTimeout(showSlides,3000);
    }

})

