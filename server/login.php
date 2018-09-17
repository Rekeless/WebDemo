<?php
/**
 * Created by PhpStorm.
 * User: heifa
 * Date: 2018/8/1
 * Time: 21:07
 */
header("Content-Type:application/json;charset=utf-8");

include "DBHelper.php";

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $account=$_REQUEST["account"];
    $password=$_REQUEST["password"];
//    $verify_code=$_REQUEST["verify_code"];
//    判断传值是否为null
    if(!empty($account)&&!empty($password)){

        $query_sql="select * from userinfo where account=? and password=?";

//        预查询(防止sql注入)
        $prepare_query=$conn->prepare($query_sql);
//        绑定参数
        $prepare_query->bind_Param("ss", $account, $password);

//        执行
        $prepare_query->execute();

        $return=$prepare_query->get_result();
        $result=$return->num_rows;

        if($result>=1){
            print_r(json_encode(array("status"=>1,"msg"=>"登录成功")));
        }else{
            print_r(json_encode(array("status"=>0,"msg"=>"登录失败")));
        }

    }
}else {
    print_r(json_encode(array("status"=>0, "msg"=>"不支持get请求")));
}
?>