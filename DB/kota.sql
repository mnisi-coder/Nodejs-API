-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2021 at 12:15 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kota`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `itemNo` varchar(200) NOT NULL,
  `item` varchar(200) NOT NULL,
  `price` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ordertable`
--

CREATE TABLE `ordertable` (
  `orderNo` int(200) NOT NULL,
  `totPrice` int(20) NOT NULL,
  `orderStatus` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `orderDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Roles` varchar(100) NOT NULL,
  `Created_on` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Name`, `Email`, `Password`, `Roles`, `Created_on`) VALUES
(1, 'Jali', 'Mnisi@gmail.comm', 'hello', 'user', '2020-12-16 16:41:59'),
(3, 'Tibi', 'Tibi@gmail.com', 'its abowt tym', 'User', '2020-12-16 16:57:38'),
(4, 'John', 'john@gmail.com', 'Tym to rest now', 'ADMIN', '2020-12-16 17:26:23'),
(5, 'John', 'john@gmail.com', 'Tym to rest now', 'ADMIN', '2020-12-16 21:00:16'),
(6, 'John', 'john@gmail.com', 'Tym to rest now', 'ADMIN', '2020-12-16 21:05:43'),
(8, '$scope.name', '$scope.email', '$scope.pswd', '$scope.roles', '2020-12-17 14:01:47'),
(9, '$scope.name', '$scope.email', '$scope.pswd', '$scope.roles', '2020-12-17 14:04:01'),
(10, 'jali', 'j.mnisi.c.jm@gmail.com', '#Mdawekamatla1', 'customer', '2021-01-21 11:41:24'),
(11, 'Jali Mnisi', 'j.mnisi@gmail.com', '123456', 'admin', '2021-01-21 22:16:48'),
(12, 'Jali Mnisi', 'j.mdawe@gmail.com', '123456', 'admin', '2021-01-21 22:22:39'),
(13, 'Jali Mnisi', 'j.sina@gmail.com', '123456', 'admin', '2021-01-21 22:23:39'),
(14, 'Jali Mdawwe', 'j.lee@gmail.com', '123456', 'admin', '2021-01-21 22:26:20'),
(15, 'Jali Mdawwe', 'j.lee@gmail', '123456', 'admin', '2021-01-22 12:18:22'),
(16, 'Jali Mdawwe', 'j.lee.com', '123456', 'admin', '2021-01-22 12:19:10'),
(17, 'Jali Mdawwe', 'j.lee.co@haha.com', '123456', 'admin', '2021-01-26 12:27:32'),
(18, 'Jali Mdawwe', 'j.lee.co@haha.co', '123456', 'admin', '2021-01-27 10:41:27'),
(19, 'Jali Mdawwe', 'j.lee.coha@ha.com', '123456', 'admin', '2021-01-27 10:44:59'),
(20, 'Jali Mdawwe', 'j.lee.coha@haha.com', '123456', 'admin', '2021-01-27 10:47:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ordertable`
--
ALTER TABLE `ordertable`
  ADD PRIMARY KEY (`orderNo`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ordertable`
--
ALTER TABLE `ordertable`
  MODIFY `orderNo` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
