<?php

require_once('config.php');

// INSERT INTO msg_board (title, message, name ) VALUES(15,col1*2);

//print_r($_POST);

$num = $_POST['number'];
$username = $_POST['name'];
$title = $_POST['title'];
$message = $_POST['message'];

// 업데이트할 테이블명을 정하고 (WHERE) 조건이 $num 인 것을 선택하여 (SET)그 테이블 중 바꿀 이름을 선택하여 수정
$sql = "UPDATE msg_board SET name='$username', title='$title', message='$message' WHERE no = $num";
//쿼리에 명령어 실행
$result = mysqli_query($mysqli, $sql);

if(isset($result)){
  echo "<script>
    alert('글수정 성공');
    location.href = 'index.php';
  </script>";
}else{
  echo "<script>
    alert('글수정 실패');
    history.back();
  </script>";
}
?>