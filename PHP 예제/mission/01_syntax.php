<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01 Syntax</title>
</head>
<body>
  <h2>문법1</h2>
  <h3>1-1</h3>
  <?php
    //지시화면과 같이 출력되도록 작성
    echo 'Hello World';
  ?>
  <h3>1-2</h3>
  <?php
    //지시화면과 같이 출력되도록 작성
    $hello = 'hello world';
    echo "'".$hello."'";
  ?>
  <h3>1-3</h3>
  <?php     
    echo '<p>';
    echo $hello;
    echo '</p>';
    //지시화면과 같이 출력되도록 작성 
  ?>
  <hr>
  <h3>1-4</h3>
  <p>변수 name에 홍길동을 할당하고 화면 홍길동님 반갑습니다. 출력</p>
  <?php
    $name = '홍길동';
  ?>
  <h4>1-4-1</h4>
  <?php
    echo $name.'님 반갑습니다.'
  ?>
  <h4>1-4-2</h4>
  <?php
    echo "'$name'님 반갑습니다"
  ?>
  <h3>1-5</h3>
  <p>변수 x에 5, 변수 y에 7, 변수 sum에 x와 y의 합을 할당하고 출력</p>
  <?php
    $x = 5;
    $y = 7;
    $sum = $x * $y;
    echo '합계는 '.$sum.'입니다';
  ?>  
</body>
</html>

