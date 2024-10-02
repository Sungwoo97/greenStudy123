<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/header.php');

  //get 방식으로 넘어온 값 중 변수명 idx의 값을 $idx 변수에 할당
  $idx = $_GET['idx'];
  //변수명 $sql에 board 테이블에서 컬럼 idx의 값이 $idx 인 행의 데이터를 모두 조회
  $sql = "SELECT * FROM board WHERE idx = $idx";
  //변수명 $sql에 담긴 sql 쿼리를 실행한 결과를 $result에 할당
  $result = $mysqli->query($sql);
  //변수명 $data에 $result의 값을 연관배열로 할당
  $data = $result->fetch_assoc();
  //아래 입력 항목에 기존 데이터를 출력
?>
<h1>글수정</h1>
<form action="modify_ok.php" method="POST">
<input type="hidden" name="idx" value="<?= $idx ?>">  
<div class="mb-3">
  <label for="username" class="form-label">이름 </label>
  <input type="text" class="form-control" name="name" id="username" placeholder="이름을 입력해주세요" value="<?= $data['name']; ?>" required>
</div>
<div class="mb-3">
  <label for="title" class="form-label">제목 </label>
  <input type="text" class="form-control" name="title" id="title" placeholder="글 제목" value="<?= $data['title']; ?>" required>
</div>
<div class="mb-3">
  <label for="content" class="form-label">내용 </label>
  <textarea class="form-control" name="content" id="content" rows="3"><?= $data['content']; ?></textarea required>
</div>
<button class="btn btn-primary">전송</button>
</form>

<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/footer.php');
?>