<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/db.php');

  /* 글 수정이 완료되며 글쓰기 완료 경고창을 띄우고 리스트 페이지로 이동 */
  $idx = $_POST['idx'];
  $username = $_POST['name'];
  $title = $_POST['title'];
  $content = $_POST['content'];
  
  // sql에 board 테이블에서 idx 컬럼의 값이 $idx와 일치하는 행의 name, title, content 값을 수정
  $sql = "UPDATE board SET name='$username', title ='$title', content='$content' WHERE idx= $idx";

  // $result = $mysqli->query($sql);

  if($mysqli->query($sql) === true){
    echo "<script>
      alert('글수정 완료');
      location.href = '../index.php';
    </script>";
  }else{
    echo "<script>
      alert('글수정 실패');
      history.back();
    </script>";
  }
?>