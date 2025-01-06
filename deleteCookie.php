<?php

$time = time();
$date = gmdate('D, d M Y H:i:s', $time);
var_dump($date . ' GMT');

header('Set-Cookie: SIDS=31d4d96e407aad42; Domain=cookie.coba.rezafikkri; Path=/cookie; Expires=' . $date);
