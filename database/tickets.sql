-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 27, 2023 at 06:45 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webtix`
--
CREATE DATABASE IF NOT EXISTS `webtix` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `webtix`;

-- --------------------------------------------------------

--
-- Table structure for table `data-share-logs`
--
-- Creation: Jun 27, 2023 at 04:26 AM
-- Last update: Jun 27, 2023 at 04:42 AM
--

DROP TABLE IF EXISTS `data-share-logs`;
CREATE TABLE IF NOT EXISTS `data-share-logs` (
  `id` varchar(255) NOT NULL,
  `log` longtext NOT NULL,
  `time` date NOT NULL DEFAULT current_timestamp(),
  `staff` varchar(255) NOT NULL DEFAULT 'IT/Heldesk',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELATIONSHIPS FOR TABLE `data-share-logs`:
--

--
-- Dumping data for table `data-share-logs`
--

INSERT INTO `data-share-logs` (`id`, `log`, `time`, `staff`) VALUES
('8d62c632133a7357', 'hello, I have complete a full security and system audit of your network and have found 3 minor security issues and 5 major security issues. I\'ve sent an encrypted secured email with information on how you can patch these issues. you should be able to meet your expected launch date as well. Thank you very much! :)', '2023-06-27', 'IT/Heldesk'),
('c4c66d949a713a0f', '1. Verified michael johnson\'s network settings and confirmed that they were correctly configured.\\n2. Checked the Nord VPN client software version and found it to be outdated (version 2.1.0).\\n3. Downloaded the latest version (2.5.2) from the official Nord VPN\'s website.\\n4. Uninstalled the old VPN client software and restarted the system.\\n5. Installed the new VPN client software, following the on-screen prompts.\\n6. Configured the VPN client with the user\'s credentials and tested the connection.\\n7. Successfully established a VPN connection for the user.\\n8. Provided instructions on how to use the VPN client and troubleshoot common issues.\"', '2023-06-27', 'IT/Heldesk');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--
-- Creation: May 12, 2023 at 03:25 AM
-- Last update: Jun 27, 2023 at 04:40 AM
--

DROP TABLE IF EXISTS `tickets`;
CREATE TABLE IF NOT EXISTS `tickets` (
  `id` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `description` text NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELATIONSHIPS FOR TABLE `tickets`:
--

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `firstName`, `lastName`, `email`, `phone`, `description`) VALUES
('061271c0f0f203ac', 'anna', 'reaert', 'felipedevsec@gmail.com', '713-992-4795', '123e4r23544 213456 23567 24576 2346572465724657'),
('06c5dc273405b0d4', 'sara', 'mcgradcin', 'felipedevsec@gmail.com', '333.444.5555', 'arwg aewrg aerg aer gaewr gaewr gaerg'),
('0cf6e1b7abad101a', 'sara', 'king', 's.king@google.com', '813.445.9979', 'Our google AI network is now going up for business and enterprise use, it will be used by clients and companies all around the world. We would like to hire you again for a system-wide pen-test to ensure the security and safety of our entire network, ai, service, and system infrastructure. Please and thank you! :) Compensation will be $1500.00/hr and a lump sum payment of $250,000.00'),
('1c1e15043c0e343f', 'felipe', 'garcia diaz', 'felipedevsec@gmail.com', '813.992.4795', 'successful, my best self, access to all those things, amazing friends and girlfriends.\n\n\n\n\n\na tech genius, and god and a solid entrepreneur. Amazing at web dev, IT, Networking, and Hacking.'),
('1ceae12f3ae16ca9', 'ari', 'mcgrante', 'ari.mcgrante@apple.com', '9157735499', 'please configure required security patch for iOS database systems. thank you! :)'),
('3a4c36371dc2ab4f', 'anna', 'steinsburger', 'annaSteinsBurger@apple.com', '9154492389', 'Apple iOS update 17.9 has a level 9 security risk, where hackers are able to use websites to bypass encryption and collect users password and logon data. as well as additional sensitive user information and credentials.'),
('4b02ddf862f9062a', 'sara', 'mcgradcin', 'felipedevsec@gmail.com', '333.444.5555', 'arwg aewrg aerg aer gaewr gaewr gaerg'),
('4e99f2aa4742fec5', 'anna', 'reaert', 'felipedevsec@gmail.com', '713-992-4795', '123e4r23544 213456 23567 24576 2346572465724657'),
('5ffd29ed952dc0a2', 'anna', 'reaert', 'felipedevsec@gmail.com', '713-992-4795', '123e4r23544 213456 23567 24576 2346572465724657'),
('6497d60303a3a7a6', 'anna', 'steinsburger', 'annaSteinsBurger@apple.com', '9154492389', 'Apple iOS update 17.9 has a level 9 security risk, where hackers are able to use websites to bypass encryption and collect users password and logon data. as well as additional sensitive user information and credentials.'),
('69c04f8fe07292d2', 'anna', 'steinsburger', 'annaSteinsBurger@apple.com', '9154492389', 'Apple iOS update 17.9 has a level 9 security risk, where hackers are able to use websites to bypass encryption and collect users password and logon data. as well as additional sensitive user information and credentials.'),
('7633bb759122ea5a', 'anna', 'steinsburger', 'annaSteinsBurger@apple.com', '9154492389', 'Apple iOS update 17.9 has a level 9 security risk, where hackers are able to use websites to bypass encryption and collect users password and logon data. as well as additional sensitive user information and credentials.'),
('8473b081b783e378', 'anna', 'reaert', 'felipedevsec@gmail.com', '713-992-4795', '123e4r23544 213456 23567 24576 2346572465724657'),
('84f5134b61c6ac93', 'anna', 'reaert', 'felipedevsec@gmail.com', '713-992-4795', '123e4r23544 213456 23567 24576 2346572465724657'),
('8815295be7f284a9', 'felipe', 'garcia diaz', 'felipedevsec@gmail.com', '813.992.4795', 'successful, my best self, access to all those things, amazing friends and girlfriends.\n\n\n\n\n\na tech genius, and god and a solid entrepreneur. Amazing at web dev, IT, Networking, and Hacking.'),
('9ef443087130c200', 'felipe', 'garcia diaz', 'felipedevsec@gmail.com', '813.992.4795', 'successful, my best self, access to all those things, amazing friends and girlfriends.\n\n\n\n\n\na tech genius, and god and a solid entrepreneur. Amazing at web dev, IT, Networking, and Hacking.'),
('a07bec0d30f9f689', '', '', '', '', ''),
('ab51d698d8e7eb99', 'sabriannah', 'leughart', 'sab.leughart@google.com', '8134459799', 'We need a system pen-test ran on our new google ai suite for enterprise and business to be evaluated and secured, for the safety of all of our clients who are now using this suite of software for enterprise and business use. Thank you! :) :) :) x999 / hr'),
('ae2556c389d410d9', 'anna', 'steinsburger', 'annaSteinsBurger@apple.com', '9154492389', 'Apple iOS update 17.9 has a level 9 security risk, where hackers are able to use websites to bypass encryption and collect users password and logon data. as well as additional sensitive user information and credentials.'),
('b0adc3b2cc0f98af', 'sara', 'mcgradcin', 'felipedevsec@gmail.com', '333.444.5555', 'arwg aewrg aerg aer gaewr gaewr gaerg'),
('d0e9bab6d2311a8e', 'Gordon', 'Ramsey', 'G.Ramsey@gordonRamsey.co.uk', '549924454799', 'the servers for the main restaurant have shut-down the system administrators believes this is due to a security vulnerability being abused by a third party user. can you review, and help us with this issue? We can pay you your regular consultation fee of $1500/hr if that works for you. With a final payment of $290000.00 once you are done.'),
('e36981281a3cedf5', 'anna', 'steinsburger', 'annaSteinsBurger@apple.com', '9154492389', 'Apple iOS update 17.9 has a level 9 security risk, where hackers are able to use websites to bypass encryption and collect users password and logon data. as well as additional sensitive user information and credentials.'),
('edb902fb9aeb64c0', 'anna', 'reaert', 'felipedevsec@gmail.com', '713-992-4795', '123e4r23544 213456 23567 24576 2346572465724657');


--
-- Metadata
--
USE `phpmyadmin`;

--
-- Metadata for table data-share-logs
--

--
-- Metadata for table tickets
--

--
-- Dumping data for table `pma__table_uiprefs`
--

INSERT INTO `pma__table_uiprefs` (`username`, `db_name`, `table_name`, `prefs`, `last_update`) VALUES
('root', 'webtix', 'tickets', '{\"sorted_col\":\"`tickets`.`firstName` ASC\"}', '2023-06-27 01:16:06');

--
-- Metadata for database webtix
--
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
