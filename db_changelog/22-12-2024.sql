-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2024 at 07:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tp_billing`
--

-- --------------------------------------------------------

--
-- Table structure for table `tp_account_status`
--

CREATE TABLE `tp_account_status` (
  `tp_status_id` int(11) NOT NULL,
  `status_name` varchar(255) DEFAULT NULL,
  `status_msg` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tp_books`
--

CREATE TABLE `tp_books` (
  `tp_book_id` varchar(255) NOT NULL,
  `book_title` varchar(255) NOT NULL,
  `book_info` varchar(255) NOT NULL,
  `book_publisher_id` varchar(255) NOT NULL,
  `book_year` varchar(255) NOT NULL,
  `affiliated_by` varchar(255) NOT NULL,
  `board` varchar(255) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `barcode` varchar(255) NOT NULL,
  `mrp` varchar(255) NOT NULL,
  `medium` varchar(255) NOT NULL,
  `book_type` varchar(255) NOT NULL,
  `book_image` varchar(255) NOT NULL,
  `book_author` varchar(255) NOT NULL,
  `book_for_class` varchar(255) NOT NULL,
  `book_status` varchar(255) NOT NULL,
  `created_by` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tp_publishers`
--

CREATE TABLE `tp_publishers` (
  `tp_publisher_id` varchar(255) NOT NULL,
  `publisher_name` varchar(255) NOT NULL,
  `primary_user` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `since` varchar(255) NOT NULL,
  `legal_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` int(255) NOT NULL,
  `wallet_amount` varchar(255) NOT NULL,
  `previous_wallet_amount` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdBy` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tp_publishers`
--

INSERT INTO `tp_publishers` (`tp_publisher_id`, `publisher_name`, `primary_user`, `address`, `mobile`, `since`, `legal_name`, `email`, `password`, `status`, `wallet_amount`, `previous_wallet_amount`, `created_at`, `update_at`, `createdBy`) VALUES
('', 'TechHouse', 'adminUser', '123 Main Street', '9876543210', '2024-01-01', 'TechHouse Pvt Ltd', 'techhouse@example.com', 'SecurePass123', 1, '100.5', '50.25', '2024-12-17 16:44:36', '2024-12-17 16:44:36', ''),
('28594a9a-f7eb-4551-8bfa-3be2e78680c5', 'TechHouse', 'adminUser', '123 Main Street', '9876543210', '2024-01-01', 'TechHouse Pvt Ltd', 'techhouse@example.com', 'SecurePass123', 1, '100.5', '50.25', '2024-12-17 16:48:24', '2024-12-17 16:48:24', ''),
('6fa2b90d-943f-4e48-b96b-7520ea23afba', 'TechHouse', 'adminUser', '123 Main Street', '9876543210', '2024-01-01', 'TechHouse Pvt Ltd', 'techhouse@example.com', 'SecurePass123', 1, '100.5', '50.25', '2024-12-17 16:48:35', '2024-12-17 16:48:35', ''),
('b830f8d4-04cc-4504-a87f-c27cbeb97960', 'TechHouse', 'adminUser', '123 Main Street', '9876543210', '2024-01-01', 'TechHouse Pvt Ltd', 'techhouse@example.com', 'SecurePass123', 1, '100.5', '50.25', '2024-12-17 16:48:11', '2024-12-17 16:48:11', ''),
('ed52de60-4b28-4893-9390-4cb903db5219', 'TechHouse', 'adminUser', '123 Main Street', '9876543210', '2024-01-01', 'TechHouse Pvt Ltd', 'techhouse@example.com', 'SecurePass123', 1, '100.5', '50.25', '2024-12-17 17:00:12', '2024-12-17 17:00:12', '');

-- --------------------------------------------------------

--
-- Table structure for table `tp_schools`
--

CREATE TABLE `tp_schools` (
  `tp_school_id` varchar(255) NOT NULL,
  `tp_school_name` varchar(255) NOT NULL,
  `tp_school_address` text NOT NULL,
  `primary_user` varchar(255) NOT NULL,
  `school_status` int(255) NOT NULL,
  `school_email` varchar(255) NOT NULL,
  `school_password` text NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `school_type` varchar(255) NOT NULL,
  `school_contact_number` varchar(255) NOT NULL,
  `school_edu_medium` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tp_users`
--

CREATE TABLE `tp_users` (
  `tp_userId` char(255) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(25) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_role` int(11) DEFAULT NULL,
  `is_user_deailer` tinyint(1) DEFAULT NULL,
  `user_remark` varchar(255) DEFAULT NULL,
  `user_status` int(11) DEFAULT NULL,
  `user_createdAt` datetime DEFAULT NULL,
  `user_updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tp_account_status`
--
ALTER TABLE `tp_account_status`
  ADD PRIMARY KEY (`tp_status_id`);

--
-- Indexes for table `tp_books`
--
ALTER TABLE `tp_books`
  ADD PRIMARY KEY (`tp_book_id`);

--
-- Indexes for table `tp_publishers`
--
ALTER TABLE `tp_publishers`
  ADD PRIMARY KEY (`tp_publisher_id`);

--
-- Indexes for table `tp_schools`
--
ALTER TABLE `tp_schools`
  ADD PRIMARY KEY (`tp_school_id`),
  ADD UNIQUE KEY `tp_school_id` (`tp_school_id`);

--
-- Indexes for table `tp_users`
--
ALTER TABLE `tp_users`
  ADD PRIMARY KEY (`tp_userId`),
  ADD KEY `tp_status` (`user_status`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tp_account_status`
--
ALTER TABLE `tp_account_status`
  MODIFY `tp_status_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tp_users`
--
ALTER TABLE `tp_users`
  ADD CONSTRAINT `tp_status` FOREIGN KEY (`user_status`) REFERENCES `tp_account_status` (`tp_status_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
