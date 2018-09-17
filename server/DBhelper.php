<?php
/**
 * Created by PhpStorm.
 * User: heifa
 * Date: 2018/8/1
 * Time: 21:10
 */
$dbHostName='127.0.0.1';
$dbUser='root';
$dbPwd='';
$dbName='zhiwonet';

$conn=new mysqli($dbHostName,$dbUser,$dbPwd,$dbName);

mysqli_query($conn,"set names utf8");

