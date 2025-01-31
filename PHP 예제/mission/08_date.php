<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>08 date</title>
</head>
<body>
  <h2>날짜</h2>
  <h3>1-1</h3>
  <small>php.net date 함수 참조</small>
  <p>날짜를 출력하는 함수를 사용하여, 오늘 날짜를 2024.04.21 형식으로 출력</p>  

  <?php
    date_default_timezone_set('Asia/Seoul');
    $today = date("Y.m.d"); 
   
    echo $today;   
  ?>
  <h3>1-2</h3>
  <p>날짜를 출력하는 함수를 사용하여, 오늘 날짜를 2024-04-21 14:55:17 형식으로 출력</p>  
  <?php
    $today = date("Y-m-d H:i:s"); 
    echo $today;  
  ?>
  <h3>1-3</h3>
  <p>php.net date, mktime 함수 참조하여 오늘로 부터 한달후 날짜를 2024-05-21와 같이 출력</p>  
  <?php
    //$today = date("Y.m.d", strtotime("+1 month")); 
    $nextmonth = mktime(0, 0, 0, date("m")+1, date("d"), date("Y"));
    
    echo date("Y.m.d", $nextmonth);
  ?>
  
</body>
</html>

