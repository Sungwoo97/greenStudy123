<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>07 form</title>
</head>
<body>
  <h2>폼</h2>
  <h3>1-2</h3>
  <!--  코드 작성   -->
  <p>반갑습니다. <?= $_POST['username'] ?>님!</p>

  <?php
    print_r($_REQUEST);
  ?>
</body>
</html>

