<?php
  if(!isset($title)){
    $title = '';
  }
  if(!isset($_SESSION)){
    session_start();
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> <?php echo $title; ?> - ABC </title>
</head>
<body>
  <header>
    <h1><a href="index.php">Logo</a></h1>
    <nav>
      <ul>
        <li><a href="about.php">About</a></li>
        <li><a href="works.php">works</a></li>
        <li><a href="contact.php">contact</a></li>
        <li><a href="mypage.php">mypage</a></li>
        <?php
          if(isset($_SESSION['useremail'])){  // 로그인 후
            echo '<li><a href="logout.php">logout</a></li>';
          }else{  //로그인 전
            echo '<li><a href="login.php">login</a></li>';
          }
        ?>
      </ul>
    </nav>
  </header>