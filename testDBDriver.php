<?php

require_once  __DIR__ . '/Database.php';

$dbc = Database::getConnection();

$stmt = $dbc->prepare('SELECT * FROM products');
$stmt2 = $dbc->prepare('SELECT * FROM customer');

$stmt->execute();

$stmt->fetch();

// jika menggunakan psql tidak perlu menggunakan closeCursor

$stmt2->execute();

var_dump($stmt2->fetch());
