-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: mysql    Database: notes
-- ------------------------------------------------------
-- Server version       8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Note`
--

DROP TABLE IF EXISTS `Note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Note` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Note`
--

LOCK TABLES `Note` WRITE;
/*!40000 ALTER TABLE `Note` DISABLE KEYS */;
INSERT INTO `Note` VALUES ('82bd1c85-592f-4eb4-bb29-866193a1d494','{\"type\": \"doc\", \"content\": [{\"type\": \"heading\", \"attrs\": {\"level\": 1}, \"content\": [{\"text\": \"🚀 Guide\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"blockquote\", \"content\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"Editorn heter Tiptap och här är några saker man kan göra med den:\", \"type\": \"text\"}]}]}, {\"type\": \"paragraph\"}, {\"type\": \"heading\", \"attrs\": {\"level\": 2}, \"content\": [{\"text\": \"Bullet points\", \"type\": \"text\"}]}, {\"type\": \"bulletList\", \"content\": [{\"type\": \"listItem\", \"content\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"Punkt ett.\", \"type\": \"text\"}]}]}, {\"type\": \"listItem\", \"content\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"Punkt två.\", \"type\": \"text\"}]}]}]}, {\"type\": \"paragraph\"}, {\"type\": \"heading\", \"attrs\": {\"level\": 2}, \"content\": [{\"text\": \"Numrerade listor\", \"type\": \"text\"}]}, {\"type\": \"orderedList\", \"attrs\": {\"start\": 1}, \"content\": [{\"type\": \"listItem\", \"content\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"Punkt ett.\", \"type\": \"text\"}]}]}, {\"type\": \"listItem\", \"content\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"Punkt två.\", \"type\": \"text\"}]}]}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"\\\"Italics\\\" som det säkert finns ett svenskt ord för.\", \"type\": \"text\", \"marks\": [{\"type\": \"italic\"}]}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Fet Stil.\", \"type\": \"text\", \"marks\": [{\"type\": \"bold\"}]}]}]}'),('c8b74ad4-c004-4e38-847f-d33a26f28a31','{\"type\": \"doc\", \"content\": [{\"type\": \"heading\", \"attrs\": {\"level\": 1}, \"content\": [{\"text\": \"😴 Lång anteckning\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"https://satoristudio.net/delorean-ipsum/\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Yeah, I\'ll keep that in mind. I think you got the wrong car, McFly. Look, you gotta listen to me. What did she say? It\'s your mom, she\'s tracked you down. Quick, let\'s cover the time machine. Huh?\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"No sir, I\'m gonna make something out of myself, I\'m going to night school and one day I\'m gonna be somebody. Uh, look me up when you get there. Welcome to my latest experiment. It\'s the one I\'ve been waiting for all my life. I will. No, bastards.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Jennifer, oh are you a sight for sore eyes. Let me look at you. It\'s about the future, isn\'t it? Hello, hello, anybody home? Think, McFly, think. I gotta have time to recopy it. Do your realize what would happen if I hand in my homework in your handwriting? I\'d get kicked out of school. You wouldn\'t want that to happen would you, would you? You know Marty, I\'m gonna be very sad to see you go. You\'ve really mad a difference in my life, you\'ve given me something to shoot for. Just knowing, that I\'m gonna be around to se 1985, that I\'m gonna succeed in this. That I\'m gonna have a chance to travel through time. It\'s going to be really hard waiting 30 years before I could talk to you about everything that\'s happened in the past few days. I\'m really gonna miss you, Marty. We do now.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"David, watch your mouth. You come here and kiss your mother before you go, come here. Please, Marty, don\'t tell me, no man should know too much about their own destiny. Hey Biff, check out this guy\'s life preserver, dork thinks he\'s gonna drown. Ho ho ho, look at it roll. Now we could watch Jackie Gleason while we eat. What?\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Wow, ah Red, you look great. Everything looks great. 1:24, I still got time. Oh my god. No, no not again, c\'mon, c\'mon. Hey. Libyans. Oh honey, he\'s teasing you, nobody has two television sets. I will. Doc, you gotta help me. you were the only one who knows how your time machine works. When could weathermen predict the weather, let alone the future.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Alright, alright, okay McFly, get a grip on yourself. It\'s all a dream. Just a very intense dream. Woh, hey, listen, you gotta help me. Alright kid, you stick to your father like glue and make sure that he takes her to the dance. Doc? Am I to understand you\'re still hanging around with Doctor Emmett Brown, McFly? Tardy slip for you, Miss Parker. And one for you McFly I believe that makes four in a row. Now let me give you a nickle\'s worth of advice, young man. This so called Doctor Brown is dangerous, he\'s a real nutcase. You hang around with him you\'re gonna end up in big trouble. I don\'t worry. this is all wrong. I don\'t know what it is but when I kiss you, it\'s like kissing my brother. I guess that doesn\'t make any sense, does it? Who are you calling spook, pecker-wood.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Are those my clocks I hear? Hey, don\'t I know you from somewhere? I\'ll call you tonight. Thanks, thanks a lot. This is for all you lovers out there.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Never mind that, never mind that now, never mind that, never mind- Nothing, nothing, nothing, look tell her destiny has brought you together, tell her that she\'s the most beautiful you have ever seen. Girls like that stuff. What, what are you doing George? Now which one was it, Greg or Craig? Biff. You\'re George McFly.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Yeah. Unfortunately no, it requires something with a little more kick, plutonium. Doc, you gotta help- Who are you calling spook, pecker-wood. No wait, Doc, the bruise, the bruise on your head, I know how that happened, you told me the whole story. you were standing on your toilet and you were hanging a clock, and you fell, and you hit your head on the sink, and that\'s when you came up with the idea for the flux capacitor, which makes time travel possible.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Well, I guess that\'s everything. Look, there\'s a rhythmic ceremonial ritual coming up. whoa, this is it, this is the part coming up, Doc. Brown, Brown, Brown, Brown, Brown, great, you\'re alive. Do you know where 1640 Riverside- I noticed you band is on the roster for dance auditions after school today. Why even bother Mcfly, you haven\'t got a chance, you\'re too much like your own man. No McFly ever amounted to anything in the history of Hill Valley.\", \"type\": \"text\"}]}]}'),('d2ede71f-88cc-4ba4-85cc-54427c7097a2','{\"type\": \"doc\", \"content\": [{\"type\": \"heading\", \"attrs\": {\"level\": 1}, \"content\": [{\"text\": \"📝 En anteckning\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Info: En Anteckning får sin titel av den översta paragrafen.\", \"type\": \"text\"}]}]}'),('e4264bba-1812-4c86-a3b0-1dbdfc1fc437','{\"type\": \"doc\", \"content\": [{\"type\": \"heading\", \"attrs\": {\"level\": 1}, \"content\": [{\"text\": \"🧭 Det här är en anteckning med alldeles för lång titel så det hade sett väldigt dumt ut i listan om texten inte klipptes av nånstans.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\"}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Det var allt.\", \"type\": \"text\"}]}]}');
/*!40000 ALTER TABLE `Note` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('9e83df08-fbc8-4d7d-9e85-86ef0aaae9af','sam@smith.com','$argon2i$v=19$m=4096,t=3,p=1$leJfAfKE2vcgYqiQepR8tg$6lYL5goLyiSiBV/HC1rKMMiEgA8wCkx0DflmA5JbOgQ'),('a6cffb0d-17d4-41a5-aae2-ca79fdbcf921','assar@classon.se','$argon2i$v=19$m=4096,t=3,p=1$HZCwaXJ2r9LvIXvJHBHeDw$nexTtp0SI6wReb8XO4ZfTGW8AcX8tTiH56Jxr61WOyI');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('13708006-2dde-4d49-bef6-c341a1765541','6f4d3bc767ef8e4c583746e28238e49e0562c8060d72c9ed9558dfe9fe4cc584','2022-06-11 19:58:24.190','20220604152047_changed_id_types_to_strings',NULL,NULL,'2022-06-11 19:58:24.091',1),('74125123-3923-4d2f-93ae-4b53f7cd81fa','bafd2d14e90fdecd28ce962778107ef6df8106b1c999f792fafec1bc6d3f02a2','2022-06-11 19:58:24.046','20220603145815_init',NULL,NULL,'2022-06-11 19:58:23.984',1),('7c548f2c-5073-4161-a8c7-3054c7e2cf0f','c589e321cc326c29ad3f27a6d6315382ab2172607590ea1c2a5aeef3b736aea4','2022-06-11 19:58:24.254','20220605180720_changed_note_content_type_to_json',NULL,NULL,'2022-06-11 19:58:24.224',1),('ad244dcb-7b9d-42e4-8dfc-7e61f24c7e3b','e8b278df100612e3ad725360deba12bf8a66e602844a0c891744ef6c7e7660f5','2022-06-11 19:58:31.129','20220611195831_removed_title_field_from_notes',NULL,NULL,'2022-06-11 19:58:31.116',1),('b2dc7830-375e-4226-90a3-f4016e8f9a79','f9c7e436b0f270a393b61f45e01ebebd49d6788ff544c2a3620b7b7611aa6e90','2022-06-11 19:58:24.089','20220603202417_removed_sessions',NULL,NULL,'2022-06-11 19:58:24.074',1),('ed84be7d-3a9c-4353-9ab5-7bc3903817fa','890b980a0d990d9748b616dc847183e2e034af91cf782a9760a4885d43c7f1f7','2022-06-11 19:58:24.222','20220604152852_removed_note_owners_all_notes_are_public',NULL,NULL,'2022-06-11 19:58:24.193',1),('f6be1333-666c-4f32-8058-a8c5aff535c7','5ebe4f6d6d2582fc38a930a2c41c9e26d195ad49f781d33e620c387c2f9e70fb','2022-06-11 19:58:24.072','20220603170614_added_sessions',NULL,NULL,'2022-06-11 19:58:24.050',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-11 21:17:03