<?php
	$name = $_POST['name']; //данные их формы
	$surname = $_POST['surname'];
	$email = $_POST['email'];
	$comment = $_POST['comment'];

	$DBH = new PDO("mysql:host=localhost; dbname=Web-Agency; charset=utf8", "root", ""); //подключение к БД

	$options = [
		'name' => $name,
		'surname' => $surname,
		'email' => $email,
		'comment' => $comment
	]; //массив с подготовленным данными

	$SQL = "INSERT INTO `connection` (`id`, `name`, `surname`, `email`, `comment`) VALUES (NULL, :name, :surname, :email, :comment)";//готовка запроса с плейсхолдерами
	$query = $DBH->prepare($SQL);//подготавливаем запрос

	$query->execute($options);//отпралвяем запрос
	header("Location: index.html");
?>