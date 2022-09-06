<?php
	$DBH = new PDO("mysql:host=localhost;dbname=Web-Agency", "root", "");
	$STH = $DBH->prepare("INSERT INTO `connection` (`id`, `name`, `surname`, `email`, `comment`) VALUES (NULL, '1', '', '', '');");  
	$STH->execute();
?>