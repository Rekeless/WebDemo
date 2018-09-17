<?php
/**
 * Created by PhpStorm.
 * User: heifa
 * Date: 2018/8/2
 * Time: 11:04
 */
include "DBHelper.php";
if($_SERVER["REQUEST_METHOD"]=="POST"&&!empty($_REQUEST["account"])){
    $account=$_REQUEST["account"];

    $query_sql="select * from userinfo where account=?";

    $prepare_query=$conn->prepare($query_sql);
//        绑定参数
    $prepare_query->bind_param("s",$account);
//        执行

    $prepare_query->execute();

    $result=$prepare_query->get_result();

    if($result->num_rows>=1){
        print_r("true");
    }else{
        print_r("false");
    }
}