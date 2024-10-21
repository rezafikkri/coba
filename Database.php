<?php

class Database
{
    private static ?PDO $dbc = null;

    public static function getConnection(): PDO
    {
        if (is_null(self::$dbc)) {
            self::$dbc = new PDO(
                dsn: "pgsql:host=localhost;port=5432;dbname=belajar_postgresql",
                username: 'reza',
                password: 'reza',
            );
        }
        return self::$dbc;
    }
}
