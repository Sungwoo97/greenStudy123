<?php
  $title = 'Login';
  session_start();

  $_SESSION['useremail'] = $_POST['useremail'];

  include_once('header.php');
  // require_once('header1.php');
  
?>
  <main>
    <section>
      <h2>Login 완료</h2>
      <p>
        <?= $_POST['useremail'] ?>님 반갑습니다.
      </p>
    </section>
  </main>

<?php
  include('footer.php');
?>