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
        <li><a href="gallery.php">gallery</a></li>
        <li><a href="#effects">effects</a></li>
        <li style="float:right"><a href="login.php">log in<a href="register.php">register</a></a></li>
    </ul>
    <div class="container">
        <h2>Create your own object</h2>
        <button id="btndownload">Download Image</button>
        <div>
            <input type="button" onclick="uploadImage()" value="Upload Image to Gallery" />
        </div>

        <form method="post" accept-charset="utf-8" name="form1">
            <input name="hidden_data" id='hidden_data' type="hidden" />
        </form>

        <div id="figure-canvas"></div>
        <form action="/" method="post" enctype="multipart/form-data" id="form">
            <div class="slidecontainer">
                <p>Sides:</p>
                <input type="range" id="slide" min="0" max="100" value="2" class="slider" oninput="loadValue(this, 0)">
                <span class="slider-value"></span>
                <label class="collapse" for="_3">Lines</label>
                <input id="_3" type="checkbox">
                <div class="lines">
                    <p>Weight:</p>
                    <input type="range" min="0" max="180" value="2" class="slider" oninput="loadValue(this, 1)">
                    <span class="slider-value"></span>
                </div>
                <p>Radius:</p>
                <input type="range" min="0" max="30" value="20" step="0.5" class="slider" oninput="loadValue(this, 2)">
                <span class="slider-value"></span>
                <p>Quantity:</p>
                <input type="range" min="0" max="100" value="20" class="slider" oninput="loadValue(this, 3)">
                <span class="slider-value"></span>
                <label class="collapse" for="_1">Color</label>
                <input id="_1" type="checkbox">
                <div class="color">
                    <p>Red color:</p>
                    <input type="range" min="0" max="256" value="0" class="slider" oninput="loadValue(this, 4)">
                    <span class="slider-value"></span>
                    <p>Green color:</p>
                    <input type="range" min="0" max="256" value="0" class="slider" oninput="loadValue(this, 5)">
                    <span class="slider-value"></span>
                    <p>Blue color:</p>
                    <input type="range" min="0" max="256" value="0" class="slider" oninput="loadValue(this, 6)">
                    <span class="slider-value"></span>
                </div>
                <p>Spread: </p>
                <input type="range" min="0" max="100" value="0" class="slider" oninput="loadValue(this, 7)">
                <span class="slider-value"></span>
                <label class="collapse" for="_2">Position</label>
                <input id="_2" type="checkbox">
                <div class="pos">
                    <p>X-position:</p>
                    <input type="range" min="0" max="1" step="0.1" value="0.5" class="slider"
                        oninput="loadValue(this, 8)">
                    <span class="slider-value"></span>
                    <p>Y-position:</p>
                    <input type="range" min="0" max="1" step="0.1" value="0.5" class="slider"
                        oninput="loadValue(this, 9)">
                    <span class="slider-value"></span>
                    <div id="sliderAmount"></div>
                    <p>Rotate: </p>
                    <input type="range" min="0" max="100" value="1" class="slider" oninput="loadValue(this, 10)">
                    <span class="slider-value"></span>
                </div>
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

    let sides = 2;
    let weight = 2;
    let radius = 180;
    let nobjects = 20;
    let colorR = 0;
    let colorG = 0;
    let colorB = 0;
    let xPos = 0.5;
    let yPos = 0.5;
    let spread = 0;
    let rotateVal = 1.0;

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
                colorR = t.value;;
                break;
            case 5:
                colorG = t.value;;
                break;
            case 6:
                colorB = t.value;;
                break;
            case 7:
                spread = t.value;;
                break;
            case 8:
                xPos = t.value;;
                break;
            case 9:
                yPos = t.value;
            case 10:
                rotateVal = t.value;
        }
    }
    </script>
    <script src="objects.js">
    </script>
</body>

</html>