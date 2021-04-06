<?php
    include_once("config.php");
    /*if(!isset($_POST["code"])){
        die("Post was empty.");
    }*/

    $sql="insert into gallery(image) values(:image)";

    // INSERT with named parameters
    $conn = Config:: connect();
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(":image", $_POST["image"]);
    $stmt->execute();
    $affected_rows = $stmt->rowCount();
    echo $affected_rows;
?>