<?php
  require_once('config.php');

  //"read.php?no={$data->no} fetch object를 get 방식으로 넘긴 no를 num에 기입
  $num = $_GET['no'];
  //print_r($num);

  // msg_board의 모든 테이블을 조회하여 no가 num과 같은 것만 반환
  $sql= "SELECT * FROM msg_board WHERE no=$num";
  //$mysqli는 데이터베이스에 접속하기 위한 데이터, sql은 query 명령어, 반환한 데이터를 $result에 저장
  $result = mysqli_query($mysqli, $sql);

  //인덱스 배열로 저장
  $data = mysqli_fetch_row($result);
  //print_r($data);


  ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>글 상세 - 심플 게시판</title>
</head>
<body>
  <h2>글 상세</h2>
  <h3>글 제목 : <?= $data[1]; ?></h3>
  <h4>글쓴이 : <?= $data[3]; ?> </h4>
  <h5>날짜: <?= $data[4]; ?></h5>
  <div>
  <?= $data[2]; ?>
  </div>
  <hr>
  <a href="update.php?no=<?= $data[0]; ?>">글 수정</a> /
  <a href="delete.php?no=<?= $data[0]; ?>">글 삭제</a>
  <hr>
  <a href="index.php">글 목록</a>
</body>
</html>