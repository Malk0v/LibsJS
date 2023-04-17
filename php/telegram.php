<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$token = "6118003524:AAHjYaqFCkQEhg4QEwX4PBp6iGMR2q0uJjw";  
$chat_id = "-955884985";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Сообщение:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: index.html');
} else {
  echo "Error";
}


// Получите API-ключ и ID канала
// $api_key = '6118003524:AAHjYaqFCkQEhg4QEwX4PBp6iGMR2q0uJjw"';
// $chat_id = '-955884985';

// // Получите данные из формы

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//   // Ваш код для обработки данных из формы и отправки сообщения в канал Telegram
// }

// $name = $_POST['name'];
// $email = $_POST['email'];
// $message = $_POST['message'];

// // Сформируйте сообщение
// $text = "Новое сообщение от $name ($email):\n\n$message";

// // Отправьте сообщение в канал Telegram
// $url = "https://api.telegram.org/bot$api_key/sendMessage?chat_id=$chat_id&text=".urlencode($text);
// file_get_contents($url);

?>