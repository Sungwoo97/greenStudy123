<?php
  session_start();  // 세션 관련 함수를 시작하겠다.
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>세션</title>
</head>
<body>
  <h1>세션</h1>
  <h2>세션 생성</h2>
  <pre>
    세션 생성
    $_SESSION['key'] = 'value';
  </pre>
  <h2>세션 확인</h2>
  <pre>
    세션 확인
    $_SESSION['key'];
  </pre>
  <?php
    $_SESSION['city'] = 'seoul';
    $_SESSION['gu'] = 'jongro';
    print_r($_SESSION);

    echo $_SESSION['city'];
  ?>
  <h2>세션 삭제</h2>
  <pre>
    세션 변수 할당 해지
    session_unset();

    세션 아이디 삭제
    session_destroy();
  </pre>
  <?php
    session_unset();
    print_r($_SESSION); 

    session_destroy();
    print_r($_SESSION); 
  ?>
</body>
</html>