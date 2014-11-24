-- phpMyAdmin SQL Dump
-- version 4.2.0
-- http://www.phpmyadmin.net
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 24 nov 2014 kl 12:57
-- Serverversion: 5.6.17
-- PHP-version: 5.4.28

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
  `author` varchar(255) DEFAULT NULL,
  `salesPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `booklist`
--

INSERT INTO `booklist` (`isbn`, `fPrice`, `inDate`, `amount`, `shelf`, `title`, `author`, `salesPrice`) VALUES
('23233424wkfnsknve', NULL, '2014-11-21 13:25:05', NULL, NULL, NULL, NULL, NULL),
('2345678jh', 876543, '2014-11-24 10:29:58', 4567890, '098765', 'wdascdfbth65', '324567', NULL),
('2345yhnhtbg', 345678, '2014-11-24 10:37:25', 987654, '456789', 'ujhygtfr', 'ujrt', NULL),
('34567', 987654, '2014-11-24 10:28:40', 456789, '098765rd', '8okijuh', 'k7ju6hygt', NULL),
('3456789', 897654, '2014-11-24 10:37:38', 9876, '09876', '9876543', '435678', NULL),
('3456uukyhtg', 3456789, '2014-11-24 10:30:14', 786543, '3456', 'hyr', 'nuhbgvf', NULL),
('435678', 9876543, '2014-11-24 10:33:39', 3456789, '09876', '8976543', '345678', NULL),
('5589ii99o0', 333, '2014-11-22 11:49:26', 222222, '333', 'lampert', 'Dennis Lampert', NULL),
('5999000998888883', 54545245, '2014-11-22 14:33:27', 454545454, '5555', 'dennis i det blå vattnet', 'Dennis Lampert', NULL),
('76543gdrerg', 3434, '2014-11-24 09:27:02', 44, 'asf4', 'Dennis på ett blåbär', 'Milo', NULL),
('77747475u578', 4040, '2014-11-23 19:25:15', 900990, '432fdsfsd', 'Sofia på prärien', 'Dennis Lampert', NULL),
('789oiuytr', 23456, '2014-11-24 10:35:49', 876543, '345678', 'iurec', 'myrtve', NULL),
('ascsa', 3432, '2014-11-22 13:19:24', 7654, '4567', 'asdsd', 'DSVDADCDSA', NULL),
('asdasda', 44444, '2014-11-22 12:37:11', 55555, '66666', 'sdada', 'dasasa', NULL),
('asdsda', 333, '2014-11-22 12:37:42', 333, '33333', 'asdasdas', 'asdasdsa', NULL),
('cssnlsev', 543, '2014-11-24 10:39:42', 7654, '98765', 'kjhdskuhbs', 'sdcmascs', NULL),
('D', 87654, '2014-11-22 13:21:00', 798765, '890+', 'SADFGHJK', 'GHJKL', NULL),
('ddd', 1234, '2014-11-22 14:09:40', 432, 'dsa', 'ssss', 'cccccc', NULL),
('dddsasad345678', 34344456, '2014-11-24 09:27:48', 445555, 'asf4343', '334rf', 'Milomooow', NULL),
('ddsa', 5432, '2014-11-22 14:11:18', 5432, '543', 'fdsa', 'fdsa', NULL),
('dfsa', 343433, '2014-11-22 14:21:38', 3434, '343433443', 'fgdsaz', 'fvdcsxz', NULL),
('dfsds', 543, '2014-11-22 15:16:37', 543, '654', 'sdfsfa', 'SfdsfsA', NULL),
('dsfrdgda', 98765, '2014-11-24 10:37:16', 45678, '98765', 'fdggdfgfdf', 'fdgdfgfdgd', NULL),
('dsfsvd<dd', 76543, '2014-11-24 10:31:48', 456789, '0987654', 'sdfgs', 'sdvvsv', NULL),
('dssd', 6543, '2014-11-22 14:03:04', 65436789, '7777777', 'sdfdsfsd', 'ffvvff', NULL),
('dzvsdvd', 9876, '2014-11-24 10:39:22', 987, '09876', 'fdgdbdfbd', 'fdgdfbdfba', NULL),
('dzxxc', 1234, '2014-11-24 10:33:28', 6543, '3456789', 'czxczxcc', 'dsvdfvsdcs', NULL),
('FSDFZXCS', 6543, '2014-11-22 15:19:45', 5433, 'klmijb9buon', 'sdc <xsz', 'dsz<c', NULL),
('fsldmsdlknlksds', 6543, '2014-11-24 10:40:22', 7654, '98765', 'sdkjnefkjs', 'kjdnfvkjhdsv', NULL),
('gfd', 543, '2014-11-22 14:12:44', 654, '6543', 'gfds', 'gfds', NULL),
('gfds<', 5432, '2014-11-22 14:11:59', 4321, '5432', 'fdsa', 'fdsa', NULL),
('gfdsvg', 6543, '2014-11-22 14:17:47', 543, '6543', 'tredxv', 'bv cdsxa', NULL),
('gfhnrfs', 87654, '2014-11-24 10:38:08', 87654, '8765', 'nybgvfcs', 'jnds', NULL),
('ghgfdfgh', 33543, '2014-11-22 14:18:31', 4654, '54643', 'hgfdghjg', 'ffghgfhj', NULL),
('ghj765674j', 3333, '2014-11-22 14:35:39', 4444, '55555', 'tyjfhxbd', 'rthsfgzbrsb', NULL),
('hgfdsa', 7654, '2014-11-24 10:34:12', 98766, '98765', 'jhgfdsa', 'hgfdsas', NULL),
('hgffdgfdd', 7890, '2014-11-22 14:26:21', 9876, '7654', 'fdgdgdfdgfgdz', 'agdagfd', NULL),
('hihih34', 342, '2014-11-24 09:45:29', 44, 'lokijhg', 'jonlennons dödshistoria', 'sevenup', NULL),
('HTGRFD', 323224, '2014-11-22 15:17:18', 343553545, '544465', 'GRFDS', 'GFD', NULL),
('hvcds', 76, '2014-11-22 15:15:02', 7654, '76543', 'ngbfd', 'hg', NULL),
('ikr7654', 87654, '2014-11-24 10:38:26', 87654, '87654', 'kjuhygtf', '0987654', NULL),
('jfoijr', 221623, '2014-11-24 11:44:43', 23424, '23423rfc', 'sdlksdjvds', 'aslkjsd', NULL),
('jhgfvc', 87654, '2014-11-24 10:40:06', 987654, '987654', 'jhdfsd', 'hjgfdcsd', NULL),
('jtyhftdrgs', 987654, '2014-11-24 10:38:16', 98765, '87654', 'fhtdgs', 'hfgdgf', NULL),
('jyhtgfd', 567890, '2014-11-22 14:18:52', 67, '567', 'jyhtbgrvf', 'uyhtfgd', NULL),
('khaffsaff', 1234567, '2014-11-24 10:28:29', 98765433, '34rtyhgnb', 'adglkfjlsefkj', 'sfdöklmsdlkm', NULL),
('nasdkjhads', 1234, '2014-11-24 10:29:49', 5432, '890', 'lsdkvnljknv', 'sdc,nvkjn', NULL),
('nyhtbgrvfec', 8765, '2014-11-24 10:39:11', 876543, '98765', 'njyhbvfcd', 'nhtbgvd', NULL),
('oiuytrew', 34567, '2014-11-24 10:32:07', 998765, '98765', 'nc', 'myjnhtbgrvfe', NULL),
('refsefw', 543, '2014-11-22 14:25:51', 543678, '98/6543', 'sfesfes', 'edfsddf', NULL),
('rtgtre', 87654, '2014-11-24 10:34:35', 7654, '87654', 'egrerger', 'yyhhh', NULL),
('saassa', 4545, '2014-11-22 13:18:18', 4545545, '54545', 'saas', 'saas', NULL),
('sadad', 4444999, '2014-11-22 12:43:54', 22, '23234rrgd', 'asdasda', 'asdasd', NULL),
('sadadas', 444, '2014-11-22 12:34:24', 555, '666666', 'adasdas', 'asdasda', NULL),
('sadsadas', 333, '2014-11-22 12:36:42', 333, '2222', 'sadas', 'asdasd', NULL),
('sadsadsa', 432, '2014-11-23 18:40:36', 543, '5432', 'sdfsdffz', 'vf z', NULL),
('sdfscZxas', 543, '2014-11-22 15:20:51', 5432, '65432', 'DScscsc', 'sdcsdcdscsd', NULL),
('trew', 98, '2014-11-22 14:13:33', 9876, '98765', 'trew', 'trew', NULL),
('uyrde', 9876, '2014-11-24 10:38:36', 987654, '87654', '76hy5gfr', 'uvfcefdsccsd', NULL),
('wrewerhwrtut', 11777, '2014-11-24 11:47:40', 324567, '987654', 'rteutjtdf', 'trhtyjryytjytd', NULL);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumpning av Data i tabell `booklog`
--

INSERT INTO `booklog` (`ID`, `isbnLog`, `earnings`, `amountLog`, `dateLog`, `title`) VALUES
(1, 'asdsaa', 23234, 43434, '2014-11-24 07:24:19', 'hejhej');

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
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `booklog`
--
ALTER TABLE `booklog`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
