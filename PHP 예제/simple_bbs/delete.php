<?php

require_once('config.php');
// get 방식으로 넘겨줬던 no 값을 $num에 저장
$num = $_GET['no'];
// 삭제할 테이블명을 정하고 (WHERE) 조건이 $num 인 것을 선택하여 그 테이블 row를 삭제
$sql = "DELETE FROM msg_board WHERE no = $num";
//쿼리에 명령어 실행
$result = mysqli_query($mysqli, $sql);

if(isset($result)){
  echo "<script>
    alert('글삭제 성공');
    location.href = 'index.php';
  </script>";
}else{
  echo "<script>
    alert('글삭제 실패');
    history.back();
  </script>";
}
?>