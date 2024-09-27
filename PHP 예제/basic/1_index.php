<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP 기초</title>
</head>
<body>
  <?php
  echo "hello world";
  ?>
  <h2>주석</h2>
  <pre>
    한줄 주석 //
    여러줄 주석 /* */
    쉘 스타일 주석 #
  </pre>
  <?php
    // 한줄 주석

    /* 
    여
    러
    줄
    */

    #스타일
  ?>
  <h2>변수 생성</h2>
  <pre>
    $변수명 - 변수 생성
    $name = '홍길동';
  </pre>
  <?php
    $hello = "안녕하세요";
    $name = "홍길동"; // 
    // echo $name; 
    // echo '안녕하세요! ' .$name.'님'; // output 안녕하세요! 홍길동님
    // echo "안녕! $name";  // output 안녕! 홍길동
    // echo $name2; // output  Undefined variable $name2
    echo $hello.' '.$name; // output 안녕하세요 홍길동
  ?>


</body>
</html>