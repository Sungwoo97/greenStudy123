<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/db.php');

  //$idx에 게시글의 번호를 할당
  $idx = $_POST['idx'];
  //$userpw에 입력한 비번을 hash로 암호화해서 할당
  $userpw = password_hash($_POST['password'], PASSWORD_DEFAULT);
  //$name에 댓글 작성자 이름 할당
  $name = $_POST['name'];
  //$content에 댓글 내용 할당
  $content = $_POST['content'];
  
  //$sql에 reply 테이블에 b_idx, name, password, content 항목에 값을 입력하는 $sql
  $sql = "INSERT INTO reply  (b_idx, name, password, content) 
  VALUES ($idx, '$name', '$userpw', '$content') "; 
  //$result에 query 실행 결과 할당
  $result = $mysqli->query($sql);

  if($result){
    echo "<script>
    alert('댓글 작성 완료');
    location.href = '../index.php';
  </script>";
  }else{
    echo "<script>
    alert('댓글 작성 실패');
    location.href = '../index.php';
  </script>";
  }
?>