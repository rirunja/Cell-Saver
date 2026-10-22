var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cw = canvas.width;
const ch = canvas.height;


var c = canvas.getContext("2d");

c.fillStyle = "rgba(0, 0, 0, 1)";

let bg = new Image();
bg.src = "./images/titre.jpg";
let cyn = new Image();
cyn.src = "./images/cyn.jpeg";



var btn = {
    x: cw / 2 - 100,
    y: ch / 2 - 50,
    w: 200,
    h: 100
};
bg.onload = function() {
    c.drawImage(bg, 0, 0, cw, ch);
    c.fillRect(btn.x, btn.y, btn.w, btn.h);
};

var s = 2;//step

var etape = 0;
var grab = false;
var grab1 = false;
var grab2 = false;
var btn2;
var btn4;




canvas.addEventListener("click", function(event) {
    const{ offsetX:x, offsetY:y } = event;
    switch (etape) {
        case 0:
            c.fillStyle = "rgba(255, 0, 0, 1)";
            if (x >= btn.x && x <= btn.x + btn.w && y >= btn.y && y <= btn.y + btn.h) {
                etape += s;
                levelstart();
            }
            break;
        case 1*s:
            c.fillStyle = "rgba(0, 255, 0, 1)";
            if (grab) {
                grab = false;
                grab1 = false;
                grab2 = false;
                if (10>= btn2.y1 && 10>= btn2.y2) {
                    etape += s;
                    levelstart();
                }
            }else {
                if (x >= btn2.x1 && x <= btn2.x1 + btn2.w1 && y >= btn2.y1 && y <= btn2.y1 + btn2.h1) {
                    grab1 = true;
                    grab = true;
                }
                if (x >= btn2.x2 && x <= btn2.x2 + btn2.w2 && y >= btn2.y2 && y <= btn2.y2 + btn2.h2) {
                    grab2 = true;
                    grab = true;
                }
            }
            break;
        case 2*s:
            if (grab) {
                grab = false;
                if (x >= btn4.x4 && x <= btn4.x4 + btn4.w4 && y >= btn4.y4 && y <= btn4.y4 + btn4.h4) {
                    etape += s;
                    levelstart();
                }
            }else {
                if (x >= btn4.x1 && x <= btn4.x1 + btn4.w1 && y >= btn4.y1 && y <= btn4.y1 + btn4.h1) {
                    grab = true;
                }
            }
            
            break;
    }
});

canvas.addEventListener("mousemove", function(event) {
    const{ offsetX:x, offsetY:y } = event;
    c.clearRect(0, 0, cw, ch);
    
    switch (etape) {
        case 0:
            c.drawImage(bg, 0, 0, cw, ch);
            c.fillStyle = "rgba(0, 0, 0, 1)";
            c.fillRect(btn.x, btn.y, btn.w, btn.h);
            c.fillStyle = "rgba(255, 255, 255, 1)";
            c.fillText("Cliquez sur le bouton pour commencer", btn.x + 5, btn.y + btn.h / 2 );
            break;
        case 1*s:
            c.drawImage(bg, 0, 0, cw, ch);
            if (grab1 && y>= btn2.h1 / 2 && y <= 300 - btn2.h1 / 2) {
                btn2.y1 = y - btn2.h1 / 2;
            }
            if (grab2 && y>= btn2.h2 / 2 && y <= 300 - btn2.h2 / 2) {
                btn2.y2 = y - btn2.h2 / 2;
            }
            c.fillRect(btn2.x1, btn2.y1, btn2.w1, btn2.h1);
            c.fillRect(btn2.x2, btn2.y2, btn2.w2, btn2.h2);
            break;
        case 2*s:
            /*c.drawImage(bg, 0, 0, cw, ch);
            if (grab){
                if (grab && y>= btn4.w2 / 2 && y <= ch - btn4.w2 / 2) {
                    btn4.y2 = y - btn4.w2/2;
                    //c.fillStyle = "rgba(0, 0, 255, 0.3)";
                }
                if (grab && x>= btn4.w2 / 2 && x <= cw - btn4.w2 / 2) {
                    btn4.x2 = x - btn4.w2/2;
                }
                c.fillRect(btn4.x2, btn4.y2, btn4.w2, btn4.h2);
                c.fillRect(btn4.x3, btn4.y3, btn4.w3, btn4.h3);
            }else {
                c.fillRect(btn4.x1, btn4.y1, btn4.w1, btn4.h1);

            }c.fillRect(btn4.x4, btn4.y4, btn4.w4, btn4.h4);
            break;
        case 3*s:*/
            c.drawImage(bg, 0, 0, cw, ch);
            if (grab){
                if (grab && x>= btn4.w3 / 2 && x <= cw - btn4.w3 / 2) {
                    if (y>btn4.y1 + btn4.h1 * 0.5) {
                        btn4.h3 = y - btn4.y3 - btn4.w3 / 2;
                        btn4.y3 = btn4.y1;
                    }else{
                        btn4.h3 = btn4.y1 - y + btn4.w3 / 2;
                        btn4.y3 = y + btn4.w1 / 2;
                    }
                    
                }
                if (grab && y>= btn4.h2 / 2 && y <= ch - btn4.h2 / 2) {
                    btn4.y2 = y - btn4.h2/2;
                    //c.fillStyle = "rgba(0, 0, 255, 0.3)";
                }
                if (grab && x>= btn4.w1 / 2 && x <= cw - btn4.w1 / 2) {
                    if (x>btn4.x2 + btn4.w2 / 2) {
                        btn4.w2 = x - btn4.x2 + btn4.h2 / 2;
                        btn4.x2 = btn4.x1;
                    }else{
                        btn4.w2 = btn4.x1 - x + btn4.h2 *1.5;
                        btn4.x2 = x - btn4.h2 / 2;
                    }
                }
                c.drawImage(cyn, btn4.x2, btn4.y2, btn4.w2, btn4.h2);
                c.drawImage(cyn, btn4.x3, btn4.y3, btn4.w3, btn4.h3);
                //c.fillRect(btn4.x2, btn4.y2, btn4.w2, btn4.h2);
                //c.fillRect(btn4.x3, btn4.y3, btn4.w3, btn4.h3);
            }else {
                c.fillRect(btn4.x1, btn4.y1, btn4.w1, btn4.h1);

            }c.fillRect(btn4.x4, btn4.y4, btn4.w4, btn4.h4);
            break;

    }c.fillRect(0, 0, 100, 100);
    /*c.fillRect(400, y - 50, 50, 100);
    c.fillRect(x - 50, 300, 100, 50);
    c.fillRect(x - 50, y - 50, 100, 50);*/
});

function levelstart() {
    switch (etape) {
        case 0:
            btn = {
                x: cw / 2 - 100,
                y: ch / 2 - 50,
                w: 200,
                h: 100
            };
            break;
        case 1*s:
            btn2={
                x1: 385,
                y1: 200,
                w1: 50,
                h1: 100,
                x2: 885,
                y2: 200,
                w2: 50,
                h2: 100
            };
            break;
        case 2*s:/*
            c.fillStyle = "rgba(0, 0, 255, 1)";
            btn4={
                x1: 385,
                y1: 200,
                w1: 50,
                h1: 50,
                x2: 385,
                y2: 200,
                w2: 50,
                h2: 800,
                x3: 385,
                y3: 200,
                w3: 50,
                h3: 800,
                x4: 785,
                y4: 400,
                w4: 50,
                h4: 50
            };
            break;
        case 3*s:*/
            c.fillStyle = "rgba(255, 0, 255, 1)";
            btn4={
                x1: 385,
                y1: 200,
                w1: 50,
                h1: 50,
                x2: 385,
                y2: 200,
                w2: 50,
                h2: 50,
                x3: 385,
                y3: 200,
                w3: 50,
                h3: 50,
                x4: 785,
                y4: 400,
                w4: 50,
                h4: 50
            };
            break;
    }
}
levelstart();