<?php
  require_once('config.php');

  $keyword = $_GET['keyword'];
  // msg_board의 모든 테이블을 선택하여, 사용자가 입력한 keyword 값이랑 일치하는 값을, no 값의 내림차순으로 정렬해서 sql 저장 
  $sql= "SELECT * FROM msg_board WHERE title LIKE '%$keyword%' ORDER BY no DESC";
  $result = mysqli_query($mysqli, $sql);
  $list = '';

  // 객체형식으로 반환한 데이터를 $data에 저장하고 저장한 데이터를 바탕으로 제목을 화면에 출력하는 html 태그 생성 no는 get 방식으로 데이터를 read.php에 넘겨줌
  while($data = mysqli_fetch_object($result)){
    $list .= "<li><a href=\"read.php?no={$data->no}\">{$data->title}</a></li>";
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>검색결과 - 심플 게시판</title>
</head>
<body>
  <h1>검색 결과</h1>
  <hr>
  <ul>
    <?php 
      echo $list;
    ?>
    <!-- <li><a href="">글 제목 1</a></li>
    <li><a href="">글 제목 2</a></li>
    <li><a href="">글 제목 3</a></li>
    <li><a href="">글 제목 4</a></li> -->
  </ul>
  <hr>
  <a href="write.php">글쓰기</a>
</body>
</html>