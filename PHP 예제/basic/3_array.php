<h2>배열</h2>
<pre>
  새 배열 생성
  $배열명 = array();

  값을 할당
  $배열명[0] = "값";
</pre>
<?php
  $fruits = array(); // 새로운 배열 생성
  $fruits[0] = 'apple';
  $fruits[1] = 'banana';
  $fruits[2] = 'orange';

  echo $fruits[0]; // output apple
  // echo $fruits; // output  Array to string conversion
  // print $fruits; // output  Array to string conversion
  var_dump($fruits); // 개발 단계에서 값을 확인
  var_export($fruits);
?>
<hr>
<pre>
  변수, 함수의 값이 존재 여부 파악 isset
  isset(대상) // true, false
</pre>
<?php
  $langs = array('html', 'css', 'javascript');
  echo $langs[0];

  /* if($langs[3]){
    echo $langs[3]; // Undefined array key 3
  }*/
 if(isset($langs[3])){
    echo $langs[3]; 
  }else{
    echo '$langs 배열에는 인덱스 번호 3번의 값은 없다!';
  }
?>
<h2>반복문</h2>
<pre>
  for(초기값; 조건; 증감){
    반복할일;
  }
</pre>
<ul>
<?php
  for($i = 0; $i < count($langs); $i++){
    echo '<li>'.$langs[$i].'</li>';
  }
  ?>
</ul>
<h3>foreach</h3>
<pre>
  foreach(배열 as 배열의 각 요소){
    반복할일;
  }
</pre>
<ul>
<?php
  foreach($langs as $lang){
    echo '<li>'.$lang.'</li>';
  }
?>
</ul>
<h2>연관배열</h2>
<pre>
  $배열명['키'] = '값';
  
  $배열명 = array('키' => 값, '키' => 값, '키' => 값);
</pre>
<?php
/*
  $fruits_arr = array();
  $fruits_arr['apple'] = 1000;
  $fruits_arr['banana'] = 2000;
  $fruits_arr['orange'] = 3000;

  echo $fruits_arr['apple'];
  */
  $fruits_arr = array('apple' => 1000, 'banana' => 2000, 'orange' => 3000);
  echo $fruits_arr['apple'];
  
  echo '<ul>';
  /*foreach($fruits_arr as $key){
    echo '<li>'.$key.'</li>'; //  1000,  2000, 3000
  }*/
  foreach($fruits_arr as $key => $value){
    echo '<li>'.$key.' '.$value.'</li>'; // apple 1000, banana 2000, orange 3000
  }
  echo '</ul>';
?>