<?php 
  //객체 지향 
  $mysqli = new mysqli('localhost', 'greenart', 'green12345', 'greenart');

  // 에러 체크(절차 지향)
  /*if(mysqli_connect_errno()){
    echo mysqli_connect_error();
   }*/
  //에러 체크(객체 지향)
  if($mysqli->connect_error){
    echo "연결 실패".$mysqli->connect_error;
    exit(); // 스크립트 종료
  }
?>