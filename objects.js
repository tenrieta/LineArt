class Shape {
    constructor(sides, weight, radius, nobjects, colorR, colorG, colorB,
        satColor, lightColor, xPos, yPos, spread, rotateVal, bgrColorR, bgrColorG,
        bgrColorB, bgrSat, bgrLight, bgrTransp, type) {
        this.sides = sides;
        this.weight = weight;
        this.radius = radius;
        this.nobjects = nobjects;
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;
        this.satColor = satColor;
        this.lightColor = lightColor;
        this.xPos = xPos;
        this.yPos = yPos;
        this.spread = spread;
        this.rotateVal = rotateVal;
        this.bgrColorR = bgrColorR;
        this.bgrColorG = bgrColorG;
        this.bgrColorB = bgrColorB;
        this.bgrSat = bgrSat;
        this.bgrLight = bgrLight;
        this.bgrTransp = bgrTransp;
        this.allObjects = [];
        this.type = type;
    }

    displayFigures() {
        let figures = [];
        let flag = 0;
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
                p.background(bgrColorR, bgrColorG, bgrColorB, bgrTransp);//Last one: TRANSPARENT 
                // console.log("W" + weight + "Pos " + "X" + xPos + "Y " + yPos + "R " + radius + "Points " + nobjects + "Sides" + sides + "Spread" + spread);
                //call(0.5, 0.5, 0, 0, 16, 5, 4, 1, 250, 0, 0, 0, 0);

                // for (let c = 1; c <= 2; c++) {
                //if (c > 1)
                //  call(xPos - 0.5 + (c * 0.04), yPos - 0.5, 0, 0, radius, sides, nobjects, weight, colorR, colorG, colorB, spread, rotateVal, type);
                //else
                call(xPos, yPos, 0, 0, radius, sides, nobjects, weight, colorR, colorG, colorB, spread, rotateVal, type);
                //}


                //save();
                p.noLoop();
                //call(0, 0, 0, 0, 20, 3, 4, 1, 250, 100, 10, 0, 0);
                //call(0.5, 0.5, 0, 0, 70, 7, 3);
                //call(0.7, 0.5, 0, 0, 10, 14, 5);
                //call(0.9, 0.5, 0, 0, 70, 4, 3);
            }

            function call(w, h, x, y, radius, nobjects, sides, weight, colorR, colorG, colorB, spread, rotateVal, type) {
                p.push();
                //position of figure
                p.translate(p.width * w, p.height * h);
                //rotation by x
                p.rotate(rotateVal);

                p.noFill();
                //color
                p.stroke(colorR, colorG, colorB);
                //weight
                p.strokeWeight(weight);

                if (type == "circle") {
                    p.circle(5, 5, 200);
                }
                else {
                    for (var i = 1; i <= sides; i++) {

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
                //p.scale(0.1);
                var canvaSize = document.getElementById("figure-canvas");
                canvaSize.setAttribute("style", "height:" + h + "px");
                canvaSize.setAttribute("style", "width:" + w + "px");

            }
        }
        var f = new p5(sketch, 'figure-canvas');
        figures.push(f);
    };
}

let allInstances = [];

$(document).on("change", function () {
    var figure = new Shape(sides, weight, radius, nobjects, colorR, colorG, colorB,
        satColor, lightColor, xPos, yPos, spread, rotateVal, bgrColorR, bgrColorG,
        bgrColorB, bgrSat, bgrLight, bgrTransp);
    console.log(figure);
    figure.displayFigures();
    allInstances.push(figure);
    //console.log(allInstances.length);
    //for (var i = 0; i < allInstances.length; i++) {
    //console.log("HA" + allInstances[i].sides);
    //}
});


/*SLIDER move value*/
$(document).ready(function () {
    var figure = new Shape(sides, weight, radius, nobjects, colorR, colorG, colorB,
        satColor, lightColor, xPos, yPos, spread, rotateVal, bgrColorR, bgrColorG,
        bgrColorB, bgrSat, bgrLight, bgrTransp);
    console.log(figure);
    figure.displayFigures();
});

/*document.getElementsByClassName(".cmd-btn").onclick = function () {
    debugger;
    var figure = new Shape(sides, weight, radius, nobjects, colorR, colorG, colorB,
        satColor, lightColor, xPos, yPos, spread, rotateVal, bgrColorR, bgrColorG,
        bgrColorB, bgrSat, bgrLight, bgrTransp);
    console.log(figure);
    figure.displayFigures();
};*/


$(".cmd-btn").click(function () {
    var figure = new Shape(sides, weight, radius, nobjects, colorR, colorG, colorB,
        satColor, lightColor, xPos, yPos, spread, rotateVal, bgrColorR, bgrColorG,
        bgrColorB, bgrSat, bgrLight, bgrTransp);
    figure.displayFigures();
});