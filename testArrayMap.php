<?php

class Map
{
    public function __construct(
        public string $message,
    ) {
        
    }
}

$arr = [new Map('Satu'), new Map('Dua')];
var_dump(array_map(function ($v) {
    return $v->message;
}, $arr));

var_dump(['Satu','Dua']);
