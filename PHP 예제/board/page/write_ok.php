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

   //print_r($_FILES['file']);

  $max_file_size = 10*1024*1024;

  if($_FILES['file']['size'] > $max_file_size){
    echo "<script>
    alert('10MB 이상은 첨부할 수 없습니다.');
    history.back();
    </script>";
    exit;
  }

  //파일 업로드
  $file_name = $_FILES['file']['name'];
  $temp_path = $_FILES['file']['tmp_name'];
  $upload_path = '../upload/'.$file_name;
  move_uploaded_file($temp_path, $upload_path); 

  strpos($_FILES['file']['type'], 'image') !== false ? $is_img = 1 : $is_img = 0;

  $sql = "INSERT INTO board (name, pw, title, content, file, lock_post, is_img) VALUES('$username','$userpw','$title', '$content', '$upload_path', $lock_post, $is_img)";

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