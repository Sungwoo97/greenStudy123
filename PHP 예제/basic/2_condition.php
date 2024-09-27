<pre>
  if(조건){

  }else if{

  }else{

  }
</pre>
<?php
  $result = 1 < 3; // output true 1, false null
  // echo $result == true; // output true 1
  echo $result == false; // output true 1

  $first_name = '길동';
  $last_name = '홍';

  if($first_name == '길동' xor $last_name == '홍'){
    echo '조건이 참이다';
  }else{
    echo '조건이 거짓이다';
  }
?>