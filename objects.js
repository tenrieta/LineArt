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


let figures = [];
let flag = 0;

function displayFigures() {
    function sketch(p) {

        p.setup = function () {
            var canvaSizeW = 850;
            var canvaSizeH = 500;
            if (flag <= 1) {
                p.createCanvas(canvaSizeW, canvaSizeH);
                flag += 1;
            }
            else {
                var list = document.getElementById("figure-canvas");
                list.removeChild(list.childNodes[0]);
                //if(alfa < 100){ list.removeChild(list.childNodes[0]); }
                p.strokeWeight(4);
                p.stroke(51);
                p.createCanvas(canvaSizeW, canvaSizeH);

                //p.createCanvas(945, 544);
            }
        }

        p.draw = function () {
            console.log(bgrcolor);
            p.background(100, 100, 100, 250);//Last one: TRANSPARENT
            console.log("W" + weight + "Pos " + "X" + xPos + "Y " + yPos + "R " + radius + "Points " + nobjects + "Sides" + sides + "Spread" + spread);

            call(xPos, yPos, 0, 0, radius, sides, nobjects, weight, colorR, colorG, colorB, spread, rotateVal);
            //save();
            p.noLoop();
            //call(0.3, 0.5, 0, 0, 80, 5, 4);
            //call(0.5, 0.5, 0, 0, 70, 7, 3);
            //call(0.7, 0.5, 0, 0, 10, 14, 5);
            //call(0.9, 0.5, 0, 0, 70, 4, 3);
        }

        function call(w, h, x, y, radius, nobjects, sides, weight, colorR, colorG, colorB, spread, rotateVal) {
            p.push();
            //position of figure
            p.translate(p.width * w, p.height * h);
            //rotation by x
            p.rotate(rotateVal);

            for (var i = 1; i <= sides; i++) {

                p.noFill();
                //color
                p.stroke(colorR, colorG, colorB);
                //weight
                p.strokeWeight(weight);

                //p.angleMode(p.DEGREES); // Change the mode to DEGREES
                let a = p.atan(p.PI + p.PI / 3.0);
                //spread of figures
                p.translate(spread, -spread);
                p.push();
                p.rotate(a);

                polygon(x, y, i * radius, nobjects);//i for rotate position of figure
            }
            p.pop();
        }

        function polygon(x, y, radius, nobjects) {
            var angle = p.TWO_PI / nobjects;
            p.beginShape();
            for (let a = 0; a < p.TWO_PI; a += angle) {
                let sx = x + p.cos(a) * radius;
                let sy = y + p.sin(a) * radius;
                p.vertex(sx, sy);
            }
            p.endShape(p.CLOSE);
        }

        window.onresize = function () {
            // assigns new values for width and height variables
            var w = window.innerWidth * 0.62;
            var h = window.innerHeight * 0.82;

            console.log(w + " " + h)

            p.resizeCanvas(w, h);
            p.scale(0.1);
            var canvaSize = document.getElementById("figure-canvas");
            canvaSize.setAttribute("style", "height:" + h + "px");
            canvaSize.setAttribute("style", "width:" + w + "px");

        }
    }
    var f = new p5(sketch, 'figure-canvas');
    figures.push(f);
};

$(document).on("change", function () {
    displayFigures();
});


/*SLIDER move value*/
$(document).ready(function () {
    displayFigures();
});

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
1) Color picker for background, lines
2) Transparent background
3) Create more than one object
4) Slide menu for download
5) Burger menu for navigation
6) Fix login/register form
7) Upload image from folder into database
8) Choose figure image to place on photo
9) Fix users
*/