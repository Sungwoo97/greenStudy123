<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/header.php');

$cate = $_POST['cate']; // code
$step = $_POST['step']; // step
$category = $_POST['category']; //category

// category 테이블에서 
$sql = "SELECT * FROM category WHERE step = $step AND pcode = '$cate'";
$result = $mysqli->query($sql);

$html = "<option selected>{$category}</option>";

while($data = $result->fetch_object()){ //조회된 값들마다 할 일, 있으면 $data할당
  $html .= "<option value=\"{$data->code}\">{$data->name}</option>";
}

echo $html;

?>
