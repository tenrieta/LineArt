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

document.getElementById("btndownload").onclick = function downloadPNG() {
    var c0 = document.getElementById('defaultCanvas0');
    var c1 = document.getElementById('defaultCanvas1');
    var c = null;
    if (c0 !== null) {
        c = c0;
    }
    else {
        c = c1;
    }
    var myImage = c.toDataURL();
    downloadURI(myImage, "lineart.png");
}

let figures = [];
let flag = true;

function displayFigures() {
    function sketch(p) {
        p.setup = function () {
            if (flag === true) {
                p.createCanvas(945, 544);
                flag = false;
            }
            else {
                //p.erase();
                var list = document.getElementById("figure-canvas");
                list.removeChild(list.childNodes[0]);
                p.createCanvas(945, 544);
                //p.splice(1, 1);
            }
        }

        p.draw = function () {
            console.log(bgrcolor);
            p.background(bgrcolor, bgrcolor, bgrcolor);
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
    var c = null;
    if (c0 !== null) {
        c = c0;
    }
    else {
        c = c1;
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

