<?php
  require_once('config.php');
  //update.php?no= $data[0];로 get 방식으로 넘긴 no를 num에 기입
  $num = $_GET['no'];
  //print_r($num);
  // msg_board의 모든 테이블을 조회하여 no가 num과 같은 것만 반환
  $sql= "SELECT * FROM msg_board WHERE no=$num";
  //$mysqli는 데이터베이스에 접속하기 위한 데이터, sql은 query 명령어, 반환한 데이터를 $result에 저장
  $result = mysqli_query($mysqli, $sql);
  //연관 배열로 저장
  $data = mysqli_fetch_assoc($result);
  //print_r($data);
  //UPDATE msg_board SET col1 = col1 + 1, col2 = col1;
  ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>수정 - 심플 게시판</title>
</head>
<body>
  <h1>글 수정</h1>
  <form action="update_ok.php" method="POST">
    <input type="hidden" name="number" value="<?= $num; ?>">
    <div>
      <label for="username">이름 : </label>
      <input type="text" id="username" name="name" value="<?= $data['name']; ?>">
    </div>
    <div>
      <label for="usertitle">제목 : </label>
      <input type="text" id="usertitle" name="title" value="<?= $data['title']; ?>">
    </div>
    <div>
      <label for="usermsg">메세지 : </label>
      <textarea name="message" id="usermsg"><?= $data['message']; ?></textarea>
    </div>
    <input type="submit" value="전송">
  </form>
  <hr>
  <a href="write.php">글쓰기</a>
</body>
</html>