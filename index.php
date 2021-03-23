<?php

?>

<!DOCTYPE html>
<html>

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/addons/p5.sound.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    <script type="text/javascript" src="interface.js"></script>
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
    <button onclick="downloadPNG()">Save as PNG File</button>


    <h1>Range Slider Picture</h1>

    <div class="slidecontainer">
        <p>Sides:</p>
        <input type="range" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 0)">
        <span class="slider-value"></span>
        <p>Weight:</p>
        <input type="range" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 1)">
        <span class="slider-value"></span>
        <p>Radius:</p>
        <input type="range" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 2)">
        <span class="slider-value"></span>
        <p>Angle:</p>
        <input type="range" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 3)">
        <span class="slider-value"></span>
        <p>Color:</p>
        <input type="range" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 4)">
        <span class="slider-value"></span>
        <p>X-position:</p>
        <input type="range" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 5)">
        <span class="slider-value"></span>
        <p>Y-position:</p>
        <input type="range" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 6)">
        <span class="slider-value"></span>
    </div>
    <script src="objects.js">
    </script>
    <script>
    var sliderCount = document.getElementsByClassName("slider").length;
    console.log(sliderCount + "slidercnt");
    var slider = new Array();
    let output = new Array();
    for (var i = 0; i < sliderCount; i++) {

        slider.push(document.getElementsByClassName("slider").item(i));
        output[i] = document.getElementsByClassName("slider-value").item(i);
        output[i].innerHTML = slider[i].value;
    }
    testt = 12;

    function loadValue(t, idx) {
        console.log(t.value + "IDX:" + idx);
        output[idx].innerHTML = t.value;
        testt = t.value;
        console.log(testt);
    }
    </script>
</body>

</html>