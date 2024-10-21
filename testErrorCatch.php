<?php

require_once __DIR__ . '/TestException.php';

function testError()
{
    throw new Exception('This is error');
}

try {
    testError();
} catch (TestException $e) {
    var_dump($e->getMessage());
}
