<?php

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
        <li class="active"><a href="#home">home</a></li>
        <li><a href="#galery">gallery</a></li>
        <li><a href="#effects">effects</a></li>
        <li style="float:right"><a href="login.php">log in<a href="register.php">register</a></a></li>
    </ul>
    <div class="container">
        <h2>Create your own object</h2>
        <p>This example use media queries to transform the sidenav to a top navigation bar when the screen size is
            900px
            or less.</p>
        <p>We have also added a media query for screens that are 400px or less, which will vertically stack and
            center
            the navigation links.</p>
        <button id="btndownload">Save as PNG File</button>


        <h1>Range Slider Picture</h1>
        <div id="figure-canvas"></div>
        <form action="/" method="post" enctype="multipart/form-data" id="form">
            <div class="slidecontainer">
                <p>Sides:</p>
                <input type="range" id="slide" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 0)">
                <span class="slider-value"></span>
                <p>Weight:</p>
                <input type="range" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 1)">
                <span class="slider-value"></span>
                <p>Radius:</p>
                <input type="range" min="0" max="100" value="50" class="slider" oninput="loadValue(this, 2)">
                <span class="slider-value"></span>
                <p>Quantity:</p>
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
                <div id="sliderAmount"></div>
            </div>
        </form>
    </div>
    <script>
    let sliderCount = document.getElementsByClassName("slider").length;
    console.log(sliderCount + "slidercnt");
    var slider = new Array();
    let output = new Array();
    for (var i = 0; i < sliderCount; i++) {

        slider.push(document.getElementsByClassName("slider").item(i));
        output[i] = document.getElementsByClassName("slider-value").item(i);
        output[i].innerHTML = slider[i].value;
    }

    let testt = 12;
    let sides = 3;
    let weight = 0;
    let radius = 10;
    let nobjects = 0;
    let color = 0;
    let xPos = 0;
    let yPos = 0;


    function loadValue(t, idx) {
        console.log(t.value + "IDX:" + idx);
        output[idx].innerHTML = t.value;
        valueToUse = t.value;
        switch (idx) {
            case 0:
                sides = t.value;;
                break;
            case 1:
                weight = t.value;;
                break;
            case 2:
                radius = t.value;;
                break;
            case 3:
                nobjects = t.value;;
                break;
            case 4:
                color = t.value;;
                break;
            case 5:
                xPos = t.value;;
                break;
            case 6:
                yPos = t.value;
        }
    }
    </script>
    <script src="objects.js">
    </script>
</body>

</html>