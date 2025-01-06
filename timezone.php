<?php

date_default_timezone_set('UTC');

var_dump(date_default_timezone_get());

$date = new DateTime();
var_dump($date);

date_default_timezone_set('GMT');

var_dump(date_default_timezone_get());

$date = new DateTime();
var_dump($date);
