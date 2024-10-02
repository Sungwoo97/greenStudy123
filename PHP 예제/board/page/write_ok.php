<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/db.php');

  /* 글 작성이 완료되며 글쓰기 완료 경고창을 띄우고 리스트 페이지로 이동 */
  $username = $_POST['name'];
  $userpw = password_hash($_POST['pw'], PASSWORD_DEFAULT);
  $title = $_POST['title'];
  $content = $_POST['content'];
  //값이 있다면 lockpost에 1을 저장한다
  if(isset($_POST['lockpost'])){
    $lock_post = 1;
  }else{
    $lock_post = 0;
  }

  $sql = "INSERT INTO board (name, pw, title, content, lock_post) VALUES('$username','$userpw','$title', '$content', $lock_post)";

  // $result = $mysqli->query($sql);

  if($mysqli->query($sql) === true){
    echo "<script>
      alert('글작성 완료');
      location.href = '../index.php';
    </script>";
  }else{
    echo "<script>
      alert('글작성 실패');
      history.back();
    </script>";
  }
?>