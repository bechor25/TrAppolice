-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: אוקטובר 06, 2020 בזמן 10:05 PM
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
-- מבנה טבלה עבור טבלה `contact`
--

CREATE TABLE `contact` (
  `Type_Contact` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `Contact_email` varchar(255) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- הוצאת מידע עבור טבלה `contact`
--

INSERT INTO `contact` (`Type_Contact`, `description`, `Contact_email`, `created_at`) VALUES
('דיווח על תקלה', 'היי יש תקלה במערכת', 'bechor21@gmail.com', '2020-10-01'),
('פניה למפתחים', 'היי אשמח להציע לכם שידרוג של המערכת', 'daniel@gmail.com', '2020-10-01'),
('פניה למפתחים', 'היי אשמח להציע לכם שידרוג של המערכת', 'daniel@gmail.com', '2020-10-01'),
('דיווח על תקלה', 'מסך אודות לא עובד', 'bechor@gamil.com', '2020-10-01'),
('שיפור המערכת', 'תשפרו את המערכת', 'gal@gmail.com', '2020-10-04');

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
  `is_active` tinyint(4) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `Rank_first_last_name_officer` varchar(50) NOT NULL,
  `Citizen_Signture` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- הוצאת מידע עבור טבלה `products`
--

INSERT INTO `products` (`id`, `Whom`, `DrivingLicenseNumber`, `Last_Date_To_Pay`, `Car_Number`, `ID_Number`, `First_Name`, `Last_Name`, `City`, `Street`, `Home_Number`, `Phone_Number`, `EMail`, `Plate_Type`, `Car_Manufacturer`, `Car_Type`, `Car_Color`, `Date`, `Hour`, `Offense_Place`, `Offense_Place_Description`, `Offense_Description`, `Points`, `Offense_Number`, `Speedometer_Type`, `Report_Amount`, `Report_Amount_inWords`, `First_Witness_ID`, `First_Witness_Full_Name`, `Second_Witness_ID`, `Second_Witness_Full_Name`, `Full_Description`, `Kmh`, `Distance`, `GivenNotGiven_Continuation_Of_The_Case`, `Citizen_Testimony`, `Citizen_Date_Confirmed`, `is_active`, `created_at`, `Rank_first_last_name_officer`, `Citizen_Signture`) VALUES
(23, 'הנהג', 1233455, '2020-09-30', 5655555, 323747655, 'רפאל', 'כהן', 'ירוחם', 'שוהם', 5, 53444565, '', 'il', 'מרסדס', 'פרטי', 'ירוק', '2020-09-03', '13:58', 'בצומת כבישים', 'הנל נראה שהוא חוצה רמזור בצבע אדום תוך סיכון עוברי דרך', 'התעלמות מרמזור אדום ונהיגה בקלות ראש', 12, 9211, '5000 IL', 1000, 'אלף שקלים', 0, '', 0, '', 'הנהג היה לבוש בחולצה בצבע לבן ', 100, 80, 'מסרתי העתק המשך נסיבות המקרה לנהג', 'מצטער פעם הבאה הסתכל יותר טוב', '2020-09-16', 1, '2020-09-09 01:00:28', 'פקד בכור שמחייב', ''),
(24, 'הנהג', 501983, '', 0, 312886565, 'תמיר', 'יוסף', 'יבנה', 'בן גוריון', 29, 50699838, '', 'cd', '', '', '', '2020-09-17', '', '', '', '', 0, 0, '', 0, '', 0, '', 0, '', '', 0, 0, '', '', '', 1, '2020-09-09 03:33:42', 'פקד תמיר יוסף', ''),
(25, 'נוסע ברכב', 1234567, '2020-10-28', 7877993, 90846789, 'אהרון', 'לוי', 'תל אביב', 'זבוטינסקי', 89, 52334884, '', 'il', 'ניסן', 'פרטי', 'שחור', '2020-09-14', '13:28', 'ברחוב', 'הנל נראה כשהוא לא נתן זכות קדימה להולכי רגל', 'אי מתן זכות קדימה', 6, 8909, 'LTI 20-20', 500, 'חמש מאות שקלים', 0, '', 0, '', 'הנל היה עם נעליים שחורות ושרשרת מזהב', 60, 120, 'אין המשך נסיבות המקרה', 'לא אכפת לי לקבל דוח', '2020-09-13', 1, '2020-09-13 12:30:50', 'פקד תמיר יוסף', ''),
(26, 'הנהג', 5667665, '2020-10-29', 7577577, 453555533, 'איתמר', 'יוספוב', 'בת ים', 'ארלוזרוב', 89, 58688484, '', 'cd', 'יגואר', 'פרטי', 'כחול', '2020-09-15', '15:06', 'ברחוב', 'הנל חנה בחניית נכים ברחוב הלל יפה ', 'חניה בניגוד לתמרור', 8, 4545, 'דוח מכשור', 800, 'שמונה מאות שקלים', 0, '', 0, '', 'הנל נראה יוצא מרכבו כאשר חנה בחניית נכים מבלי שהיה לו תו נכה', 0, 80, 'מסרתי העתק המשך נסיבות המקרה לנהג', 'מצטער זה היה רק לדקה', '2020-09-14', 1, '2020-09-14 02:08:56', 'פקד מור בסן', ''),
(70, 'הנהג', 1234567, '2020-11-30', 5466565, 123456778, 'ישראל', 'ישראלי', 'אור יהודה', 'בן גוריון', 54, 542366747, '', 'il', 'מאזדה', 'פרטי', 'לבן', '2020-09-30', '15:52', 'בצומת הרחובות', 'הנהג נסע בפרעות תוך סיכון הולכי רגל', '3456 וסעיף 7878', 10, 7878, 'LTI 20-20', 1000, 'אלף שקלים', 123456, 'אברהם אברהמוב', 0, '', 'הנהג נראה שהוא מחזיק בידו טלפון שחור', 100, 100, 'אין המשך נסיבות המקרה', 'מצטער לא אעשה זאת שוב', '2020-09-30', 1, '2020-09-30 03:54:28', 'פקד בכור שמחייב', 'data:image/png;base64,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'),
(71, '', 0, '', 0, 0, '', '', '', '', 0, 0, '', '', '', '', '', '', '', '', '', '', 0, 0, '', 0, '', 0, '', 0, '', '', 0, 0, '', '', '', 1, '2020-10-06 04:30:14', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAACnklEQVR4Xu3VsRHAMAzEsHj/pTOBXbB9pFchyLycz0eAwFXgsCFA4C4gEK+DwENAIJ4HAYF4AwSagD9IczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiIBARg5tzSYgkOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiIBARg5tzSYgkOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpE4Af1gABlH0hlGgAAAABJRU5ErkJggg=='),
(72, 'הנהג', 9884648, '2021-01-06', 33343444, 655737552, 'אייל ', 'שנער', 'שקד', 'הזית', 357, 522565537, 'eyal@gmail.com', 'il', 'סיאט', 'פרטי', 'שחור', '2020-10-06', '21:31', 'ברחוב', 'ברחוב התמר מסלול חד סטרי', '6191', 10, 6191, 'LTI 20-20', 1000, 'אלף שקלים', 0, '', 0, '', 'הנהג נראה שהוא נוהג ללא יידים', 0, 0, '', '', '', 1, '2020-10-06 09:33:20', 'פקד בכור שמחייב', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAI40lEQVR4Xu2dd6g0RRbFf/5lQIxrFlTMillRVFDBsKwZjCAYEAVBxRwxIgYUMS2r6LorCmLALCZMYMScEwYU/UPMAVFROViNTds9M91TM2+66hQ08977qm7XPbfO1K26t+qbBxcjYAQaEZjH2BgBI9CMgAni0WEEBiBggnh4GAETxGPACHRDwDNIN9zcKhMETJBMDG01uyFggnTDza0yQcAEycTQVrMbAiZIN9zcKhMETJBMDG01uyFggnTDza0yQcAEycTQVrMbAiZIN9zcKhMETJBMDG01uyFggnTDza0yQcAEycTQVrMbAiZIN9zcKhMETJBMDN2g5orh7/p8NG8o6rU3QfIZFUsAPwLHAfp5K2DtkvrfAmcBF+UDyXBNTZDhGPW1hmaFTYCNgQ2BjYD5gfmGKHQVcGhflY7dbxMkNqJzK28VYAPgn8AuwD8auiN36kPgTWAB4PRKvTOBM+ZWldl4uwkyG3YYtxdXAltUXKZC5hPAs8B9wM/hj9X1xlrAdWGWUZVPgzyRKOtigvTP/FuH9YM+1wCWrqjwFPA28ACgn0cd5KuFdoU4zyKACTLbBFkEWA8QGYqnrsdaNzwJ/H9MdeRWFe6WyLX5mPJ639wEmT0Tigi7BkKs39C9j8K27O2AnljlMOCKkrCVWsxAsfowU3JMkLk3h3abCkLsNqA7jwUyaP3w0oS6rS3eo0uy9wBundC7eiHWBJkbM2lmUBziAGCUWUKk+HoKXd0JuKv0np2Bu6fw3pl9hQkyPdNopjgS0CxRRLCrb5/GLDFIY7l3j5Qq7AXcPD2IZu9NJsjkbKJo9Y7Av0LATrtN1SDdN5W1xDRmiUEanwecUKqwe+Q1zuTQnpBkEyQ+sPoW3jM8Ikm1TGqBHUMTzR7qf1GUivJGDMF9lWGCxLGcBtVmIUWjzn36AHgYuH6GkwIvBI4pwaH4iXaxsi4myHjmFxlOAg5pEPM6oIH3v/FeM/HW0kMkLhcHCh0o7DTwFLzbP6RiyJWqKwq4/Rf4uNMbpttoMUBELkfkHwK2a9GN7UNQUcFKRfCTKZ5BRjeldqCU76Rn2ZpmGlSKaPdt1+fasN1cqPQDcGALPeRengjsADwfsodHR3XGa5oggw2kjNgtw4K7aWtW7tN/gGdm3NbV7m0K7A0cVfmHa4CDR9SlnJqiJorXbDNi215UM0HqzaSzE1pXNK0tlO36TvimHTUZcFYGxPLA8cDhNR0aZd2xcNhsUFAx+TWLCfL3UaLottyOpnIxcDLw06yM+BH7IVdI50TKcY5yU+l155BdNq25bqp5n9xKBRWTKybIXyaVC6VBUpcPJdfhnjCANHP0rei8SNNsKF2GzRzCRkd1lcxYLcm5VWUFTZA/0VAEeT9guZoBoOOnNwI6s92nMsxNlGt4+Qhn0OWKXdqg+FvAmn0CpW1fTZA/3Sm5VdXS17PZcqX0Td+0BV3MGNpcaFo/6RiuzqFosX5Qw6DSjtVpwL1tB12f6udMkEEDSbOGCNKnIn0Uqa+bBaXH+2G2kEs0KH1EO3e63UQEaSpKiZc7mnzJmSC/11hXW7X6xuxT/tG5wD4DMoRFiKtDqstnDSNaO1K6/UQzT13+WNHsMuCGHm5pdyZyrgTRTkzVBdE3YvmwUGdQp9BQs4V20uqi3b+ECxpeGHIziUihgKeO2NYFPgs15EJ9EWaMF6eg20y9IkeCXBB2ZMqGkD+u6PG4ZSHgFGBB4P6w6zWuzKJ9sU2rXbbVa4R+AijI13Rdj9rrYga5TvpyGDRTSLxmnkuc7h7LfP2QozyqVwEFy4oybIuzjWZKt9D1OipaxB47Rvau+qrThlooK5q/QkNHFIMonnIVEaC46GEUQqitcrJuCbGOPrmZbWzUqm5uM8ipwNklhN4DVm2F2ODKZYKopgauotajRNs1KywTvuX3DZ9Nro/OpN9RGcgrA3rOD10UoRYdoltBiMcBuWRzfWAroiniiMqNINUt3dhHSuViaW1QjlbrTPe7wd0SURYH1gkZwbLir8CSwLoDTKoEQl3Do7iDXERlCevWROU96cSiAnnlg05Noj4H/h2yAJ4eY3aLM/p6ICU3guhKmyIaPKkDQRqoCsCVL4buMhSUHfxVGNDPhXWHtnB1DLYublN+hxbq3wc3T5H/l0PumG9wb2mJ3AhS3r3SluURLfEatfoowbpCVpH4qDXDd8Bt4SYRzW5KDNS5de04KTLeVCRDawZdM6pS3G2lGcNlDARyI0g1EVGL6OK6f7kpeuSHa2COU7TA1qNBrxQWrS3kRokAr4WDajqgpJlBsQldr6Ob15dq8VINfq1xNCs86PVDC+RaVM2NIIJGg2nbgNFvYVdL64BB39AtII1aVS6WHhUtpHXhgxbWIofdpahQ1wvLkSBNKdsFQkpjH/Z/aLQxjbZ7C/LJFdKMUfyudVCxw6UgnBbhSgkRYVVMgjZIT6BujgQRjLru/5yApxawGoivAF9WMJabVBS5X+Xfq+aQa1Zsk+pTdYvBr7bzVm5Pn4A5LTI2ArkSJDaOlpcoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQMEHi4GgpiSJggiRqWKsVBwETJA6OlpIoAiZIooa1WnEQ+ANYLSR00XGiDQAAAABJRU5ErkJggg==');

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
  `is_active` tinyint(1) NOT NULL,
  `id_rank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- הוצאת מידע עבור טבלה `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`, `authorization`, `rank`, `is_active`, `id_rank`) VALUES
(0, 'bechor', '$2b$10$Dc4.H5FT5w33H5Xc2fuU/eHQj.oQCiHl6e93P5CxbRKwLJBqWZwLK', 'בכור', 'שמחייב', 'Admin', 'פקד', 1, 676654),
(0, 'tamir', '$2b$10$cN8EeybGD2od1IHL8494CeaTq.hchNHZzjT.pUi/o3A/vgjYcFIJ2', 'תמיר', 'יוסף', 'Admin', 'פקד', 1, 134568),
(0, 'mor', '$2b$10$qP5nSd8vF0LV.tKq1umHu.w.Wf.3R2M6.d/TMdH5s5hRbobevbIhS', 'מור', 'בסן', 'Admin', 'פקד', 1, 485847),
(0, 'amnon', '$2b$10$6OvrKsiRZvObP3CAMErA2.0v2vQMdAGfBfih82OumFlYUNx3d4cIq', 'אמנון', 'כהן', 'User', 'רסר', 1, 987474);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
