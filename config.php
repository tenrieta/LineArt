<?php

class Config
{
    public static function connect()
    {
        $db_host='localhost';
        $db_user='root';
        $db_pass='';
        $db_name='lineart';

        try
        {
            $db_conn= new PDO("mysql:host=$db_host;dbname=$db_name",$db_user,$db_pass);
		    $db_conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e)
        {
            echo $e->getMessage();
        }
        return $db_conn;
    }
}

?>