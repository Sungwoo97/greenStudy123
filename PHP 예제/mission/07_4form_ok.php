<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>07 form</title>
</head>
<body>
  <h2>폼</h2>
  <h3>1-3</h3>
  <!--  코드 작성   -->
   <?php 
   
   $result = array_merge($_GET,$_POST);
   print_r($result);
   echo '<br>';
   foreach($result as $key){
    echo $key;
   }
   ?>
</body>
</html>

