-- phpMyAdmin SQL Dump
-- version 4.2.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 29, 2014 at 12:13 PM
-- Server version: 5.6.20
-- PHP Version: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `booklist`
--

CREATE TABLE IF NOT EXISTS `booklist` (
  `isbn` varchar(255) NOT NULL,
  `fPrice` int(11) DEFAULT NULL,
  `inDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `amount` int(11) DEFAULT NULL,
  `shelf` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `booklist`
--

INSERT INTO `booklist` (`isbn`, `fPrice`, `inDate`, `amount`, `shelf`, `title`, `author`) VALUES
('123', 431534, '2014-11-28 15:18:26', 241, 'ffsd', '3214', '2143'),
('31231', 3123, '2014-11-28 15:15:46', 1231, 'h1', '31231', '21323'),
('31232§3', 4214241, '2014-11-28 15:13:38', 1213, 'h1', '2131241', '24321421'),
('a', 100, '2014-11-28 15:00:04', 1, 'a', 'a', 'a'),
('b', 100, '2014-11-28 15:00:56', 1, 'b', 'b', 'b'),
('c', 100, '2014-11-28 15:02:15', 1, 'c', 'c', 'c'),
('d', 100, '2014-11-28 15:02:28', 1, 'd', 'd', 'd'),
('e', 100, '2014-11-28 15:03:43', 1, 'e', 'e', 'e'),
('f', 100, '2014-11-29 12:09:30', 1, 'f', 'f', 'f'),
('q', 12, '2014-11-29 12:11:25', 1, 'q', 'q', 'q');

-- --------------------------------------------------------

--
-- Table structure for table `booklog`
--

CREATE TABLE IF NOT EXISTS `booklog` (
`ID` int(11) NOT NULL,
  `isbnLog` varchar(255) NOT NULL,
  `earnings` int(11) DEFAULT NULL,
  `amountLog` int(11) DEFAULT NULL,
  `dateLog` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `booklog`
--

INSERT INTO `booklog` (`ID`, `isbnLog`, `earnings`, `amountLog`, `dateLog`, `title`) VALUES
(1, '1qa2ws3ed', NULL, 20, '2014-11-26 18:14:20', NULL),
(2, '1qa2ws3ed', NULL, 1, '2014-11-26 18:14:37', NULL),
(3, '1qa2ws3ed', NULL, 1, '2014-11-26 18:14:38', NULL),
(4, '1qa2ws3ed', NULL, 1, '2014-11-26 18:14:39', NULL),
(5, '1qa2ws3ed', NULL, 1, '2014-11-26 18:14:40', NULL),
(6, '1qa2ws3ed', NULL, 1, '2014-11-26 18:14:40', NULL),
(7, '1qa2ws3ed', NULL, 1, '2014-11-26 18:14:40', NULL),
(8, '1qa2ws3ed', NULL, 1, '2014-11-26 18:14:55', NULL),
(9, 'q', NULL, 20, '2014-11-28 10:36:14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pricelist`
--

CREATE TABLE IF NOT EXISTS `pricelist` (
  `isbn` varchar(255) NOT NULL DEFAULT '',
  `salesPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pricelist`
--

INSERT INTO `pricelist` (`isbn`, `salesPrice`) VALUES
('123', 776761),
('123456', 100),
('f', 180),
('q', 180);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booklist`
--
ALTER TABLE `booklist`
 ADD PRIMARY KEY (`isbn`);

--
-- Indexes for table `booklog`
--
ALTER TABLE `booklog`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `pricelist`
--
ALTER TABLE `pricelist`
 ADD PRIMARY KEY (`isbn`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booklog`
--
ALTER TABLE `booklog`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
