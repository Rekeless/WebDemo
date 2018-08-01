$(function () {
    //header
    $(".item_down").mouseover(function () {
        $(this).find(".item_down_nav").stop(true, false).slideDown("fast");
    })
    $(".item_down").mouseout(function () {
        $(this).find(".item_down_nav").slideUp("fast");
    })
})

$(document).ready(function () {
    //验证码
    var code;

    function createCode() {
        code = '';//首先默认code为空字符串
        var codeLength = 4;//设置长度，这里看需求，我这里设置了4
        var codeV = $(".validate_code");
        //设置随机字符
        var random = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J',
            'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c',
            'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'i', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        for (var i = 0; i < codeLength; i++) { //循环codeLength 我设置的4就是循环4次
            var index = Math.floor(Math.random() * 54); //设置随机数范围,这设置为0 ~ 36
            code += random[index];  //字符串拼接 将每次随机的字符 进行拼接
        }
        codeV.text(code);//将拼接好的字符串赋值给展示的Value
    }

    //页面开始加载验证码
    createCode();
    //验证码Div加载点击事件
    $("#change_code").bind('click', function () {
        createCode();
    });

    //下面就是判断是否==的代码，无需解释
    $("#login_btn").bind('click', function () {
        var oValue = $(".u_info_code .sign_txt").val().toUpperCase();
        $(".validate_code_return").html("");
        if (oValue == "") {
            $(".validate_code_return").html("<font color='red'>请输入验证码</font>");
        } else if (oValue != code) {
            $(".validate_code_return").html("<font color='red'>验证码不正确，请重新输入</font>");
            oValue = "";
            createCode();
        } else {
            $(".validate_code_return").html("<font color='blue'>验证码正确</font>");
        }
    });
});
