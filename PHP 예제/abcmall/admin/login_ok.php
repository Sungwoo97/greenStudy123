<?php
session_start();

include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/dbcon.php');

$userid = $_POST['userid'];
$userpw = $_POST['userpw'];
$password = hash('sha512', $userpw);

// echo $userid;
// echo $userpw;
// echo $password;

//아이디, 비번이 admins 테이블에 일치하는 값이 있는지 체크 
$sql = "SELECT * FROM admins WHERE userid='$userid' AND passwd = '$password'";
$result = $mysqli->query($sql);
$data = $result->fetch_object();

if($data){
  $update_sql = "UPDATE admins SET last_login = now() WHERE idx= $data->idx";
  $update_result = $mysqli->query($update_sql);
  $_SESSION['AUID'] = $data->userid;
  $_SESSION['AUNAME'] = $data->username;
  $_SESSION['AULEVEL'] = $data->level;
  echo "<script>
    alert('관리자님 반갑습니다.');
    location.href= 'product/product_list.php';
  </script>";

}else{
  echo "<script>
  alert('아이디 또는 비번이 맞지 않습니다.');
  history.back();
  </script>";
}

/*
관리자 세션 생셩
상품관리 페이지로 이동
*/


?>