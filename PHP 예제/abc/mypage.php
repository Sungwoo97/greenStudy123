<?php
  $title = 'My page';
  session_start();

  include_once('header.php');
  
?>
  <main>
    <section>
      <h2>My page</h2>
      <?php
        if(isset($_SESSION['useremail'])){
          ?>  
          <p>
            <?= $_SESSION['useremail'] ?>님 회원정보입니다.
          </p>
          <?php
        }else{
          ?>
          <p>로그인 먼저 해주세요.</p>
          <a href="login.php">로그인</a>
          <?php
        }
      ?>
      
    </section>
  </main>

<?php
  include('footer.php');
?>