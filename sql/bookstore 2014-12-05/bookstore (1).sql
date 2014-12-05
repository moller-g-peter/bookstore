-- phpMyAdmin SQL Dump
-- version 4.2.8
-- http://www.phpmyadmin.net
--
-- Värd: localhost
-- Tid vid skapande: 05 dec 2014 kl 10:04
-- Serverversion: 5.6.20
-- PHP-version: 5.4.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databas: `bookstore`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `booklist`
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
-- Dumpning av Data i tabell `booklist`
--

INSERT INTO `booklist` (`isbn`, `fPrice`, `inDate`, `amount`, `shelf`, `title`, `author`) VALUES
('123', 431534, '2014-11-28 15:18:26', 241, 'ffsd', '3214', '2143'),
('1234567890345', 23, '2014-12-01 10:19:58', 0, 'e1', 'hejsan', 'the angels'),
('1988122133800', 211, '2014-12-04 10:44:11', 4, 'g4', 'susannes liv', 'susanne jönsspn'),
('31231', 3123, '2014-11-28 15:15:46', 1231, 'h1', '31231', '21323'),
('31232§3', 4214241, '2014-11-28 15:13:38', 1213, 'h1', '2131241', '24321421'),
('3333333333333', 23, '2014-12-01 13:42:06', 2, 'd3', 'hej hoppsajn', 'susanne j'),
('3356767897645', 456, '2014-12-02 09:23:26', 0, 'd3', 'hello world', 'kirsten helsing'),
('4444444444444', 45, '2014-12-04 13:25:14', 0, 'e3', 'hejsann', 'kenta'),
('a', 100, '2014-11-28 15:00:04', 1, 'a', 'a', 'a'),
('b', 100, '2014-11-28 15:00:56', 1, 'b', 'b', 'b'),
('c', 100, '2014-11-28 15:02:15', 1, 'c', 'c', 'c'),
('d', 100, '2014-11-28 15:02:28', 1, 'd', 'd', 'd'),
('e', 100, '2014-11-28 15:03:43', 1, 'e', 'e', 'e'),
('f', 100, '2014-11-29 12:09:30', 1, 'f', 'f', 'f'),
('q', 12, '2014-11-29 12:11:25', 1, 'q', 'q', 'q');

-- --------------------------------------------------------

--
-- Tabellstruktur `booklog`
--

CREATE TABLE IF NOT EXISTS `booklog` (
`ID` int(11) NOT NULL,
  `isbnLog` varchar(255) NOT NULL,
  `earnings` int(11) DEFAULT NULL,
  `amountLog` int(11) DEFAULT NULL,
  `dateLog` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `booklog`
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
(9, 'q', NULL, 20, '2014-11-28 10:36:14', NULL),
(10, '1234567890345', NULL, 1, '2014-12-01 10:19:54', NULL),
(11, '3356767897645', NULL, 1, '2014-12-02 09:08:53', NULL),
(12, '3356767897645', NULL, 3, '2014-12-02 09:23:26', NULL),
(13, '1988122133800', NULL, 2, '2014-12-04 09:30:59', NULL),
(14, '1988122133800', NULL, 1, '2014-11-11 10:44:05', NULL),
(15, '1988122133800', NULL, 1, '2014-12-04 10:44:08', NULL),
(16, '1988122133800', NULL, 1, '2014-12-04 10:44:09', NULL),
(17, '1988122133800', NULL, 1, '2014-12-04 10:44:11', NULL),
(18, '4444444444444', NULL, 1, '2014-12-04 13:25:14', NULL);

-- --------------------------------------------------------

--
-- Ersättningsstruktur för vy `books_with_price`
--
CREATE TABLE IF NOT EXISTS `books_with_price` (
`isbn` varchar(255)
,`title` varchar(255)
,`salesPrice` int(11)
);
-- --------------------------------------------------------

--
-- Ersättningsstruktur för vy `customer_info`
--
CREATE TABLE IF NOT EXISTS `customer_info` (
`isbn` varchar(255)
,`amount` int(11)
,`shelf` varchar(255)
,`title` varchar(255)
,`author` varchar(255)
,`salesPrice` int(11)
);
-- --------------------------------------------------------

--
-- Tabellstruktur `pricelist`
--

CREATE TABLE IF NOT EXISTS `pricelist` (
  `isbn` varchar(255) NOT NULL DEFAULT '',
  `salesPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `pricelist`
--

INSERT INTO `pricelist` (`isbn`, `salesPrice`) VALUES
('123', 776761),
('123456', 100),
('1234567890345', 41),
('1988122133800', 360),
('3333333333333', 1234567),
('3356767897645', 821),
('4444444444444', 3),
('f', 180),
('q', 180);

-- --------------------------------------------------------

--
-- Ersättningsstruktur för vy `prices`
--
CREATE TABLE IF NOT EXISTS `prices` (
`isbn` varchar(255)
,`salesPrice` int(11)
,`fPrice` int(11)
);
-- --------------------------------------------------------

--
-- Ersättningsstruktur för vy `report_data`
--
CREATE TABLE IF NOT EXISTS `report_data` (
`ID` int(11)
,`isbnLog` varchar(255)
,`amountLog` int(11)
,`dateLog` timestamp
,`earnings` bigint(12)
,`totalAmount` bigint(30)
);
-- --------------------------------------------------------

--
-- Ersättningsstruktur för vy `winning_difference`
--
CREATE TABLE IF NOT EXISTS `winning_difference` (
`isbn` varchar(255)
,`salesPrice` int(11)
,`fPrice` int(11)
,`earnings` bigint(12)
);
-- --------------------------------------------------------

--
-- Struktur för vy `books_with_price`
--
DROP TABLE IF EXISTS `books_with_price`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `books_with_price` AS select `booklist`.`isbn` AS `isbn`,`booklist`.`title` AS `title`,`pricelist`.`salesPrice` AS `salesPrice` from (`booklist` join `pricelist`) where (`booklist`.`isbn` = `pricelist`.`isbn`);

-- --------------------------------------------------------

--
-- Struktur för vy `customer_info`
--
DROP TABLE IF EXISTS `customer_info`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `customer_info` AS select `booklist`.`isbn` AS `isbn`,`booklist`.`amount` AS `amount`,`booklist`.`shelf` AS `shelf`,`booklist`.`title` AS `title`,`booklist`.`author` AS `author`,`books_with_price`.`salesPrice` AS `salesPrice` from (`booklist` join `books_with_price`) where (`booklist`.`isbn` = `books_with_price`.`isbn`);

-- --------------------------------------------------------

--
-- Struktur för vy `prices`
--
DROP TABLE IF EXISTS `prices`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `prices` AS select `pricelist`.`isbn` AS `isbn`,`pricelist`.`salesPrice` AS `salesPrice`,`booklist`.`fPrice` AS `fPrice` from (`pricelist` join `booklist`) where (`pricelist`.`isbn` = `booklist`.`isbn`);

-- --------------------------------------------------------

--
-- Struktur för vy `report_data`
--
DROP TABLE IF EXISTS `report_data`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `report_data` AS select `booklog`.`ID` AS `ID`,`booklog`.`isbnLog` AS `isbnLog`,`booklog`.`amountLog` AS `amountLog`,`booklog`.`dateLog` AS `dateLog`,`winning_difference`.`earnings` AS `earnings`,(`winning_difference`.`earnings` * `booklog`.`amountLog`) AS `totalAmount` from (`booklog` join `winning_difference`) where (`booklog`.`isbnLog` = `winning_difference`.`isbn`);

-- --------------------------------------------------------

--
-- Struktur för vy `winning_difference`
--
DROP TABLE IF EXISTS `winning_difference`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `winning_difference` AS select `prices`.`isbn` AS `isbn`,`prices`.`salesPrice` AS `salesPrice`,`prices`.`fPrice` AS `fPrice`,(`prices`.`salesPrice` - `prices`.`fPrice`) AS `earnings` from `prices`;

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `booklist`
--
ALTER TABLE `booklist`
 ADD PRIMARY KEY (`isbn`);

--
-- Index för tabell `booklog`
--
ALTER TABLE `booklog`
 ADD PRIMARY KEY (`ID`);

--
-- Index för tabell `pricelist`
--
ALTER TABLE `pricelist`
 ADD PRIMARY KEY (`isbn`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `booklog`
--
ALTER TABLE `booklog`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
