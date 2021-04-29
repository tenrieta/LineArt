/*window.onload = function () {
    document.getElementById("slidercontainer").style.display = "block";
}*/

/*$(document).ready(function () {
    console.log("read");
    $(document).on('.onchange', '.refresher', function () {
        $.ajax({
            url: 'index.html',
            method: "GET",
            dataType: 'json',
            success: function (response) {
                $('#figure-canvas').html(response);
            }
        });
    });

});*/

//////   //////  //      //////  /////////
//       //  //  //      //  //   ///__///
///////  //////  /////// //////   ///   \\\


// COLOR HUE RANGE
function hsl2Rgb(h, s, l) {
    s = s / 100;
    l = l / 100;
    var c, x, m, rgb;
    c = (1 - Math.abs(2 * l - 1)) * s;
    x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    m = l - c / 2;
    if (h >= 0 && h < 60) rgb = [c, x, 0];
    if (h >= 60 && h < 120) rgb = [x, c, 0];
    if (h >= 120 && h < 180) rgb = [0, c, x];
    if (h >= 180 && h < 240) rgb = [0, x, c];
    if (h >= 240 && h < 300) rgb = [x, 0, c];
    if (h >= 300 && h <= 360) rgb = [c, 0, x];

    return rgb.map(function (v) {
        return 255 * (v + m) | 0;
    });
}

/*SATURATION LINES*/

var satRange = document.querySelector('#sat-color-range');
satRange.addEventListener('input', function (e) {
    var colorLine = document.querySelector('#color-range').value;
    var hue = ((colorLine / 100) * 360).toFixed(0);
    var rgb = hsl2Rgb(hue, satColor, 50);
    //console.log("Sat: " + satColor + "Light:" + lightColor);
    colorR = rgb[0];
    colorG = rgb[1];
    colorB = rgb[2];
});

/*LIGHTNESS LINES*/
var lightRange = document.querySelector('#light-color-range');
lightRange.addEventListener('input', function (e) {
    var colorLine = document.querySelector('#color-range').value;
    var hue = ((colorLine / 100) * 360).toFixed(0);
    var rgb = hsl2Rgb(hue, 100, lightColor);
    console.log("Sat: " + satColor + "Light:" + lightColor);
    colorR = rgb[0];
    colorG = rgb[1];
    colorB = rgb[2];
});


/*COLOR LINES */

var colorRange = document.querySelector('#color-range');
var randomRange = Math.floor(100 * Math.random());
var colorChoice = document.getElementById("color-choice");

colorRange.addEventListener('input', function (e) {
    var hue = ((this.value / 100) * 360).toFixed(0);
    var hsl = "hsl(" + hue + ", 100%, 50%)";
    var bgHsl = "hsl(" + hue + ", 100%, 95%)";
    //console.log("Sat: " + satColor + "Light:" + lightColor);
    var rgb = hsl2Rgb(hue, satColor, lightColor);
    //satColor = hsl2Rgb(hue, 100, 50);//2nd value
    //lightColor = hsl2Rgb(hue, 100, lightColor);//3rd value;
    colorR = rgb[0];
    colorG = rgb[1];
    colorB = rgb[2];
    //console.log("R" + colorR + "G" + colorG + "B" + colorB);
});
//colorRange.value = randomRange;
//var event = new Event('input');
//colorRange.dispatchEvent(event);

/* COLOR BGR */
var colorRangeBgr = document.querySelector('#color-range-bgr')
var randomRangeBgr = Math.floor(100 * Math.random())
var colorChoiceBgr = document.getElementById("color-choice")

colorRangeBgr.addEventListener('input', function (e) {
    var hue = ((this.value / 100) * 360).toFixed(0);
    var hsl = "hsl(" + hue + ", 100%, 50%)";
    var bgHsl = "hsl(" + hue + ", 100%, 95%)";
    var rgb = hsl2Rgb(hue, bgrSat, bgrLight);
    bgrColorR = rgb[0];
    bgrColorG = rgb[1];
    bgrColorB = rgb[2];
});

/* BGR COLOR SATURATION */
var satRangeBgr = document.querySelector('#sat-range-bgr');
satRangeBgr.addEventListener('input', function (e) {
    var colorLine = document.querySelector('#color-range-bgr').value;
    var hue = ((colorLine / 100) * 360).toFixed(0);
    var rgb = hsl2Rgb(hue, bgrSat, 50);
    console.log("SATUR Sat: " + bgrSat + "Light:" + bgrSat);
    bgrColorR = rgb[0];
    bgrColorG = rgb[1];
    bgrColorB = rgb[2];
});

/*LIGHTNESS BGR*/
var lightRangeBgr = document.querySelector('#light-range-bgr');
lightRangeBgr.addEventListener('input', function (e) {
    var colorLine = document.querySelector('#color-range-bgr').value;
    var hue = ((colorLine / 100) * 360).toFixed(0);
    var rgb = hsl2Rgb(hue, 100, bgrLight);
    bgrColorR = rgb[0];
    bgrColorG = rgb[1];
    bgrColorB = rgb[2];
});



////////   /////  ////  /////////
///     /// \\// //  ///    __
////////  ///      //  //////////


//download Image
function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
}

document.getElementById("btnDownloadPng").onclick = function downloadPNG() {
    var c0 = document.getElementById('defaultCanvas0');
    var c1 = document.getElementById('defaultCanvas1');
    var c2 = document.getElementById('defaultCanvas2');
    var c = null;
    if (c0 !== null) {
        c = c0;
    }
    else if (c1 !== null) {
        c = c1;
    }
    else {
        c = c2;
    }
    var myImage = c.toDataURL();
    downloadURI(myImage, "lineart.png");

    //download SVG
    /*var imgdata = c.getSerializedSvg();
    var sth = c.getSvg();
    console.log(imgdata);
    console.log(sth)*/
}

document.getElementById("btnDownloadJpg").onclick = function downloadJPG() {
    var c0 = document.getElementById('defaultCanvas0');
    var c1 = document.getElementById('defaultCanvas1');
    var c2 = document.getElementById('defaultCanvas2');
    var c = null;
    if (c0 !== null) {
        c = c0;
    }
    else if (c1 !== null) {
        c = c1;
    }
    else {
        c = c2;
    }
    var myImage = c.toDataURL();
    downloadURI(myImage, "lineart.jpg");
}

document.getElementById("btnDownloadPdf").onclick = function downloadPDF() {
    var c0 = document.getElementById('defaultCanvas0');
    var c1 = document.getElementById('defaultCanvas1');
    var c2 = document.getElementById('defaultCanvas2');
    var c = null;
    if (c0 !== null) {
        c = c0;
    }
    else if (c1 !== null) {
        c = c1;
    }
    else {
        c = c2;
    }

    //download PDF
    var imgData = c.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF();

    pdf.addImage(imgData, 'JPEG', 5, 10, 200, 120);
    pdf.save("lineart.pdf");
}

function uploadImage() {
    //debugger;
    var c0 = document.getElementById('defaultCanvas0');
    var c1 = document.getElementById('defaultCanvas1');
    var c2 = document.getElementById('defaultCanvas2');
    var c = null;
    if (c0 !== null) {
        c = c0;
    }
    else if (c1 !== null) {
        c = c1;
    }
    else {
        c = c2;
    }
    var dataUrl = c.toDataURL();
    console.log("DATA:" + dataUrl);

    $.ajax({
        type: "POST",
        url: "http://localhost/LineArt/uploadImage.php",
        data: { image: dataUrl }
    })
        .done(function (respond) { console.log("done: " + respond); })
        .fail(function (respond) { console.log("fail"); })
        .always(function (respond) { console.log("always"); })
};



/* CANVAS resize */

/*function resizeCanvas() {
    var c0 = document.getElementById('defaultCanvas0');
    var c1 = document.getElementById('defaultCanvas1');
    var canvas = null;
    if (c0 !== null) {
        canvas = c0;
    }
    else {
        canvas = c1;
    }
    if (canvas.width < window.innerWidth) {
        canvas.width = window.innerWidth;
    }

    if (canvas.height < window.innerHeight) {
        canvas.height = window.innerHeight;
    }
}*/


/*
window.onload = resize;
window.onresize = resize;*/


/*
//////  TO-DO ////////
1) Color picker for background, lines - DONE
2) Transparent background - G/D
3) Create more than one object
3.1) Fix Circle
4) Slide menu for download
5) Burger menu for navigation
6) Fix login/register form
7) Upload image from folder into database
8) Choose figure image to place on photo
9) Fix users
*/
