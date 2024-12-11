<?php

function add(int $a): string
{
    return gettype($a);
}

var_dump(add('a'));
