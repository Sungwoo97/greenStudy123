<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/header.php');

  $idx = $_GET['idx'];
  // 저장된 idx 값과 같은 테이블의 row를 조회한다
  $sql = "SELECT pw FROM board WHERE idx = $idx";
  // query 명령문을 실행하고 값을 result에 저장
  $result = $mysqli->query($sql);
  // data에 연관배열 형식으로 저장
  $data = $result->fetch_assoc();
  
  //페이지가 열리면 조회수 값을 가져와서 증가시켜준다
  $orgpw = $data['pw'];

  //echo $orgpw;

if(isset($_POST['pw_chk'])){
    $pwchk = $_POST['pw_chk'];
    if(password_verify($pwchk , $orgpw)){ //일치 여부 확인
      echo "<script>
        window.location.replace('read.php?idx={$idx}');
      </script>";

    }else{
      echo "<script>
      alert('비밀번호가 틀렸습니다');
      window.location.replace('../index.php');
      </script>";

    }
  }
?>
<h1>비밀번호 확인</h1>

<!-- Modal -->
<div class="modal fade" id="password_confirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form action="" method="POST" class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">비밀번호 확인</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="password" name="pw_chk" class="form-control">
      </div>
      <div class="modal-footer">
        <input type="submit" value="확인" class="btn btn-primary"></input>
      </div>
    </form>
  </div>
</div>
<script>
  const myModal = new bootstrap.Modal('#password_confirm', {
  keyboard: false
})
  const modalToggle = document.getElementById('password_confirm'); 
  myModal.show(modalToggle);
</script>

<?php
  include_once($_SERVER['DOCUMENT_ROOT'].'/board/inc/footer.php');
?>