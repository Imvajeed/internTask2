-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2024 at 10:34 AM
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
-- Database: `products_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_image_url` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `product_discount_price` decimal(10,2) DEFAULT NULL,
  `product_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_image_url`, `product_name`, `product_price`, `product_discount_price`, `product_description`) VALUES
(1, 'http://example.com/product1.jpg', 'Product 1', 19.99, 15.99, 'Description of product 1.'),
(2, 'http://example.com/product2.jpg', 'Product 2', 29.99, 25.99, 'Description of product 2.'),
(3, 'http://example.com/product3.jpg', 'Product 3', 39.99, 35.99, 'Description of product 3.'),
(4, 'http://example.com/product4.jpg', 'Product 4', 49.99, 45.99, 'Description of product 4.'),
(5, 'http://example.com/product5.jpg', 'Product 5', 59.99, 55.99, 'Description of product 5.'),
(6, 'http://example.com/product6.jpg', 'Product 6', 69.99, 65.99, 'Description of product 6.'),
(7, 'http://example.com/product7.jpg', 'Product 7', 79.99, 75.99, 'Description of product 7.'),
(8, 'http://example.com/product8.jpg', 'Product 8', 89.99, 85.99, 'Description of product 8.'),
(9, 'http://example.com/product9.jpg', 'Product 9', 99.99, 95.99, 'Description of product 9.'),
(10, 'http://example.com/product10.jpg', 'Product 10', 109.99, 105.99, 'Description of product 10.'),
(11, 'http://example.com/product11.jpg', 'Product 11', 119.99, 115.99, 'Description of product 11.'),
(12, 'http://example.com/product12.jpg', 'Product 12', 129.99, 125.99, 'Description of product 12.'),
(13, 'http://example.com/product13.jpg', 'Product 13', 139.99, 135.99, 'Description of product 13.'),
(14, 'http://example.com/product14.jpg', 'Product 14', 149.99, 145.99, 'Description of product 14.'),
(15, 'http://example.com/product15.jpg', 'Product 15', 159.99, 155.99, 'Description of product 15.'),
(16, 'http://example.com/product16.jpg', 'Product 16', 169.99, 165.99, 'Description of product 16.'),
(17, 'http://example.com/product17.jpg', 'Product 17', 179.99, 175.99, 'Description of product 17.'),
(18, 'http://example.com/product18.jpg', 'Product 18', 189.99, 185.99, 'Description of product 18.'),
(19, 'http://example.com/product19.jpg', 'Product 19', 199.99, 195.99, 'Description of product 19.'),
(20, 'http://example.com/product20.jpg', 'Product 20', 209.99, 205.99, 'Description of product 20.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
