-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 24-10-23 10:06
-- 서버 버전: 10.4.32-MariaDB
-- PHP 버전: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `abcmall`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `admins`
--

CREATE TABLE `admins` (
  `idx` int(11) NOT NULL,
  `userid` varchar(145) DEFAULT NULL,
  `email` varchar(245) DEFAULT NULL,
  `username` varchar(145) DEFAULT NULL,
  `passwd` varchar(200) DEFAULT NULL,
  `regdate` datetime DEFAULT current_timestamp(),
  `level` tinyint(4) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `end_login_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `admins`
--

INSERT INTO `admins` (`idx`, `userid`, `email`, `username`, `passwd`, `regdate`, `level`, `last_login`, `end_login_date`) VALUES
(4, 'admin', 'admin@shop.com', '관리자', '33275a8aa48ea918bd53a9181aa975f15ab0d0645398f5918a006d08675c1cb27d5c645dbd084eee56e675e25ba4019f2ecea37ca9e2995b49fcb12c096a032e', '2023-01-01 17:12:32', 100, '2024-10-23 10:48:40', NULL),
(5, 'kangjh', 'kangjh@gmail.com', '강현주', 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', '2024-10-18 15:56:22', 10, '2024-10-18 16:22:16', NULL);

-- --------------------------------------------------------

--
-- 테이블 구조 `cart`
--

CREATE TABLE `cart` (
  `cartid` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `userid` varchar(100) DEFAULT NULL,
  `ssid` varchar(100) DEFAULT NULL,
  `options` varchar(100) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `cnt` int(11) DEFAULT NULL,
  `regdate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `cart`
--

INSERT INTO `cart` (`cartid`, `pid`, `userid`, `ssid`, `options`, `price`, `cnt`, `regdate`) VALUES
(3, 38, '', 'ck5buf4u8cspbpo80k2lgoj9f8', '레드수정', 3000, 1, '2024-10-22 16:01:59');

-- --------------------------------------------------------

--
-- 테이블 구조 `category`
--

CREATE TABLE `category` (
  `cid` int(11) NOT NULL,
  `code` varchar(10) NOT NULL COMMENT '카테고리 코드명',
  `pcode` varchar(10) DEFAULT NULL COMMENT '부모 카테고리 고드명',
  `name` varchar(50) NOT NULL COMMENT '카테고리 명',
  `step` int(11) NOT NULL COMMENT '카테고리 단계 1,2,3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `category`
--

INSERT INTO `category` (`cid`, `code`, `pcode`, `name`, `step`) VALUES
(4, 'A0001', '', '컴퓨터', 1),
(5, 'B0001', 'A0001', '노트북', 2),
(6, 'C0001', 'B0001', '게임용', 3),
(7, 'A0002', NULL, '핸드폰', 1),
(8, 'A0003', NULL, '태블릿', 1),
(9, 'A0004', NULL, 'test', 1),
(10, 'A0005', NULL, '아무거나', 1),
(11, 'A0006', NULL, '아무거나1', 1),
(12, 'A0007', NULL, '아무거나2', 1),
(13, 'B0002', 'A0001', '데스크탑', 2),
(14, 'C0002', 'B0001', '업무용', 3);

-- --------------------------------------------------------

--
-- 테이블 구조 `coupons`
--

CREATE TABLE `coupons` (
  `cid` int(11) NOT NULL,
  `coupon_name` varchar(100) NOT NULL COMMENT '쿠폰명',
  `coupon_image` varchar(100) NOT NULL COMMENT '쿠폰이미지',
  `coupon_type` varchar(100) NOT NULL COMMENT '쿠폰타입',
  `coupon_price` double DEFAULT NULL COMMENT '할인금액',
  `coupon_ratio` double DEFAULT NULL COMMENT '할인비율',
  `status` tinyint(4) DEFAULT 0 COMMENT '상태',
  `regdate` datetime DEFAULT current_timestamp() COMMENT '등록일',
  `userid` varchar(100) DEFAULT NULL COMMENT '등록한유저',
  `max_value` double DEFAULT NULL COMMENT '최대할인금액',
  `use_min_price` double DEFAULT NULL COMMENT '최소사용금액'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `coupons`
--

INSERT INTO `coupons` (`cid`, `coupon_name`, `coupon_image`, `coupon_type`, `coupon_price`, `coupon_ratio`, `status`, `regdate`, `userid`, `max_value`, `use_min_price`) VALUES
(3, '회원가입 축하', '/abcmall/admin/upload/20241017094529187998.jpg', '1', 10000, 0, 2, '2024-10-17 16:45:29', 'admin', 10000, 5000);

-- --------------------------------------------------------

--
-- 테이블 구조 `members`
--

CREATE TABLE `members` (
  `mid` int(11) NOT NULL,
  `userid` varchar(145) DEFAULT NULL,
  `email` varchar(245) DEFAULT NULL,
  `username` varchar(145) DEFAULT NULL,
  `passwd` varchar(200) DEFAULT NULL,
  `regdate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `members`
--

INSERT INTO `members` (`mid`, `userid`, `email`, `username`, `passwd`, `regdate`) VALUES
(1, 'hong', 'hong@hong.com', '홍길동', 'f76d554626e5eb4beae9feb8ec14737644a4c8db915e66381541fe97df82e6cbc37c5e98fa8356bd1fe5be4a2d6650b4728a066999882ce90d723844e91e4242', '2024-10-18 10:11:01'),
(2, 'codeping', 'codeping@ping.com', '코드핑', 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', '2024-10-18 10:50:09'),
(4, 'greenping', 'green@green.com', '그린핑', 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', '2024-10-18 10:53:04'),
(5, 'adadf', 'alikerock@gmail.com', '홍길동', 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', '2024-10-18 11:50:11'),
(6, 'hong2', 'hong2@hong.com', '홍길동2', 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', '2024-10-18 12:06:14'),
(7, 'hong2', 'hong2@hong.com', '홍길동2', 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', '2024-10-18 12:07:12'),
(8, 'hong2', 'hong2@hong.com', '홍길동2', 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', '2024-10-18 12:11:48'),
(9, 'greenping', 'hong@hong.com', '홍길동', 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db', '2024-10-18 12:22:25');

-- --------------------------------------------------------

--
-- 테이블 구조 `orders`
--

CREATE TABLE `orders` (
  `oid` int(11) NOT NULL,
  `userid` varchar(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `regdate` datetime NOT NULL DEFAULT current_timestamp(),
  `payment_status` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `orders`
--

INSERT INTO `orders` (`oid`, `userid`, `pid`, `count`, `subtotal`, `regdate`, `payment_status`, `address`) VALUES
(8, 'codeping', 50, 1, 1501000, '2024-10-23 17:03:35', 0, ''),
(9, 'codeping', 38, 1, 3000, '2024-10-23 17:03:35', 0, '');

-- --------------------------------------------------------

--
-- 테이블 구조 `products`
--

CREATE TABLE `products` (
  `pid` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `cate` varchar(100) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `thumbnail` varchar(100) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `sale_price` double DEFAULT NULL,
  `sale_ratio` double DEFAULT NULL,
  `cnt` int(11) DEFAULT NULL,
  `sale_cnt` int(11) DEFAULT NULL,
  `isnew` tinyint(4) DEFAULT NULL,
  `isbest` tinyint(4) DEFAULT NULL,
  `isrecom` tinyint(4) DEFAULT NULL,
  `ismain` tinyint(4) DEFAULT NULL,
  `locate` tinyint(4) DEFAULT NULL,
  `userid` varchar(100) DEFAULT NULL,
  `sale_end_date` datetime DEFAULT NULL,
  `reg_date` datetime DEFAULT current_timestamp(),
  `status` tinyint(4) DEFAULT 0,
  `delivery_fee` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `products`
--

INSERT INTO `products` (`pid`, `name`, `cate`, `content`, `thumbnail`, `price`, `sale_price`, `sale_ratio`, `cnt`, `sale_cnt`, `isnew`, `isbest`, `isrecom`, `ismain`, `locate`, `userid`, `sale_end_date`, `reg_date`, `status`, `delivery_fee`) VALUES
(4, '상품1', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-10 17:56:16', 0, 2000),
(5, '상품2 - 수정', 'A0001B0002', '<p>상품2의 상세설명 - 수정</p>', '/abcmall/admin/upload/20241014104334207317.jpg', 1500, 1500, 15, NULL, NULL, 0, 0, 0, 0, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 09:35:30', 0, 3000),
(6, '상품3', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 0, 0, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(7, '상품4', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241011023530115820.jpg', 12000, 10000, 10, NULL, NULL, 0, 0, 0, 0, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(8, '상품5', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 0, 0, 0, 0, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 1, 2000),
(9, '상품6', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241011023530115820.jpg', 12000, 10000, 10, NULL, NULL, 0, 0, 0, 0, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 1, 2000),
(10, '상품7', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(11, '상품8', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241011023530115820.jpg', 12000, 10000, 10, NULL, NULL, 1, 1, 1, 1, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(12, '상품9', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(13, '상품10', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241011023530115820.jpg', 12000, 10000, 10, NULL, NULL, 1, 1, 1, 1, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(14, '상품11', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(15, '상품12', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241011023530115820.jpg', 12000, 10000, 10, NULL, NULL, 1, 1, 1, 1, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(16, '상품13', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(17, '상품14', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241011023530115820.jpg', 12000, 10000, 10, NULL, NULL, 1, 1, 1, 1, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(18, '상품15', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(19, '상품16', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241011023530115820.jpg', 12000, 10000, 10, NULL, NULL, 1, 1, 1, 1, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(20, '상품17', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(21, '상품18', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241011023530115820.jpg', 12000, 10000, 10, NULL, NULL, 1, 1, 1, 1, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(22, '상품19', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(23, '상품20', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241011023530115820.jpg', 12000, 10000, 10, NULL, NULL, 1, 1, 1, 1, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(24, '상품21', 'A0001B0001C0001', '<p>상품1의 상세 설명입니다.</p>', '/abcmall/admin/upload/20241010105616770378.jpg', 10000, 1000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(25, '상품22', 'A0001B0002', '<p>상품2의 상세설명</p>', '/abcmall/admin/upload/20241015023735139168.jpg', 12000, 10000, 10, NULL, NULL, 1, 1, 1, 1, 2, 'admin', '2024-10-31 00:00:00', '2024-10-11 13:17:49', 0, 2000),
(26, '옵션 테스트1', 'A0001', '<p><br></p>', '/abcmall/admin/upload/20241015080722201461.jpg', 15000, 10000, 12, NULL, NULL, 0, 1, 0, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-15 15:07:22', 0, 2000),
(27, '옵션 테스트2', 'A0001B0001C0002', '<p>옵션 테스트2 내용<br></p>', '/abcmall/admin/upload/20241015085845918359.jpg', 20000, 15000, 20, NULL, NULL, 1, 1, 0, 0, 1, 'admin', '2024-10-31 00:00:00', '2024-10-15 15:58:45', 0, 2000),
(28, '옵션 테스트2', 'A0001B0001C0002', '<p>옵션 테스트2 내용<br></p>', '/abcmall/admin/upload/20241015090141208410.jpg', 20000, 15000, 20, NULL, NULL, 1, 1, 0, 0, 1, 'admin', '2024-10-31 00:00:00', '2024-10-15 16:01:41', 0, 2000),
(29, '옵션 테스트2', 'A0001B0001C0002', '<p>옵션 테스트2 내용<br></p>', '/abcmall/admin/upload/20241015090230205431.jpg', 20000, 15000, 20, NULL, NULL, 1, 1, 0, 0, 1, 'admin', '2024-10-31 00:00:00', '2024-10-15 16:02:30', 0, 2000),
(31, '옵션 테스트3', 'A0001', '<p>ㅁㄴㅇㄻㄴㅇㄹ</p>', '/abcmall/admin/upload/20241015090700197461.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-15 16:07:00', 0, 0),
(32, '옵션 테스트3', 'A0001B0001C0001', '<p>옵션 테스트3<br></p>', '/abcmall/admin/upload/20241015090937650124.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 1, 1, 'admin', '2024-11-30 00:00:00', '2024-10-15 16:09:37', 0, 0),
(33, '옵션 테스트4', '컬러사이즈C0001', '<p>adf</p>', '/abcmall/admin/upload/20241016030456571267.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-16 10:04:56', 0, 0),
(38, '상품명1016', 'A0001B0001C0002', '<p>ㅁㄴㅇㄹ</p>', '/abcmall/admin/upload/20241016060147109570.jpg', 2000, 1500, 10, NULL, NULL, 1, 0, 0, 0, 1, 'admin', '2024-11-01 00:00:00', '2024-10-16 13:01:47', 0, 1000),
(39, 'test', 'A0001B0001C0002', '<p>test</p>', '/abcmall/admin/upload/20241016080802285024.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-16 15:08:02', 0, 0),
(40, 'test', 'A0001B0001C0001', '<p><br></p>', '/abcmall/admin/upload/20241016081252164490.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-16 15:12:52', 0, 0),
(41, '파일등록 함수 테스트', 'A0001B0001C0002', '<p>파일등록 함수 테스트<br></p>', '', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-16 17:04:26', 0, 0),
(42, '성공하면진도끝', 'A0001B0001C0001', '<p>성공하면진도끝<br></p>', '/abcmall/admin/upload/20241016101502154052.jpg', 15000, 0, 0, NULL, NULL, 1, 0, 0, 0, 1, 'admin', '2024-10-31 00:00:00', '2024-10-16 17:15:02', 0, 0),
(43, 'test', 'A0001', '<p>test</p>', '/abcmall/admin/upload/20241017031332211250.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-17 10:13:32', 0, 0),
(44, '옵션함수등록', 'A0001B0001C0001', '<p>옵션함수등록<br></p>', '/abcmall/admin/upload/20241017035700110519.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-17 10:57:00', 0, 0),
(45, 'test', '대분류 선택', '<p><br></p>', '/abcmall/admin/upload/20241017040000171283.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-17 11:00:00', 0, 0),
(46, 'asdf', '대분류 선택', '<p><br></p>', '/abcmall/admin/upload/20241017043314628094.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-17 11:33:14', 0, 0),
(47, 'asd', '대분류 선택', '', '/abcmall/admin/upload/20241017043430423909.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-17 11:34:30', 0, 0),
(48, 'adsfasdf', '대분류 선택', '<p>asdfasdfasdf</p>', '/abcmall/admin/upload/20241017043533985697.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-17 11:35:33', 0, 0),
(49, '핸드폰1', 'A0002', '<p>핸드폰1<br></p>', '/abcmall/admin/upload/20241018075842145768.jpg', 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 'admin', '0000-00-00 00:00:00', '2024-10-18 14:58:42', 0, 0),
(50, '핸드폰2', 'A0001', '<p>test&nbsp;</p>', '/abcmall/admin/upload/20241022024853141099.jpg', 1500000, 10000, 10, NULL, NULL, 1, 1, 1, 1, 1, 'admin', '2024-10-31 00:00:00', '2024-10-22 09:48:53', 0, 2000);

-- --------------------------------------------------------

--
-- 테이블 구조 `product_image_table`
--

CREATE TABLE `product_image_table` (
  `imgid` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `userid` varchar(100) DEFAULT NULL,
  `filename` varchar(100) DEFAULT NULL,
  `regdate` datetime DEFAULT current_timestamp(),
  `status` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `product_image_table`
--

INSERT INTO `product_image_table` (`imgid`, `pid`, `userid`, `filename`, `regdate`, `status`) VALUES
(59, 50, 'admin', '/abcmall/admin/upload/20241022024830193172.jpg', '2024-10-22 09:48:30', 1),
(60, 50, 'admin', '/abcmall/admin/upload/20241022024830577810.jpg', '2024-10-22 09:48:30', 1);

-- --------------------------------------------------------

--
-- 테이블 구조 `product_options`
--

CREATE TABLE `product_options` (
  `poid` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `cate` varchar(100) DEFAULT NULL,
  `option_name` varchar(100) DEFAULT NULL,
  `option_cnt` int(11) DEFAULT NULL,
  `option_price` int(11) DEFAULT NULL,
  `image_url` varchar(300) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `product_options`
--

INSERT INTO `product_options` (`poid`, `pid`, `cate`, `option_name`, `option_cnt`, `option_price`, `image_url`, `status`) VALUES
(10, 32, NULL, '레드', NULL, 1000, '/abcmall/admin/upload/option/20241015090937148348.jpg', 1),
(11, 32, NULL, '블랙', NULL, 2000, '/abcmall/admin/upload/option/20241015090937333256.jpg', 1),
(12, 36, '컬러', '레드', NULL, 1000, '/abcmall/admin/upload/option/20241016031346430016.jpg', 1),
(13, 36, '컬러', '블루', NULL, 2000, '/abcmall/admin/upload/option/20241016031346151018.jpg', 1),
(15, 37, '컬러', '레드', NULL, 0, '/abcmall/admin/upload/option/20241016031821351591.jpg', 1),
(16, 37, '컬러', '블루', NULL, 0, '/abcmall/admin/upload/option/20241016031821203536.jpg', 1),
(17, 37, '사이즈', '대', NULL, 0, '/abcmall/admin/upload/option/20241016031821162951.jpg', 1),
(18, 37, '사이즈', '중', NULL, 0, '/abcmall/admin/upload/option/20241016031821165472.jpg', 1),
(19, 38, '컬러', '레드수정', NULL, 1000, '/abcmall/admin/upload/20241016094557964253.jpg', 1),
(20, 38, '컬러', '블루수정', NULL, 2000, '/abcmall/admin/upload/option/20241016060147207850.jpg', 1),
(21, 38, '사이즈', '대수정', NULL, 10000, '/abcmall/admin/upload/20241016094557819146.jpg', 1),
(22, 38, '사이즈', '중수정', NULL, 20000, '/abcmall/admin/upload/option/20241016060147101647.jpg', 1),
(23, 43, '컬러', '레드', NULL, 0, '/abcmall/admin/upload/20241017031332434318.jpg', 1),
(24, 43, '컬러', '블루', NULL, 0, '/abcmall/admin/upload/20241017031332134868.jpg', 1),
(25, 43, '사이즈', '대', NULL, 0, '/abcmall/admin/upload/20241017031332813960.jpg', 1),
(26, 43, '사이즈', '중', NULL, 0, '/abcmall/admin/upload/20241017031332149906.jpg', 1),
(27, 44, '컬러', '레드', NULL, 0, '/abcmall/admin/upload/20241017035700105873.jpg', 1),
(28, 44, '컬러', '블루', NULL, 0, '/abcmall/admin/upload/20241017035700183336.jpg', 1),
(29, 44, '사이즈', '대', NULL, 0, '/abcmall/admin/upload/20241017035700182550.jpg', 1),
(30, 44, '사이즈', '중', NULL, 0, '/abcmall/admin/upload/20241017035700155785.jpg', 1),
(31, 50, '컬러', '레드', NULL, 1000, '/abcmall/admin/upload/20241022024853852647.jpg', 1),
(32, 50, '컬러', '블루', NULL, 2000, '/abcmall/admin/upload/20241022024853186455.jpg', 1);

-- --------------------------------------------------------

--
-- 테이블 구조 `user_coupons`
--

CREATE TABLE `user_coupons` (
  `ucid` int(11) NOT NULL,
  `couponid` int(11) NOT NULL COMMENT '쿠폰아이디',
  `userid` varchar(100) NOT NULL COMMENT '유저아이디',
  `status` int(11) DEFAULT 1 COMMENT '상태',
  `use_max_date` datetime DEFAULT NULL COMMENT '사용기한',
  `regdate` datetime DEFAULT current_timestamp() COMMENT '등록일',
  `reason` varchar(100) NOT NULL COMMENT '쿠폰취득사유'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `user_coupons`
--

INSERT INTO `user_coupons` (`ucid`, `couponid`, `userid`, `status`, `use_max_date`, `regdate`, `reason`) VALUES
(1, 3, 'codeping', -1, '2024-10-31 16:13:34', '2024-10-18 10:50:23', '회원가입'),
(2, 3, 'greenping', 1, '2024-11-17 23:59:59', '2024-10-18 10:53:04', '회원가입'),
(3, 3, 'adadf', 1, '2024-11-17 23:59:59', '2024-10-18 11:50:11', '회원가입'),
(4, 3, 'hong2', 1, '2024-11-17 23:59:59', '2024-10-18 12:11:48', '회원가입 축하'),
(5, 3, 'greenping', 1, '2024-11-17 23:59:59', '2024-10-18 12:22:25', '회원가입 축하');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`idx`);

--
-- 테이블의 인덱스 `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartid`),
  ADD KEY `cart_pid_IDX` (`pid`),
  ADD KEY `cart_userid_IDX` (`userid`);

--
-- 테이블의 인덱스 `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cid`);

--
-- 테이블의 인덱스 `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`cid`);

--
-- 테이블의 인덱스 `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`mid`);

--
-- 테이블의 인덱스 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`oid`);

--
-- 테이블의 인덱스 `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`);

--
-- 테이블의 인덱스 `product_image_table`
--
ALTER TABLE `product_image_table`
  ADD PRIMARY KEY (`imgid`);

--
-- 테이블의 인덱스 `product_options`
--
ALTER TABLE `product_options`
  ADD PRIMARY KEY (`poid`),
  ADD KEY `newtable_pid_IDX` (`pid`) USING BTREE;

--
-- 테이블의 인덱스 `user_coupons`
--
ALTER TABLE `user_coupons`
  ADD PRIMARY KEY (`ucid`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `admins`
--
ALTER TABLE `admins`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 테이블의 AUTO_INCREMENT `cart`
--
ALTER TABLE `cart`
  MODIFY `cartid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 테이블의 AUTO_INCREMENT `category`
--
ALTER TABLE `category`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 테이블의 AUTO_INCREMENT `coupons`
--
ALTER TABLE `coupons`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 테이블의 AUTO_INCREMENT `members`
--
ALTER TABLE `members`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 테이블의 AUTO_INCREMENT `orders`
--
ALTER TABLE `orders`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 테이블의 AUTO_INCREMENT `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- 테이블의 AUTO_INCREMENT `product_image_table`
--
ALTER TABLE `product_image_table`
  MODIFY `imgid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- 테이블의 AUTO_INCREMENT `product_options`
--
ALTER TABLE `product_options`
  MODIFY `poid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- 테이블의 AUTO_INCREMENT `user_coupons`
--
ALTER TABLE `user_coupons`
  MODIFY `ucid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
