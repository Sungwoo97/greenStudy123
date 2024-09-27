<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Request</title>
</head>
<body>
  <h1>Request</h1>
  <?php
    //print_r($_POST);
    // echo $_POST['name'];
    // echo $_POST['email'];
  ?>
  <p><?= $_POST['mb-name']; ?>님의 이메일 주소는 <?= $_POST['mb-email']; ?> 입니다</p>
</body>
</html>