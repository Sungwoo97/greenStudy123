<?php
  $title = 'Login';
  session_start();  // 세션과 관련 함수 시작하겠다
  session_unset();  // 등록된 세션 변수 해지
  session_destroy(); //세션 자체 삭제
  include_once('header.php');
  // require_once('header1.php');
  
?>
  <main>
    <section>
      <h2>로그아웃</h2>
      <p>
        로그아웃 되었습니다.
      </p>
      <a href="index.php">home</a>
    </section>
  </main>

<?php
  include('footer.php');
?>