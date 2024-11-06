<?php

class TestUnInitializeProperty
{
    private string $property;
    
    public function getProperty(): string
    {
        return $this->property;
    }
}

$testUnInitializeProperty = new TestUnInitializeProperty;
var_dump($testUnInitializeProperty->getProperty() ?? null);
