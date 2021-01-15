SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `budget` (
  `id` bigint(20) NOT NULL,
  `movement_name` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `qty` int(11) NOT NULL,
  `type` enum('in','out') COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `budget` (`id`, `movement_name`, `qty`, `type`, `created_at`, `updated_at`, `deleted_at`) VALUES
(13, 'sueldo', 10000, 'in', '2021-01-15 03:37:39', '2021-01-15 03:37:39', '2021-01-15 17:20:39'),
(14, 'retiro de dinero', 100, 'out', '2021-01-15 03:53:57', '2021-01-15 03:53:57', '2021-01-15 04:25:05'),
(15, 'sueldo', 123456, 'in', '2021-01-15 17:20:54', '2021-01-15 17:20:54', '2021-01-15 18:16:50'),
(16, 'Movimiento 2', 122, 'in', '2021-01-15 17:22:06', '2021-01-15 17:22:06', '2021-01-15 17:22:10'),
(17, 'Sueldo nuevo', 200, 'in', '2021-01-15 17:43:31', '2021-01-15 17:43:31', '2021-01-15 18:12:48'),
(18, 'sueldo 3', 1000, 'in', '2021-01-15 17:51:09', '2021-01-15 17:51:09', '2021-01-15 18:09:40'),
(19, 'sueldo nuevo', 2000, 'in', '2021-01-15 18:13:14', '2021-01-15 18:13:14', '2021-01-15 18:14:14'),
(20, 'sueldo nuevo', 2000, 'in', '2021-01-15 18:13:15', '2021-01-15 18:13:15', '2021-01-15 18:13:18'),
(21, 'fede2', 10002, 'in', '2021-01-15 18:15:28', '2021-01-15 20:45:15', '2021-01-15 21:44:33'),
(22, 'retiro dinero', 300, 'out', '2021-01-15 18:16:33', '2021-01-15 18:16:33', '2021-01-15 18:16:48'),
(23, 'ingreso dinero ', 200, 'in', '2021-01-15 18:16:45', '2021-01-15 18:16:45', '2021-01-15 19:57:23'),
(24, 'sueldo nuevo', 500, 'in', '2021-01-15 19:26:18', '2021-01-15 21:33:40', '2021-01-15 21:44:34'),
(25, 'salida de dinero', 18000, 'out', '2021-01-15 19:51:08', '2021-01-15 19:51:08', '2021-01-15 19:54:40'),
(26, 'salida de dinero', 2422, 'out', '2021-01-15 19:51:25', '2021-01-15 19:51:25', '2021-01-15 19:54:35'),
(27, 'otro mov', 15200, 'out', '2021-01-15 19:51:50', '2021-01-15 19:51:50', '2021-01-15 19:54:20'),
(28, 'otro registro ', 30000, 'out', '2021-01-15 19:54:52', '2021-01-15 19:54:52', '2021-01-15 19:54:58'),
(29, 'otro monto', 200, 'out', '2021-01-15 19:57:06', '2021-01-15 19:57:06', '2021-01-15 21:44:34'),
(30, 'otro', 222, 'out', '2021-01-15 19:57:17', '2021-01-15 19:57:17', '2021-01-15 21:44:35'),
(31, 'no se', 100000, 'in', '2021-01-15 19:57:35', '2021-01-15 19:57:35', '2021-01-15 21:44:35'),
(32, 'aa', 100000000, 'in', '2021-01-15 20:04:46', '2021-01-15 20:04:46', '2021-01-15 21:44:36'),
(33, 'fede', 500, 'in', '2021-01-15 20:43:27', '2021-01-15 20:43:27', '2021-01-15 21:44:36'),
(34, 'Nuevo Saldo', 200, 'in', '2021-01-15 21:51:10', '2021-01-15 21:51:10', '2021-01-15 21:51:13');


ALTER TABLE `budget`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `budget`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
