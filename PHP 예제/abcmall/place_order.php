<?php
session_start();
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/dbcon.php');


if(isset( $_POST['userid'])){
  $userid =  $_POST['userid'];
  $ssid = '';
}else{
  $userid = '';
  $ssid = session_id();
}

$ucid = $_POST['ucid'] ?? 0;
$pid = $_POST['pid'];
$subtotal = $_POST['subtotal'];
$count = $_POST['count'];
$address = $_POST['address'] ?? '';

// 배열이 아닌 경우에 대비하여 배열로 변환
$pid = is_array($pid) ? $pid : explode(',', $pid);
$subtotal = is_array($subtotal) ? $subtotal : explode(',', $subtotal);
$count = is_array($count) ? $count : explode(',', $count);

foreach($pid as $k => $p){
  $current_subtotal =  $subtotal[$k];
  $current_count =  $count[$k];

  $sql = "INSERT INTO orders 
  (pid, count, subtotal, address, userid) 
  VALUES 
  ($p, $current_count, $current_subtotal, '$address', '$userid')";

  $result = $mysqli->query($sql);  
 
}
if(isset($ucid) && $ucid > 0){
  $uc_sql = "UPDATE user_coupons SET status = '-1' WHERE ucid = $ucid ";
  $uc_result = $mysqli->query($uc_sql);
}

if($result){
  $cart_del_sql = "DELETE FROM cart WHERE (userid = '$userid' OR ssid = '$ssid')";
  $cart_del_result = $mysqli->query($cart_del_sql);
  $data = array('result'=>'ok');
}else{
  $data = array('result'=>'fail');
}
echo json_encode($data);


?>