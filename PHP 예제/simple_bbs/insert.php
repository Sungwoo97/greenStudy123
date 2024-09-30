<?php

require_once('config.php');

// INSERT INTO msg_board (title, message, name ) VALUES(15,col1*2);

// print_r($_POST);

$username = $_POST['name'];
$title = $_POST['title'];
$message = $_POST['message'];
$sql = "INSERT INTO msg_board (title, message, name) VALUES('$title','$message','$username')";

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