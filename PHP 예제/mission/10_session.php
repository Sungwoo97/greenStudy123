<?php  
    //세션을 시작하고,
    session_start();
    //세션변수 UID의 admin이라는 문자열을 생성한다.
    $_SESSION['UID'] = 'admin';
  ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>session</title>
</head>
<body>
  <h2>세션</h2>
  <h3>1-1</h3>
  <?php
  //세션에 저장된 값을 출력한다.
  echo $_SESSION['UID'];
  ?>
  <h3>1-2
  </h3>
  <?php
  //UID세션변수의 값이 있다면, 세션에 저장된 값이 admin가 일치한다면 amdin님 반갑습니다. 경고창을 띄운다.
  if(isset($_SESSION['UID']) && $_SESSION['UID'] === 'admin'){
    echo "<script>
    alert(' admin님 반갑습니다');
    </script>";
  }
  else{
    echo "다시 로그인 해주세요";
  }
  ?>
</body>
</html>

