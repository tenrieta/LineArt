<?php

?>

<!DOCTYPE html>
<html>

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/p5.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js"></script>
</head>

<body>
    <nav>
        <ul class="nav">
            <li><a href="index.php">Home</a></li>
            <li><a href="gallery.php">Gallery</a></li>
            <li><a href="#">Effects</a>
            <li><a href="#">More</a>
                <ul>
                    <li><a href="#">Download image</a>
                        <ul>
                            <li><a href="#" id="btnDownloadPng">as PNG</a></li>
                            <li><a href="#" id="btnDownloadJpg">as JPG</a></li>
                            <li><a href="#" id="btnDownloadPdf">as PDF</a></li>
                            <li><a href="#">item</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Upload image</a>
                        <ul>
                            <li><a href="#" onclick="uploadImage()">to public Gallery</a></li>
                            <li><a href="#">to private Gallery</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign in</a></li>
        </ul>
    </nav>
    <div class="container">
        <!--<h2 style="color:white; font-size: 1.6em;">Create your own object</h2>-->
        <form method="post" accept-charset="utf-8" name="form1">
            <input name="hidden_data" id='hidden_data' type="hidden" />
        </form>
        <div id="figure-canvas"></div>
        <form action="/" method="post" enctype="multipart/form-data" id="form">
            <div class="slidecontainer" id="style-scroll">
                <p>Sides:</p>
                <input type="range" id="slide" min="0" max="100" value="2" class="slider" oninput="loadValue(this, 0)">
                <span class="slider-value"></span>

                <label class="collapse" for="_0">Lines</label>
                <input id="_0" type="checkbox">
                <div class="lines">
                    <p>Weight:</p>
                    <input type="range" min="0" max="180" value="2" class="slider" oninput="loadValue(this, 1)">
                    <span class="slider-value"></span>
                </div>

                <p>Radius:</p>
                <input type="range" min="0" max="60" value="16" step="1" class="slider" oninput="loadValue(this, 2)">
                <span class="slider-value"></span>

                <p>Quantity:</p>
                <input type="range" min="0" max="100" value="20" class="slider" oninput="loadValue(this, 3)">
                <span class="slider-value"></span>

                <label class="collapse" for="_1">Color</label>
                <input id="_1" type="checkbox">
                <div class="color">
                    <p>Color:</p>
                    <input class="slider" id="color-range" type="range" min="0" max="100" value="20">
                    <span class="slider-value" oninput="loadValue(this, 4)"></span>
                    <p>Saturation:</p>
                    <input class="slider" id="sat-color-range" type="range" min="0" max="100" value="100"
                        oninput="loadValue(this, 5)">
                    <span class="slider-value"></span>
                    <p>Lightness:</p>
                    <input class="slider" id="light-color-range" type="range" min="0" max="100" value="50"
                        oninput="loadValue(this, 6)">
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

                <label class="collapse" for="_3">Background color</label>
                <input id="_3" type="checkbox">
                <div class="bgr">
                    <p>Background color</p>
                    <input class="slider" id="color-range-bgr" type="range" min="0" max="100" value="75"
                        oninput="loadValue(this, 11)">
                    <span class="slider-value"></span>
                    <p>Background saturation:</p>
                    <input class="slider" id="sat-range-bgr" type="range" min="0" max="100" value="100"
                        oninput="loadValue(this, 12)">
                    <span class="slider-value"></span>
                    <p>Background lightness:</p>
                    <input class="slider" id="light-range-bgr" type="range" min="0" max="100" value="50"
                        oninput="loadValue(this, 13)">
                    <span class="slider-value"></span>
                    <p>Transparent:</p>
                    <input class="slider" id="light-range-bgr" type="range" min="0" max="200" value="200"
                        oninput="loadValue(this, 14)">
                    <span class="slider-value"></span>
                </div>
            </div>
        </form>
        <div>
            <button class="cmd-btn" onclick="addFigure('polygon')">+ polygon</button>
            <button class="cmd-btn" onclick="addFigure('circle')">+ circle</button>
        </div>
    </div>

    <script>
    let sides = 2;
    let weight = 2;
    let radius = 16;
    let nobjects = 20;
    let colorR = 100;
    let colorG = 0;
    let colorB = 0;
    let satColor = 100;
    let lightColor = 50;
    let xPos = 0.5;
    let yPos = 0.5;
    let spread = 0;
    let rotateVal = 1.0;
    let bgrColorR = 100;
    let bgrColorG = 100;
    let bgrColorB = 100;
    let bgrSat = 100;
    let bgrLight = 50;
    let bgrTransp = 200;
    let type = "polygon";

    let sliderCount = document.getElementsByClassName("slider").length;
    console.log(sliderCount + "slidercnt");
    var slider = new Array();
    let output = new Array();

    for (var i = 0; i < sliderCount; i++) {

        slider.push(document.getElementsByClassName("slider").item(i));
        output[i] = document.getElementsByClassName("slider-value").item(i);
        output[i].innerHTML = slider[i].value;
    }

    function loadValue(t, idx) {
        output[idx].innerHTML = t.value;
        valueToUse = t.value;
        switch (idx) {
            case 0:
                sides = t.value;
                break;
            case 1:
                weight = t.value;
                break;
            case 2:
                radius = t.value;
                break;
            case 3:
                nobjects = t.value;
                break;
            case 5:
                satColor = t.value;
                break;
            case 6:
                lightColor = t.value;;
                break;
            case 7:
                spread = t.value;
                break;
            case 8:
                xPos = t.value;
                break;
            case 9:
                yPos = t.value;
            case 10:
                rotateVal = t.value;
            case 12:
                bgrSat = t.value;
            case 13:
                bgrLight = t.value;
            case 14:
                bgrTransp = t.value;
        }
    }

    function addFigure(typeFigure) {
        type = typeFigure;
    }
    </script>
    <script src="objects.js"></script>
    <script type="text/javascript" src="interface.js"></script>
</body>

</html>