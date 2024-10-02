<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/db.php');

  
  //$idx에 추천하고자하는 글 번호 할당
  $idx = $_GET['idx'];
  //$sql에 board 테이블에서 idx컬럼의 값이 $idx와 일치하는 행에서 추천수를 조회
  $sql = "SELECT likes FROM board WHERE idx=$idx";
  //$result에 $sql의 쿼리 실행결과를 할당
  $result = $mysqli->query($sql);
  //$data에 $result결과의 값을 연관배열로 할당
  $data = $result->fetch_assoc();
  //$likes에 기존추천수에 1더하기
  $likes = $data['likes'] + 1;
  // $updateSql에 board 테이블에서 idx컬럼의 값이 $idx와 일치하는 행(데이터)의 추천수를 $likes로 수정하는 쿼리
  $updateSql = "UPDATE board SET likes='$likes' WHERE idx=$idx";
  //$updateResult에 $updateSql 쿼리 실행결과를 할당
  $updateResult = $mysqli->query($updateSql);

  //$updateResult의 값이 있으면 '추천했습니다' 경고창 띄우고 목록으로 이동
  if(isset($updateResult)){
    echo "<script>
      alert('추천했습니다');
      location.href = '../index.php';
    </script>";
  }else{
    // $updateResult의 값이 없으면 '추천실패' 경고창 띄우고 목록으로 이동
    echo "<script>
      alert('추천 실패');
      location.href = '../index.php';
    </script>";
  }