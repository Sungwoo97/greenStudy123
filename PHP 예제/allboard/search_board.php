<?php
header("Content-Type: application/json; charset=UTF-8");
include_once($_SERVER['DOCUMENT_ROOT'] . '/admin/inc/dbcon.php'); // 데이터베이스 연결

$category = $_GET['category'] ?? '';

$search_cate = '';

if (!$category) {
  echo json_encode([]);
  exit;
}
if ($category != 'all') {
  $search_cate = "WHERE category = '$category'";
}

// SQL 쿼리 작성 및 실행
$sql = "SELECT * FROM board    $search_cate  ORDER BY regdate DESC";
$result = $mysqli->query($sql);

$data = [];
while ($row = $result->fetch_object()) {
  $data[] = $row;
}


$mysqli->close();

// JSON 형식으로 결과 반환
echo json_encode($data);
