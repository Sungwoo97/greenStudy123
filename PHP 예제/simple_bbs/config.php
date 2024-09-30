<?php

$mysqli = mysqli_connect('localhost', 'simple_bbs', '12345', 'simple_bbs');
//데이터 베이스 연결 ( 호스트명, 사용자명, 비밀번호, 데이터베이스 이름)
if (mysqli_connect_errno()) {
  throw new RuntimeException('연결 오류:' . mysqli_connect_error());
}