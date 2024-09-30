<?php
  $title = 'Login';
  include_once('header.php');
  // require_once('header1.php');
?>
  <main>
    <section>
      <h2>Login</h2>
      <form action="login_ok.php" method="POST">
        <div>
          <label for="useremail">Email : </label>
          <input type="email" id="useremail" name="useremail" placeholder="your Email">
        </div>
        <div>
          <label for="userpw">Password : </label>
          <input type="password" id="userpw" name="userpw" placeholder="your Password">
        </div>
        <button type="submit">로그인</button>
      </form>
    </section>
  </main>

<?php
  include('footer.php');
?>