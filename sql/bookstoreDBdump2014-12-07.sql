-- phpMyAdmin SQL Dump
-- version 4.2.8
-- http://www.phpmyadmin.net
--
-- Värd: localhost
-- Tid vid skapande: 07 dec 2014 kl 11:57
-- Serverversion: 5.6.20
-- PHP-version: 5.3.29

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
('1234567890123', 100, '2014-12-01 18:49:26', 10, '1', 'a', 'a'),
('1234567890234', 100, '2014-12-01 18:49:41', 10, 'b', 'b', 'b'),
('1234567890345', 100, '2014-12-01 18:49:58', 1, 'c', 'c', 'c'),
('1234567890902', 1000, '2014-12-02 01:45:04', 5, 'aaa', 'aaa', 'aaa');

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `booklog`
--

INSERT INTO `booklog` (`ID`, `isbnLog`, `earnings`, `amountLog`, `dateLog`, `title`) VALUES
(11, '1234567890902', NULL, 10, '2014-12-02 01:45:04', NULL);

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
('1234567890123', 123),
('1234567890234', 180),
('1234567890345', 180),
('1234567890902', 130);

-- --------------------------------------------------------

--
-- Tabellstruktur `userlogin`
--

CREATE TABLE IF NOT EXISTS `userlogin` (
  `userID` varchar(255) DEFAULT NULL,
  `userPWD` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `userlogin`
--

INSERT INTO `userlogin` (`userID`, `userPWD`) VALUES
('Camilo', 'Chile'),
('Dennis', 'Brazil'),
('Hugo', 'Africa'),
('Peter', 'Japan'),
('Susanne', 'Sweden'),
('Thomas', 'USA');

-- --------------------------------------------------------

--
-- Struktur för vy `books_with_price`
--
DROP TABLE IF EXISTS `books_with_price`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `books_with_price` AS select `booklist`.`isbn` AS `isbn`,`booklist`.`title` AS `title`,`pricelist`.`salesPrice` AS `salesPrice` from (`booklist` join `pricelist`) where (`booklist`.`isbn` = `pricelist`.`isbn`);

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
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
