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
    <ul class="sidenav">
        <li><a href="index.php">home</a></li>
        <li class="active"><a href="gallery.php">gallery</a></li>
        <li><a href="#effects">effects</a></li>
        <li style="float:right"><a href="login.php">log in<a href="register.php">register</a></a></li>
    </ul>

    <!-- Page Content -->
    <div class="container">
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

        <img src="<?php echo $base64string ?>" style="width:460px; height:260px; float:right; padding:20px;"><br><br>
        <!--- <canvas id="mycanvas" width="900" height="900">
        </canvas>
        <script type="text/javascript">
        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
        var myImage = new Image();
        myImage.src = "base_64";
        ctx.drawImage(myImage, 0, 0);*/
        </script> -->
        <?php 
                }
            }
        ?>
    </div>
</body>

</html>