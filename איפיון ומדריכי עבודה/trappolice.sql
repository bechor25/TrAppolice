-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: יוני 02, 2020 בזמן 03:01 PM
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
-- Database: `trappolice`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `citizen`
--

CREATE TABLE `citizen` (
  `ID_Number` int(10) NOT NULL,
  `First_Name` varchar(10) NOT NULL,
  `Last_Name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `cop`
--

CREATE TABLE `cop` (
  `Cop_ID` int(6) NOT NULL,
  `Password` varchar(12) DEFAULT NULL,
  `First_Name` varchar(10) DEFAULT NULL,
  `Last_Name` varchar(10) DEFAULT NULL,
  `Rank` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `police station server`
--

CREATE TABLE `police station server` (
  `Citizen_ID` int(11) NOT NULL,
  `Citizen_FullName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `report`
--

CREATE TABLE `report` (
  `Whom` varchar(10) NOT NULL,
  `DrivingLicenseNumber` int(10) NOT NULL,
  `ID_Number` int(10) NOT NULL,
  `First_Name` varchar(10) NOT NULL,
  `Last_Name` varchar(10) NOT NULL,
  `City` varchar(10) NOT NULL,
  `Street` varchar(10) NOT NULL,
  `Home_Number` int(3) NOT NULL,
  `Phone_Number` int(10) NOT NULL,
  `E-Mail` varchar(15) NOT NULL,
  `Plate_Type` varchar(20) NOT NULL,
  `Car_Manufacturer` varchar(10) NOT NULL,
  `Car_Type` varchar(10) NOT NULL,
  `Car_Color` varchar(10) NOT NULL,
  `Car_Number` int(9) NOT NULL,
  `Date` varchar(12) NOT NULL,
  `Hour` varchar(12) NOT NULL,
  `Offense_Place` varchar(30) NOT NULL,
  `Offense_Place_Description` varchar(50) NOT NULL,
  `Offense_Description` varchar(50) NOT NULL,
  `Points` int(2) NOT NULL,
  `Offense_Number` int(5) NOT NULL,
  `Speedometer_Type` varchar(10) NOT NULL,
  `Report_Amount` int(5) NOT NULL,
  `Report_Amount_inWords` varchar(20) NOT NULL,
  `Last_Date_To_Pay` varchar(12) NOT NULL,
  `First_Witness_ID` int(10) NOT NULL,
  `First_Witness_Full_Name` varchar(20) NOT NULL,
  `Second_Witness_ID` int(10) NOT NULL,
  `Second_Witness_Full_Name` varchar(20) NOT NULL,
  `Full_Description` varchar(50) NOT NULL,
  `Kmh` int(3) NOT NULL,
  `Distance` int(3) NOT NULL,
  `Given/NotGiven_Continuation_Of_The_Case` varchar(30) NOT NULL,
  `Citizen_Testimony` varchar(30) NOT NULL,
  `Citizen_Date_Confirmed` varchar(12) NOT NULL,
  `Citizen_Signture` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `traffic law`
--

CREATE TABLE `traffic law` (
  `Search_By_Word` varchar(50) NOT NULL,
  `Points` int(2) NOT NULL,
  `Offense_Number` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `citizen`
--
ALTER TABLE `citizen`
  ADD PRIMARY KEY (`ID_Number`);

--
-- אינדקסים לטבלה `cop`
--
ALTER TABLE `cop`
  ADD PRIMARY KEY (`Cop_ID`);

--
-- אינדקסים לטבלה `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`ID_Number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `citizen`
--
ALTER TABLE `citizen`
  MODIFY `ID_Number` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
