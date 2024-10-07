<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/dbcon.php');
/* error_reporting(E_ALL);   //어떤 에러든 전부
ini_set('display_errors',1);*/

$name = $_POST['name'];
$code = $_POST['code'];
$step = $_POST['step'];

//중복 여부 파악
$sql = "SELECT cid FROM category WHERE step=$step AND (name = '$name' or 
code = '$code')";
$result = $mysqli->query($sql);
$data = $result->fetch_object();

if($data && isset($data->cid)){
  //중복 체크, -1을 반환하면 중복된다는 alert 메세지를 띄움
  $return_data = array('result'=>-1);   
  // 연관 배열을 json 형식으로 변환
  echo json_encode($return_data);
  exit;
}
//테이블에 저장
$sql = "INSERT INTO category (code, name, step) VALUES ('$code', '$name', $step)";
$result = $mysqli->query($sql);

if($result){
  $return_data = array('result'=>1);   //성공
  // 연관 배열을 json 형식으로 변환
  echo json_encode($return_data);
}else{
  $return_data = array('result'=>0);   //실패
  // 연관 배열을 json 형식으로 변환
  echo json_encode($return_data);
}


?>