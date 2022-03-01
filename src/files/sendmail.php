<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('webmaster@vh53895.rdock.ru', 'Авто Выкуп');
	//Кому отправить
	$mail->addAddress('erem19992015@mail.ru');
	//Тема письма
	$mail->Subject = 'Письмо с сайта Авто Выкуп';



	//Тело письма
	$body = '<h1>Новый заказ!</h1>';
	
	if(trim(!empty($_POST['Имя']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['Имя'].'</p>';
	}
	if(trim(!empty($_POST['Телефон']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['Телефон'].'</p>';
	}

    
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	}
	
	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>