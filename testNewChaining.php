<?php

// Sebelum php8.4
$dateTime = new DateTime();
echo $dateTime->format('Y') . PHP_EOL;
// atau
echo (new DateTime())->format('Y') . PHP_EOL;

// Di php8.4
echo new DateTime()->format('Y') . PHP_EOL;
