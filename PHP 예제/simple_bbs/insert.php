<?php

require_once('config.php');

// INSERT INTO msg_board (title, message, name ) VALUES(15,col1*2);

// print_r($_POST);

$username = $_POST['name'];
$title = $_POST['title'];
$message = $_POST['message'];
// msg_board의 테이블에 대입될 값을 지정해주고 (VALUES) 에 하나하나 대입해서 저장
$sql = "INSERT INTO msg_board (title, message, name) VALUES('$title','$message','$username')";
// 쿼리에 명령어 실행
$result = mysqli_query($mysqli, $sql);

if(isset($result)){
  echo "<script>
    alert('글쓰기 성공');
    location.href = 'index.php';
  </script>";
}else{
  echo "<script>
    alert('글쓰기 실패');
    history.back();
  </script>";
}
?>