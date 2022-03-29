-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1:3306
-- 產生時間： 2022-03-29 02:55:44
-- 伺服器版本： 5.7.31
-- PHP 版本： 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `db_apopo_fip`
--

-- --------------------------------------------------------

--
-- 資料表結構 `gallery`
--

DROP TABLE IF EXISTS `gallery`;
CREATE TABLE IF NOT EXISTS `gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gallery_img` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `gallery`
--

INSERT INTO `gallery` (`id`, `gallery_img`) VALUES
(1, 'gallery-1.jpg'),
(2, 'gallery-2.jpg'),
(3, 'gallery-3.jpg'),
(4, 'gallery-4.jpg'),
(5, 'gallery-5.jpg'),
(6, 'gallery-6.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
CREATE TABLE IF NOT EXISTS `newsletter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `member_email` varchar(60) NOT NULL,
  `member_name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `newsletter`
--

INSERT INTO `newsletter` (`id`, `member_email`, `member_name`) VALUES
(1, 'sample@test.com', 'sample name'),
(2, 'feragfwears', 'fesdfa'),
(3, 'feragfwears', 'fesdfa'),
(4, 'cutedoggy@sample.com', 'puppy'),
(5, 'doggy@sample.com', 'woof');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
