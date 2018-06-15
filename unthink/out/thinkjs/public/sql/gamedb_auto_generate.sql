-- MADE BY GENERATOR AT 2018-6-14 11:40:17,
-- PLEASE DO NOT REWRITE.


--
-- Database: `gamedb`
--
CREATE DATABASE IF NOT EXISTS `gamedb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `gamedb`;

-- --------------------------------------------------------

--
-- 表的结构 `Item`
--

DROP TABLE IF EXISTS `Item`;
CREATE TABLE IF NOT EXISTS `Item` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `cid` int(11) NOT NULL COMMENT '对应的策划表id',
  `count` int(11) NOT NULL COMMENT ' 物品的数量',
  `state` text NOT NULL COMMENT ' 对应物品的状态。 ',
  PRIMARY KEY (`uuid`),KEY `ENTITYID` (`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 玩家物品的结构';

--
-- 表的结构 `Task`
--

DROP TABLE IF EXISTS `Task`;
CREATE TABLE IF NOT EXISTS `Task` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `cid` int(11) NOT NULL,
  `phase` int(11) NOT NULL COMMENT ' 或者定义一个对应枚举',
  PRIMARY KEY (`uuid`),KEY `ENTITYID` (`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




--
-- 分库分表
--

CREATE DATABASE IF NOT EXISTS `gamedb_0` default charset utf8 COLLATE utf8_general_ci;
USE `gamedb_0`;
CREATE TABLE IF NOT EXISTS `Item_0` like `gamedb`.`Item`;
CREATE TABLE IF NOT EXISTS `Task_0` like `gamedb`.`Task`;

--
-- 删除临时库
--
DROP DATABASE `gamedb`;
