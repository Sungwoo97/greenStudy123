<h2>while</h2>
<pre>
  초기값
  while(조건){
    반복할일
    증감
  }
</pre>
<?php
  $i = 0;
  while($i <= 5){
    echo $i.'<br>';
    $i++;
  }

  $langs = array('html', 'css', 'javascript');
  $i=0;
  echo '<ul>';
  while($i < count($langs)){
    echo '<li>'.$langs[$i].'</li>';
    $i++;
  }
  echo '</ul>';
?>
<h2>do while</h2>
<pre>
  do{
    처음할일 + 반복할일
  }while(조건);
</pre>
<?php
$i=0;
  do{
    echo $i++.'<br>'; 
  }while($i <= 5);

  $i=0;
  echo '<ul>';
  do{
    echo '<li>'.$langs[$i++].'</li>';
  }
  while($i < count($langs));
  echo '</ul>';
?>
<h2>foreach</h2>
<pre>
  foreach(배열 as 배열의 각 요소){
    반복할일;
  }
</pre>
<?php
  $nums = array(0,2,4,6,8);
  foreach($nums as $num){
    echo "변수 \$nums의 현재값은 {$num}입니다.<br>"; // 탈출문법 '\', '{}'
  }
?>