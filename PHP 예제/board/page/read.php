<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/header.php');

  $idx = $_GET['idx'];
  // 저장된 idx 값과 같은 테이블의 row를 조회한다
  $sql = "SELECT * FROM board WHERE idx = $idx";
  // query 명령문을 실행하고 값을 result에 저장
  $result = $mysqli->query($sql);
  // data에 연관배열 형식으로 저장
  $data = $result->fetch_assoc();

  $hit = $data['hit'] + 1;

  $hitSql = "UPDATE board SET hit = $hit WHERE idx = $idx";
  $mysqli->query($hitSql);
?>
<h1>글보기</h1>
<!-- 글 제목 -->
<h2><?= $data['title'] ?></h2>

<p>
  <?= $data['name'] ?> / <?= $data['date'] ?> / 조회수 : <?= $hit ?> / 추천수 : <?= $data['likes'] ?>
</p>
<hr>
 <!-- 글 본문 -->
<div>
  <?= $data['content'] ?>
</div>
<hr>
<div class="d-flex justify-content-between align-items-center">
  <a href="../index.php" class="btn btn-secondary">목록</a>
  <div>
    <a href="delete.php?idx=<?= $data['idx']; ?>" class="btn btn-danger">삭제</a>
    <a href="" class="btn btn-info">수정</a>
    <a href="" class="btn btn-info">추천</a>
  </div>
</div>

<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/footer.php');
?>