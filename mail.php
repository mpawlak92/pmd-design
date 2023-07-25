<?php

$body = file_get_contents("php://input");
 
$object = json_decode($body);

$to      = 'kontakt@pmd-design.pl';
$subject = $object->subject;

$message = "<html><body>";

$message .= "<p> <b>Nadawca: </b>".$object->sender." <br />
<b>Email nadawcy: </b>".$object->email." <br />

<b>Treść wiadomości: </b> ".$object->message."</p>";

$message .= "</body></html>";

$headers = 'From: kontakt@pmd-design.pl' . "\r\n" .
'Reply-To: '.$object->email . "\r\n" .
'MIME-Version: 1.0'."\r\n".
'Content-type: text/html; charset=utf-8'."\r\n".
'X-Mailer: PHP/' . phpversion();

mail($to, $subject, nl2br($message), $headers);
?>