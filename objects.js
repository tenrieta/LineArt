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
            p.background(124);
            console.log("W" + weight + "Pos " + "X" + xPos + "Y " + yPos + "R " + radius + "Points " + nobjects + "Sides" + sides);
            call(xPos, yPos, 0, 0, radius, sides, nobjects, weight, color);
            //save();
            p.noLoop();
            //call(0.3, 0.5, 0, 0, 80, 5, 4);
            //call(0.5, 0.5, 0, 0, 70, 7, 3);
            //call(0.7, 0.5, 0, 0, 10, 14, 5);
            //call(0.9, 0.5, 0, 0, 70, 4, 3);
        }
        function call(w, h, x, y, radius, nobjects, sides, weight, color) {
            p.push();
            p.translate(p.width * w, p.height * h);
            p.rotate(p.frameCount / 100.0);

            for (var i = 1; i <= sides; i++) {

                p.noFill();
                //color
                p.stroke(10, color, 40);
                //weight
                p.strokeWeight(weight);

                //angleMode(DEGREES); // Change the mode to DEGREES
                let a = p.atan(p.PI + p.PI / 3.0);
                //translate(w / 2, h / 2);
                p.push();
                p.rotate(a);
                console.log(radius);
                polygon(x, y, i + radius, nobjects);
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

//debugger;

$(document).on("change", function () {
    displayFigures();

    /*function sendSVG() {
        var svgText = document.getElementById('download-svg').innerHTML;

        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "downloadSVG.php");
        form.setAttribute("accept-charset", "UTF-8");

        var hiddenSVGField = document.createElement("input");
        hiddenSVGField.setAttribute("type", "hidden");
        hiddenSVGField.setAttribute("name", "svgText");
        hiddenSVGField.setAttribute("value", svgText);
        console.log(hiddenSVGField);
        form.appendChild(hiddenSVGField);
        document.body.appendChild(form);
        form.submit();
        console.log(form);
    }*/
});


/*SLIDER move value*/
$(document).ready(function () {
    displayFigures();
});
