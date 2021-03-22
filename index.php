<?php

?>

<!DOCTYPE html>
<html>

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/addons/p5.sound.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
</head>

<body>
    <ul class="sidenav">
        <li class="active"><a href="#home">home</a></li>
        <li><a href="#galery">gallery</a></li>
        <li><a href="#effects">effects</a></li>
        <li style="float:right"><a href="login.php">log in<a href="register.php">register</a></a></li>
    </ul>
    <h2>Create your own object</h2>
    <p>This example use media queries to transform the sidenav to a top navigation bar when the screen size is
        900px
        or less.</p>
    <p>We have also added a media query for screens that are 400px or less, which will vertically stack and
        center
        the navigation links.</p>
    <button onclick="downloadPNG()">Save as SVG File</button>
    <script src="objects.js"></script>
</body>

</html>