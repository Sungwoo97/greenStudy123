<?php
$hostname = 'localhost'; //호스트명
$username = 'abcmall';  //유저명
$dbpassword = 'abcmall1234'; //데이터베이스 비밀번호
$dbname = 'abcmall'; //데이터베이스 이름

//db 연결
$mysqli = new mysqli($hostname, $username, $dbpassword, $dbname);
if ($mysqli->connect_errno) {
    throw new RuntimeException('연결 에러: ' . $mysqli->connect_error);
}

/* Set the desired charset after establishing a connection */
$mysqli->set_charset('utf8mb4');
if ($mysqli->errno) {
    throw new RuntimeException('연결 후 에러: ' . $mysqli->error);
}

?>