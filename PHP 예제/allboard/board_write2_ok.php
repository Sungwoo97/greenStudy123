<?php
include_once($_SERVER['DOCUMENT_ROOT'] . '/admin/inc/dbcon.php');

// board_write_ok.php 예시
$category = $_POST['category'];
$title = $_POST['title'];
$content = $_POST['content'];

$sql = "INSERT INTO board (category, title, content) VALUES ('$category', '$title', '$content')";
$result = $mysqli->query($sql);

if ($result) {
  echo "<script>
    alert('글 작성 완료');
    location.href='board_list.php';
    </script>";
} else {
  echo "<script>
  alert('글 작성 실패');
   history.back();
  </script>";
}
