-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: ספטמבר 23, 2020 בזמן 02:38 PM
-- גרסת שרת: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meanapp`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `Whom` varchar(255) DEFAULT NULL,
  `DrivingLicenseNumber` int(11) DEFAULT NULL,
  `Last_Date_To_Pay` varchar(255) DEFAULT NULL,
  `Car_Number` int(11) DEFAULT NULL,
  `ID_Number` int(11) DEFAULT NULL,
  `First_Name` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Street` varchar(255) DEFAULT NULL,
  `Home_Number` int(11) DEFAULT NULL,
  `Phone_Number` int(11) DEFAULT NULL,
  `EMail` varchar(255) DEFAULT NULL,
  `Plate_Type` varchar(255) DEFAULT NULL,
  `Car_Manufacturer` varchar(255) DEFAULT NULL,
  `Car_Type` varchar(255) DEFAULT NULL,
  `Car_Color` varchar(255) DEFAULT NULL,
  `Date` varchar(255) DEFAULT NULL,
  `Hour` varchar(255) DEFAULT NULL,
  `Offense_Place` varchar(255) DEFAULT NULL,
  `Offense_Place_Description` varchar(255) DEFAULT NULL,
  `Offense_Description` varchar(255) DEFAULT NULL,
  `Points` int(11) DEFAULT NULL,
  `Offense_Number` int(11) DEFAULT NULL,
  `Speedometer_Type` varchar(255) DEFAULT NULL,
  `Report_Amount` int(11) DEFAULT NULL,
  `Report_Amount_inWords` varchar(255) DEFAULT NULL,
  `First_Witness_ID` int(11) DEFAULT NULL,
  `First_Witness_Full_Name` varchar(255) DEFAULT NULL,
  `Second_Witness_ID` int(11) DEFAULT NULL,
  `Second_Witness_Full_Name` varchar(255) DEFAULT NULL,
  `Full_Description` varchar(255) DEFAULT NULL,
  `Kmh` int(11) DEFAULT NULL,
  `Distance` int(11) DEFAULT NULL,
  `GivenNotGiven_Continuation_Of_The_Case` varchar(255) DEFAULT NULL,
  `Citizen_Testimony` varchar(255) DEFAULT NULL,
  `Citizen_Date_Confirmed` varchar(255) DEFAULT NULL,
  `Citizen_Signture` varchar(255) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `Rank_first_last_name_officer` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- הוצאת מידע עבור טבלה `products`
--

INSERT INTO `products` (`id`, `Whom`, `DrivingLicenseNumber`, `Last_Date_To_Pay`, `Car_Number`, `ID_Number`, `First_Name`, `Last_Name`, `City`, `Street`, `Home_Number`, `Phone_Number`, `EMail`, `Plate_Type`, `Car_Manufacturer`, `Car_Type`, `Car_Color`, `Date`, `Hour`, `Offense_Place`, `Offense_Place_Description`, `Offense_Description`, `Points`, `Offense_Number`, `Speedometer_Type`, `Report_Amount`, `Report_Amount_inWords`, `First_Witness_ID`, `First_Witness_Full_Name`, `Second_Witness_ID`, `Second_Witness_Full_Name`, `Full_Description`, `Kmh`, `Distance`, `GivenNotGiven_Continuation_Of_The_Case`, `Citizen_Testimony`, `Citizen_Date_Confirmed`, `Citizen_Signture`, `is_active`, `created_at`, `Rank_first_last_name_officer`) VALUES
(23, 'הנהג', 1233455, '2020-09-30', 5655555, 323747655, 'רפאל', 'כהן', 'ירוחם', 'שוהם', 5, 53444565, '', 'il', 'מרסדס', 'פרטי', 'ירוק', '2020-09-03', '13:58', 'בצומת כבישים', 'הנל נראה שהוא חוצה רמזור בצבע אדום תוך סיכון עוברי דרך', 'התעלמות מרמזור אדום ונהיגה בקלות ראש', 12, 9211, '5000 IL', 1000, 'אלף שקלים', 0, '', 0, '', 'הנהג היה לבוש בחולצה בצבע לבן ', 100, 80, 'מסרתי העתק המשך נסיבות המקרה לנהג', 'מצטער פעם הבאה הסתכל יותר טוב', '2020-09-16', 'רפאל כהן', 1, '2020-09-09 01:00:28', 'רס\"ב בכור שמחייב'),
(24, 'הנהג', 501983, '', 0, 312886565, 'תמיר', 'יוסף', 'יבנה', 'בן גוריון', 29, 50699838, '', 'cd', '', '', '', '2020-09-17', '', '', '', '', 0, 0, '', 0, '', 0, '', 0, '', '', 0, 0, '', '', '', '', 1, '2020-09-09 03:33:42', 'רס\"ב אמנון לוי'),
(25, 'נוסע ברכב', 1234567, '2020-10-28', 7877993, 90846789, 'אהרון', 'לוי', 'תל אביב', 'זבוטינסקי', 89, 52334884, '', 'il', 'ניסן', 'פרטי', 'שחור', '2020-09-14', '13:28', 'ברחוב', 'הנל נראה כשהוא לא נתן זכות קדימה להולכי רגל', 'אי מתן זכות קדימה', 6, 8909, 'LTI 20-20', 500, 'חמש מאות שקלים', 0, '', 0, '', 'הנל היה עם נעליים שחורות ושרשרת מזהב', 60, 120, 'אין המשך נסיבות המקרה', 'לא אכפת לי לקבל דוח', '2020-09-13', '', 1, '2020-09-13 12:30:50', 'רס\"ר תמיר יוסף'),
(26, 'הנהג', 5667665, '2020-10-29', 7577577, 453555533, 'איתמר', 'יוספוב', 'בת ים', 'ארלוזרוב', 89, 58688484, '', 'cd', 'יגואר', 'פרטי', 'כחול', '2020-09-15', '15:06', 'ברחוב', 'הנל חנה בחניית נכים ברחוב הלל יפה ', 'חניה בניגוד לתמרור', 8, 4545, 'דוח מכשור', 800, 'שמונה מאות שקלים', 0, '', 0, '', 'הנל נראה יוצא מרכבו כאשר חנה בחניית נכים מבלי שהיה לו תו נכה', 0, 80, 'מסרתי העתק המשך נסיבות המקרה לנהג', 'מצטער זה היה רק לדקה', '2020-09-14', 'איתמר', 1, '2020-09-14 02:08:56', 'רס\"ר מור בסן');

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `authorization` varchar(6) DEFAULT NULL,
  `rank` varchar(10) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- הוצאת מידע עבור טבלה `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`, `authorization`, `rank`, `is_active`) VALUES
(0, 'bec', '$2b$10$Dc4.H5FT5w33H5Xc2fuU/eHQj.oQCiHl6e93P5CxbRKwLJBqWZwLK', 'בכור', 'שמחייב', 'Admin', 'רס\"ר', 1),
(0, 'tamir', '$2b$10$cN8EeybGD2od1IHL8494CeaTq.hchNHZzjT.pUi/o3A/vgjYcFIJ2', 'תמיר', 'יוסף', 'User', 'רס\"ל', 1),
(0, 'mor', '$2b$10$qP5nSd8vF0LV.tKq1umHu.w.Wf.3R2M6.d/TMdH5s5hRbobevbIhS', 'מור', 'בסן', 'Admin', 'נצמ', 1),
(0, 'gal', '$2b$10$jGisscNQiJI.mlFQcvyWCOzrbPlQ89ZIKEHRyRVJeunyQqD4/I9Oq', 'גל', 'שנער', 'User', 'רסב', 1),
(0, 'bechor', '$2b$10$I.2i0zVpP25vVkvr8jS2/Od2LmCxYB4ULqjtfXU3ZZihmUscF/dhW', 'בכור', 'שמחייב', 'User', 'רס\"ר', 1);

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `products`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
