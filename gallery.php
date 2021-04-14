<?php

session_start();
include_once("config.php");

?>

<!DOCTYPE html>
<html>

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/p5.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    <script type="text/javascript" src="interface.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
    <div id="navbar">
        <div id="navbar-left">
            <a href="index.php">home</a>
            <a href="gallery.php" class="active">gallery</a>
            <a href="#effects">effects</a>
        </div>
        <div id="navbar-right">
            <a href="login.php">log in<a href="register.php">register</a></a>
        </div>
    </div>

    <!-- Page Content -->
    <div class="container">
        <p style="padding-left:20px;">Sort by:</p>
        <?php 
            $sql= "SELECT * FROM gallery";
            $db_conn = Config:: connect();
            $stmt=$db_conn->prepare($sql);
            $stmt->execute();
            if($stmt->rowCount() > 0)
            {
                while($row=$stmt->fetch(PDO::FETCH_ASSOC))
                {
                    extract($row);
                    $base64string = $row['image'];

                    //header('Content-Type: image/png');

                    //$data = base64_decode
        ?>


        <img class="img-gallery" src="<?php echo $base64string ?>"></img>

        <?php 
                }
            }
        ?>
    </div>
</body>

</html>