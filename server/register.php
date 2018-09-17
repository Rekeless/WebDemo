<?php
/**
 * Created by PhpStorm.
 * User: heifa
 * Date: 2018/8/2
 * Time: 15:28
 */
header("Content-Type:application/json;charset=utf-8");

include "DBHelper.php";

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $account=$_REQUEST["account_register"];
    $password=$_REQUEST["password_register"];
//    $verify_code=$_REQUEST["verify_code"];
//    判断传值是否为null
    if(!empty($account)&&!empty($password)){

        $query_sql="insert into userinfo value(?,?)";

//        预查询(防止sql注入)
        $prepare_query=$conn->prepare($query_sql);
//        绑定参数
        $prepare_query->bind_Param("ss", $account, $password);

//        执行
        $prepare_query->execute();

        if($prepare_query->affected_rows>=1){
            print_r(json_encode(array("status"=>1,"msg"=>"注册成功")));
        }else{
            print_r(json_encode(array("status"=>0,"msg"=>"注册失败")));
        }
    }
}else{
    print_r(json_encode(array("status"=>0,"msg"=>"不支持get请求")));
}