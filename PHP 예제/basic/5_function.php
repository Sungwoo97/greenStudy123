<pre>
  function 함수명(){
    할일;
  }

  function 함수명(변수, 변수){
    할일;
  }
</pre>
<?php
  // $sum = 0;
  function add($a , $b){
    $sum = $a + $b;
    return $sum;
  }

  $result = add(10, 20);
  echo $result;
?>
<h2>값 확인하기</h2>
<?php
  $fruits_arr = array('apple' => 1000, 'banana' => 2000, 'orange' => 3000);

  echo $fruits_arr['apple'];
  var_dump($fruits_arr);

?>

<?php
  function output($input){
    echo '<pre>';
    print_r($input);
    echo '</pre>';
  }
  output($fruits_arr);
  
?>
<h2>지역변수 전역변수</h2>
<?php
  $hello = 'hello, world';
  
  function sum($x , $y){
    global $hello;  //전역변수 hello를 함수 내에서 쓰겠다고 선언
    echo $hello;
    $result = $x+ $y;
    return $result;
  }
  sum(5, 10);
?>
<hr>
<?php
  $num=0; 
  function func1(){
    global $num;
    $num = 10;  //지역변수
    echo $num.'<br>';
    //echo $num.'<br>';
  }
  func1();
  echo $num;
?>
<hr>
<?php
  $var=0; 
  function func2(){
    $var = 10;  //지역변수
     echo $var.'<br>';
    // global $var;
    //echo $var.'<br>';
    echo "{$GLOBALS['var']}<br>";
  }
  func2();
?>
<h2>정적 변수(Static Varible)</h2>
<?php
  function counter(){
    $count = 0;
    echo $count.'<br>';
    echo ++$count.'<br>';
  }
  counter();
  counter();
?>
<hr>
<?php
  function counter2(){
    static $count2 = 0;   //메모리에 상주, 값이 유지(업데이트)
    echo $count2.'<br>';
    echo ++$count2.'<br>';
  }
  counter2();
  counter2();
?>