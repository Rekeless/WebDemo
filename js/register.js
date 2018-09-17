//记录用户
function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
$(function () {
    $("#register_btn").click(function () {
        var name=$("#register_username").val();
        setCookie("username",name,1)
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

    $("#register_btn").bind('click', function () {
        var oValue = $(".u_info_code .sign_txt").val().toUpperCase();
        var bValue = code.toUpperCase();
        $(".validate_code_return").html("");
        if (oValue == "") {
            $(".validate_code_return").html("<font color='red'>请输入验证码</font>");
        } else if (oValue != bValue) {
            $(".validate_code_return").html("<font color='red'>验证码不正确，请重新输入</font>");
            oValue = "";
            createCode();
        } else {
            $(".validate_code_return").html("<font color='blue'>验证码正确</font>");
        }
    });
});

$(function () {
    //header
    $(".item_down").mouseover(function () {
        $(this).find(".item_down_nav").stop(true, false).slideDown("fast");
    })
    $(".item_down").mouseout(function () {
        $(this).find(".item_down_nav").slideUp("fast");
    })
})

//注册验证
$(function () {
    $.validator.addMethod("isPhoneNumber",function (val, ele, p) {
        return /^[1][3,4,5,7,8][0-9]{9}$/.test(val);
    })
    $("#register_user_info").validate({
        rules: {
            account_register: {
                required:true,
                maxlength:11,
                minlength:11,
                remote:{
                    url:"../server/register_checkAccount.php",
                    type:"post"
                },
                isPhoneNumber:true,
            },
            password_register:{
                required:true,
                minlength:7,
            },
            password_confirm_register:{
                required:true,
                equalTo:"#register-password",
            }

            // verify_code:{
            //     required:true,
            //     equalTo:text(code),
            // }
        },
        messages: {
            account_register: {
                required:"请输入手机号",
                maxlength:"请输入正确的手机号",
                minlength:"请输入正确的手机号",
                isPhoneNumber:"请输入正确的手机号",
                remote:"该手机号已被注册"
            },
            password_register:{
                required:"请输入密码",
                minlength:"请输入最少7位密码"
            },
            password_confirm_register:{
                required:"请确认密码",
                equalTo:"两次输入不一致"
            }
        },

        submitHandler:function () {
            $.ajax({
                url: "../server/register.php",
                type: "post",
                data:$("#register_user_info").serialize(),
                dataType: "json",
                success: function (res) {
                    if(res.status==1){
                        alert("注册成功");
                        window.location.href ="http://10.41.154.57/week3/index.html";
                    }
                    else{
                        alert("注册出错，请重试")
                    }
                }
            })
        }
    })
})



