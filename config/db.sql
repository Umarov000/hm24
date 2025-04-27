-- Active: 1745317106640@@127.0.0.1@3306@rent_stadium

CREATE DATABASE rent_stadium

SHOW DATABASES


SHOW TABLES

DROP TABLE users


CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `role` ENUM('owner', 'customer', 'admin') NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255),
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(15) NOT NULL
);

CREATE TABLE `stadium`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(50),
    `location` VARCHAR(50) NOT NULL,
    `description` TEXT,
    `price` DECIMAL(15,2),
    `owner_id` INT NOT NULL
);

DROP Table booking


CREATE TABLE `booking`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `stadion_id` INT UNSIGNED NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `booking_date` DATE NOT NULL,
    `start_time` VARCHAR(15) NOT NULL,
    `end_time` VARCHAR(15) NOT NULL,
    `total_price` DECIMAL(15,2) NOT NULL,
    `status` ENUM('PENDING', 'CANCELLED', 'CONFIRMED','PAID') NOT NULL 
);

SELECT * FROM booking

SHOW TABLES

CREATE TABLE `payment`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `booking_id` BIGINT UNSIGNED NOT NULL,
    `amount` DECIMAL(15,2) NOT NULL,
    `payment_time` DATETIME NOT NULL,
    `payment_method` ENUM('CARD', 'CASH', 'ONLINE') NOT NULL
);



CREATE TABLE `review`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `stadion_id` INT UNSIGNED NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `rating` SMALLINT NOT NULL ,
    `comment` VARCHAR(255) NOT NULL
);


CREATE TABLE `images`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `stadion_id` INT UNSIGNED NOT NULL,
    `image_url` VARCHAR(255) NOT NULL
);


SHOW TABLES

SELECT * FROM users


INSERT INTO users (`role`, first_name, last_name, email, password, `phone`) VALUES
('owner', 'Ali', 'Karimov', 'ali.karimov@example.com', 'pass123Ali', '998901234567'),
('customer', 'Laylo', 'Yusupova', 'laylo.yusupova@example.com', 'pass456Lay', '998911234567'),
('admin', 'Jasur', 'Ismoilov', 'jasur.ismoilov@example.com', 'adminPass', '998931112233'),
('customer', 'Malika', 'Toshpulatova', 'malika.tosh@example.com', 'Malika2024!', '998901112233'),
('owner', 'Bobur', 'Rasulov', 'bobur.rasulov@example.com', 'Bobur@321', '998939876543'),
('admin', 'Dilnoza', 'Bekmurodova', 'dilnoza.bek@example.com', 'D!lnoza2024', '998998765432'),
('customer', 'Sardor', 'Nazarov', 'sardor.nazarov@example.com', 'sardor_456', '998977654321'),
('owner', 'Zilola', 'Shukurova', 'zilola.shukurova@example.com', 'zilolaPass1', '998901199887'),
('admin', 'Shahboz', 'Jalilov', 'shahboz.jalilov@example.com', 'shahbozPass', '998931100221'),
('customer', 'Nilufar', 'Soliyeva', 'nilufar.soliyeva@example.com', 'nilufar123', '998911100223');



INSERT INTO `stadium` (`name`, `address`, `location`, `description`, `price`, `owner_id`) VALUES 
    ('Qarshi National Stadium', 'Qarshi, Khamza st', 'Qarshi', 'Home of the local football team, a 20,000-seat stadium.', 120000.00, 4), 
    ('Andijan Arena', 'Andijan, Yunusabad st', 'Andijan', 'A small but modern stadium in Andijan.', 100000.00, 5), 
    ('Tashkent Olympic Stadium', 'Tashkent, Mirzo Ulugbek st', 'Tashkent', 'A large multi-purpose stadium, venue for national and international sports events.', 300000.00, 6), 
    ('Shahrisabz Arena', 'Shahrisabz, Uzbek Mahalla', 'Shahrisabz', 'A small stadium built to accommodate regional football matches.', 85000.00, 7), 
    ('Bukhara Football Park', 'Bukhara, Amir Timur st', 'Bukhara', 'A modern sports complex with football and athletics facilities.', 120000.00, 8), 
    ('Ferghana Valley Stadium', 'Ferghana, Gorkiy st', 'Ferghana', 'Home of Ferghana FC, with seating for 18,000 spectators.', 95000.00, 9), 
    ('Namangan Arena', 'Namangan, Alisher Navoi st', 'Namangan', 'A 15,000-seat stadium that hosts football matches and concerts.', 110000.00, 10), 
    ('Kokand Sports Center', 'Kokand, Tashkent Rd', 'Kokand', 'A newly built stadium in Kokand for both football and athletics events.', 105000.00, 11), 
    ('Termez Sports Complex', 'Termez, Dustlik st', 'Termez', 'A multi-use stadium hosting local and international sports tournaments.', 80000.00, 12), 
    ('Tashkent Central Stadium', 'Tashkent, Central Park', 'Tashkent', 'A national stadium, home of the national football team and major events.', 350000.00, 13), 
    ('Jizzakh Stadium', 'Jizzakh, Kichik Qo‘rg‘on st', 'Jizzakh', 'A regional stadium with a capacity of 12,000, used for local sports events.', 60000.00, 14)
    



INSERT INTO `booking` (`stadion_id`, `user_id`, `booking_date`, `start_time`, `end_time`, `total_price`, `status`) VALUES 
    (2, 102, '2025-04-02', '14:00', '16:00', 18000.00, 'PENDING'), 
    (3, 103, '2025-04-03', '16:00', '18:00', 15000.00, 'PAID'), 
    (4, 104, '2025-04-04', '18:00', '20:00', 12000.00, 'CANCELLED'), 
    (5, 105, '2025-04-05', '20:00', '22:00', 10000.00, 'PENDING'), 
    (6, 106, '2025-04-06', '08:00', '10:00', 30000.00, 'CONFIRMED'), 
    (7, 107, '2025-04-07', '12:00', '14:00', 8500.00, 'PAID'), 
    (8, 108, '2025-04-08', '14:00', '16:00', 12000.00, 'CONFIRMED'), 
    (9, 109, '2025-04-09', '10:00', '12:00', 9500.00, 'CANCELLED'), 
    (10, 110, '2025-04-10', '16:00', '18:00', 11000.00, 'PAID')



INSERT INTO `payment` (booking_id, amount, payment_time, payment_method) 
VALUES 
(2, 18000.00, '2025-04-02 14:30:00', 'CASH'),
(3, 15000.00, '2025-04-03 16:45:00', 'ONLINE'),
(4, 12000.00, '2025-04-04 18:15:00', 'CARD'),
(5, 10000.00, '2025-04-05 20:00:00', 'CASH'),
(6, 33000.00, '2025-04-07 10:00:00', 'CARD')


INSERT INTO `review` (`stadion_id`, `user_id`, `rating`, `comment`) VALUES
(1, 101, 5, 'Amazing stadium, great facilities and atmosphere.'),
(2, 102, 4, 'Very nice stadium, but could use more seating in some areas.'),
(3, 103, 3, 'Average experience, the seats were uncomfortable.'),
(4, 104, 2, 'The stadium needs better maintenance and organization.'),
(5, 105, 4, 'Great location and decent view, but parking is an issue.'),
(6, 106, 5, 'Best stadium I have visited, excellent services and staff.'),
(7, 107, 3, 'Good place for local matches, but lacks international standards.'),
(8, 108, 4, 'Nice stadium, but food options were limited.'),
(9, 109, 1, 'Very disappointed with the stadium. Seats were dirty and uncomfortable.'),
(10, 110, 5, 'Incredible experience, fantastic atmosphere and amazing view of the field.');


INSERT INTO `images` (`stadion_id`, `image_url`) VALUES

(1, 'http://example.com/images/stadium1_2.jpg'),
(2, 'http://example.com/images/stadium2_1.jpg'),
(2, 'http://example.com/images/stadium2_2.jpg'),
(3, 'http://example.com/images/stadium3_1.jpg'),
(3, 'http://example.com/images/stadium3_2.jpg');
