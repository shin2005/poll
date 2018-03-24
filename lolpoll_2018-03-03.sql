# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: www.lolpoll.world (MySQL 5.5.56-MariaDB)
# Database: lolpoll
# Generation Time: 2018-03-03 06:27:06 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table poll_options
# ------------------------------------------------------------

DROP TABLE IF EXISTS `poll_options`;

CREATE TABLE `poll_options` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pollId` int(11) DEFAULT NULL,
  `optionNumber` int(11) DEFAULT NULL,
  `label` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `poll_options` WRITE;
/*!40000 ALTER TABLE `poll_options` DISABLE KEYS */;

INSERT INTO `poll_options` (`id`, `pollId`, `optionNumber`, `label`)
VALUES
	(1,1,1,'Alexander'),
	(2,1,2,'Napoleon'),
	(3,1,3,'Sejong'),
	(4,1,4,'Mario'),
	(5,2,1,'Barcelona'),
	(6,2,2,'Real Madrid'),
	(7,2,3,'Manchester United'),
	(8,3,1,'Greece'),
	(9,3,2,'Japan'),
	(10,3,3,'England'),
	(11,3,4,'Thailand'),
	(12,3,5,'Mexico');

/*!40000 ALTER TABLE `poll_options` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table polls
# ------------------------------------------------------------

DROP TABLE IF EXISTS `polls`;

CREATE TABLE `polls` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `polls` WRITE;
/*!40000 ALTER TABLE `polls` DISABLE KEYS */;

INSERT INTO `polls` (`id`, `title`)
VALUES
	(1,'Who is your favorite historical figure?'),
	(2,'What is your favorite soccer team?'),
	(3,'What is your favorite travel spot?');

/*!40000 ALTER TABLE `polls` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(300) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `username`, `password`)
VALUES
	(1,'mikey','sha1$81934513$1$916480fed7073230839c1c588b656a831a0985dc'),
	(12,'jerry','sha1$80d72c14$1$46494b66277231c6a4864634fb01f8682ddb3f53'),
	(19,'Hayst Lee','sha1$937b6843$1$4d96e48e045471021b3b6bf58d3abe7ee1d9827c'),
	(20,'sonic','sha1$09b4f3db$1$fd84f239dfecaf5ea07e6fa49b3afd99c0d12510'),
	(21,'Jinny','sha1$a32e2fd2$1$4b7a59f1301d89d7e6d06b9c093557d304c89831'),
	(22,'kpark3.5','sha1$57dc1cf8$1$eb6ef3ca49aa4e85af662348adcbdefd83cb8395'),
	(23,'WorldSaves','sha1$7b03d1cf$1$2ce58f1d1bb2b1882d0e765dd4054531e83d26e7');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table votes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `votes`;

CREATE TABLE `votes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `optionId` int(11) DEFAULT NULL,
  `pollId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;

INSERT INTO `votes` (`id`, `userId`, `optionId`, `pollId`)
VALUES
	(1,1,2,1),
	(2,8,3,1),
	(3,9,4,1),
	(4,19,3,1);

/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
