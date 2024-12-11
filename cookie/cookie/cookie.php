<?php

// var_dump('Thu, 07 Nov 2024 03:39:07 GMT');
// var_dump('Fri, 08 Nov 2024 03:39:07 GMT');
$nowDate = new DateTime('now', new DateTimeZone('GMT'));
var_dump($nowDate->format('D, d M Y H:i:s'));

$time = strtotime('-1 Hours');
$date = gmdate('D, d M Y H:i:s', $time);
var_dump($date . ' GMT');

$aDate = new DateTime($date, new DateTimeZone('GMT'));
$aDate->setTimezone(new DateTimeZone('Asia/Jakarta'));
var_dump($aDate->format('D, d M Y H:i:s'));


header('Set-Cookie: SIDS=31d4d96e407aad42; Path=/;');

// echo $_COOKIE['SIDS'];
