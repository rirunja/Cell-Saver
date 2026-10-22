var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cw = canvas.width;
const ch = canvas.height;


var c = canvas.getContext("2d");

c.fillStyle = "rgba(0, 0, 0, 1)";

let bg = new Image();
bg.src = "./images/titre.jpg";
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
var bnt2;
var bnt4;




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
                if (10>= bnt2.y1 && 10>= bnt2.y2) {
                    etape += s;
                    levelstart();
                }
            }else {
                if (x >= bnt2.x1 && x <= bnt2.x1 + bnt2.w1 && y >= bnt2.y1 && y <= bnt2.y1 + bnt2.h1) {
                    grab1 = true;
                    grab = true;
                }
                if (x >= bnt2.x2 && x <= bnt2.x2 + bnt2.w2 && y >= bnt2.y2 && y <= bnt2.y2 + bnt2.h2) {
                    grab2 = true;
                    grab = true;
                }
            }
            break;
        case 2*s:
            if (grab) {
                grab = false;
                if (x >= bnt4.x4 && x <= bnt4.x4 + bnt4.w4 && y >= bnt4.y4 && y <= bnt4.y4 + bnt4.h4) {
                    etape += s;
                    levelstart();
                }
            }else {
                if (x >= bnt4.x1 && x <= bnt4.x1 + bnt4.w1 && y >= bnt4.y1 && y <= bnt4.y1 + bnt4.h1) {
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
            if (grab1 && y>= bnt2.h1 / 2 && y <= 300 - bnt2.h1 / 2) {
                bnt2.y1 = y - bnt2.h1 / 2;
            }
            if (grab2 && y>= bnt2.h2 / 2 && y <= 300 - bnt2.h2 / 2) {
                bnt2.y2 = y - bnt2.h2 / 2;
            }
            c.fillRect(bnt2.x1, bnt2.y1, bnt2.w1, bnt2.h1);
            c.fillRect(bnt2.x2, bnt2.y2, bnt2.w2, bnt2.h2);
            break;
        case 2*s:  
            c.drawImage(bg, 0, 0, cw, ch);
            if (grab){
                if (grab && y>= bnt4.w2 / 2 && y <= ch - bnt4.w2 / 2) {
                    bnt4.y2 = y - bnt4.w2/2;
                    //c.fillStyle = "rgba(0, 0, 255, 0.3)";
                }
                if (grab && x>= bnt4.w2 / 2 && x <= cw - bnt4.w2 / 2) {
                    bnt4.x2 = x - bnt4.w2/2;
                }
                c.fillRect(bnt4.x2, bnt4.y2, bnt4.w2, bnt4.h2);
                c.fillRect(bnt4.x3, bnt4.y3, bnt4.w3, bnt4.h3);
            }else {
                c.fillRect(bnt4.x1, bnt4.y1, bnt4.w1, bnt4.h1);

            }c.fillRect(bnt4.x4, bnt4.y4, bnt4.w4, bnt4.h4);
            break;
        case 3*s:
            c.drawImage(bg, 0, 0, cw, ch);
            c.beginPath();
            c.arc(400, 300, 50, 0, Math.PI);
            c.fill();

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
            bnt2={
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
        case 2*s:
            c.fillStyle = "rgba(0, 0, 255, 1)";
            bnt4={
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
        case 3*s:
            c.fillStyle = "rgba(255, 0, 255, 1)";
            c.beginPath();
            c.arc(400, 300, 50, 5, Math.PI);
            //c.fill();
            break;
    }
}
levelstart();
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

var etape = 6;
var grab = false;
var grab1 = false;
var grab2 = false;
var bnt2;
var bnt4;




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
                if (10>= bnt2.y1 && 10>= bnt2.y2) {
                    etape += s;
                    levelstart();
                }
            }else {
                if (x >= bnt2.x1 && x <= bnt2.x1 + bnt2.w1 && y >= bnt2.y1 && y <= bnt2.y1 + bnt2.h1) {
                    grab1 = true;
                    grab = true;
                }
                if (x >= bnt2.x2 && x <= bnt2.x2 + bnt2.w2 && y >= bnt2.y2 && y <= bnt2.y2 + bnt2.h2) {
                    grab2 = true;
                    grab = true;
                }
            }
            break;
        case 2*s,3*s:
            if (grab) {
                grab = false;
                if (x >= bnt4.x4 && x <= bnt4.x4 + bnt4.w4 && y >= bnt4.y4 && y <= bnt4.y4 + bnt4.h4) {
                    etape += s;
                    levelstart();
                }
            }else {
                if (x >= bnt4.x1 && x <= bnt4.x1 + bnt4.w1 && y >= bnt4.y1 && y <= bnt4.y1 + bnt4.h1) {
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
            if (grab1 && y>= bnt2.h1 / 2 && y <= 300 - bnt2.h1 / 2) {
                bnt2.y1 = y - bnt2.h1 / 2;
            }
            if (grab2 && y>= bnt2.h2 / 2 && y <= 300 - bnt2.h2 / 2) {
                bnt2.y2 = y - bnt2.h2 / 2;
            }
            c.fillRect(bnt2.x1, bnt2.y1, bnt2.w1, bnt2.h1);
            c.fillRect(bnt2.x2, bnt2.y2, bnt2.w2, bnt2.h2);
            break;
        case 2*s:
            /*c.drawImage(bg, 0, 0, cw, ch);
            if (grab){
                if (grab && y>= bnt4.w2 / 2 && y <= ch - bnt4.w2 / 2) {
                    bnt4.y2 = y - bnt4.w2/2;
                    //c.fillStyle = "rgba(0, 0, 255, 0.3)";
                }
                if (grab && x>= bnt4.w2 / 2 && x <= cw - bnt4.w2 / 2) {
                    bnt4.x2 = x - bnt4.w2/2;
                }
                c.fillRect(bnt4.x2, bnt4.y2, bnt4.w2, bnt4.h2);
                c.fillRect(bnt4.x3, bnt4.y3, bnt4.w3, bnt4.h3);
            }else {
                c.fillRect(bnt4.x1, bnt4.y1, bnt4.w1, bnt4.h1);

            }c.fillRect(bnt4.x4, bnt4.y4, bnt4.w4, bnt4.h4);
            break;
        case 3*s:*/
            if (grab){
                if (grab && x>= bnt4.w3 / 2 && x <= cw - bnt4.w3 / 2) {
                    if (y>bnt4.y1 + bnt4.h1 * 0.5) {
                        bnt4.h3 = y - bnt4.y3 - bnt4.w3 / 2;
                        bnt4.y3 = bnt4.y1;
                    }else{
                        bnt4.h3 = bnt4.y1 - y + bnt4.w3 / 2;
                        bnt4.y3 = y + bnt4.w1 / 2;
                    }
                    
                }
                if (grab && y>= bnt4.h2 / 2 && y <= ch - bnt4.h2 / 2) {
                    bnt4.y2 = y - bnt4.h2/2;
                    //c.fillStyle = "rgba(0, 0, 255, 0.3)";
                }
                if (grab && x>= bnt4.w1 / 2 && x <= cw - bnt4.w1 / 2) {
                    if (x>bnt4.x2 + bnt4.w2 / 2) {
                        bnt4.w2 = x - bnt4.x2 + bnt4.h2 / 2;
                        bnt4.x2 = bnt4.x1;
                    }else{
                        bnt4.w2 = bnt4.x1 - x + bnt4.h2 *1.5;
                        bnt4.x2 = x - bnt4.h2 / 2;
                    }
                }
                c.drawImage(cyn, bnt4.x2, bnt4.y2, bnt4.w2, bnt4.h2);
                c.drawImage(cyn, bnt4.x3, bnt4.y3, bnt4.w3, bnt4.h3);
                //c.fillRect(bnt4.x2, bnt4.y2, bnt4.w2, bnt4.h2);
                //c.fillRect(bnt4.x3, bnt4.y3, bnt4.w3, bnt4.h3);
            }else {
                c.fillRect(bnt4.x1, bnt4.y1, bnt4.w1, bnt4.h1);

            }c.fillRect(bnt4.x4, bnt4.y4, bnt4.w4, bnt4.h4);
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
            bnt2={
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
        case 2*s:
            c.fillStyle = "rgba(0, 0, 255, 1)";
            bnt4={
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
        case 3*s:
            c.fillStyle = "rgba(255, 0, 255, 1)";
            bnt4={
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