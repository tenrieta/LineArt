/*window.onload = function () {
    document.getElementById("slidercontainer").style.display = "block";
}*/

function setup() {
    let c = createCanvas(850, 400);
    //saveCanvas(c, 'myCanvas', 'jpg')
    //noLoop();
    //saveCanvas(c, 'myCanvas', 'jpg');
}

function draw() {
    background(160);

    call(0.5, 0.5, 0, 0, 72, 3, 8);
    //save();
    noLoop();
    call(0.3, 0.5, 0, 0, 80, 5, 4);
    call(0.5, 0.5, 0, 0, 70, 7, 3);
    call(0.7, 0.5, 0, 0, 10, 14, 5);
    call(0.9, 0.5, 0, 0, 70, 4, 3);
}

function downloadPNG() {
    save();
    noLoop();
}

function call(w, h, x, y, radius, npoints, sides) {
    push();
    translate(width * w, height * h);
    rotate(frameCount / 100.0);

    for (var i = 1; i <= sides; i++) {

        noFill();
        //color
        //stroke(255, 42, 33);
        //weight
        strokeWeight(3);

        //angleMode(DEGREES); // Change the mode to DEGREES
        let a = atan(PI + PI / 3.0);
        //translate(w / 2, h / 2);
        push();
        rotate(a);
        polygon(x, y, i * 10 + radius, npoints);
    }
    pop();
}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function sendSVG() {
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
}

/*SLIDER move value*/
