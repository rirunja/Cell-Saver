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

var etape = 8;
var grab = false;
var grab1 = false;
var grab2 = false;
var grab4 = false;
var btn2;
var btn4;
var btn8; 




canvas.addEventListener("click", function(event) {
    const{ offsetX:x, offsetY:y } = event;
    switch (etape) {
        case 0:
            c.fillStyle = "rgba(255, 0, 0, 1)";
            if (x >= btn.b1.x && x <= btn.b1.x + btn.b1.w && y >= btn.b1.y && y <= btn.b1.y + btn.b1.h) {
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
                if (10>= btn2.b1.y && 10>= btn2.b2.y) {
                    etape += s;
                    levelstart();
                }
            }else {
                if (x >= btn2.b1.x && x <= btn2.b1.x + btn2.b1.w && y >= btn2.b1.y && y <= btn2.b1.y + btn2.b1.h) {
                    grab1 = true;
                    grab = true;
                }
                if (x >= btn2.b2.x && x <= btn2.b2.x + btn2.b2.w && y >= btn2.b2.y && y <= btn2.b2.y + btn2.b2.h) {
                    grab2 = true;
                    grab = true;
                }
            }
            break;
        case 2*s:
            if (grab) {
                grab = false;
                if (x >= btn4.b4.x && x <= btn4.b4.x + btn4.b4.w && y >= btn4.b4.y && y <= btn4.b4.y + btn4.b4.h) {
                    etape += s;
                    levelstart();
                }
            }else {
                if (x >= btn4.b1.x && x <= btn4.b1.x + btn4.b1.w && y >= btn4.b1.y && y <= btn4.b1.y + btn4.b1.h) {
                    grab = true;
                }
            }
           
            break;
        case 4*s: 
        if (grab) {
            grab = false; 
            grab4 = false;
            if (x >= bnt8.x2 && x <= bnt8.x2 + bnt8.w2 && y >= bnt8.y2 && y <= bnt8.y2 + bnt8.h2) {
                console.log("ok");
            }

        } else {
            if (x >= bnt8.x1 && x <= bnt8.x1 + bnt8.w1 && y >= bnt8.y1 && y <= bnt8.y1 + bnt8.h1) {
                console.log("catch");
                    grab = true;
                    grab4 = true; 
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
            c.fillRect(btn.b1.x, btn.b1.y, btn.b1.w, btn.b1.h);
            c.fillStyle = "rgba(255, 255, 255, 1)";
            c.fillText("Cliquez sur le bouton pour commencer", btn.b1.x + 5, btn.b1.y + btn.b1.h / 2 );
            break;
        case 1*s:
            c.drawImage(bg, 0, 0, cw, ch);
            if (grab1 && y>= btn2.b1.h / 2 && y <= 300 - btn2.b1.h / 2) {
                movey(y, btn2.b1);
            }
            if (grab2 && y>= btn2.b2.h / 2 && y <= 300 - btn2.b2.h / 2) {
                movey(y, btn2.b2);
            }
            c.fillRect(btn2.b1.x, btn2.b1.y, btn2.b1.w, btn2.b1.h);
            c.fillRect(btn2.b2.x, btn2.b2.y, btn2.b2.w, btn2.b2.h);
            break;
        case 2*s:
            c.drawImage(bg, 0, 0, cw, ch);
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
        case 3*s:
            c.drawImage(bg, 0, 0, cw, ch);
            if (grab){
                if (grab && x>= btn4.b3.w / 2 && x <= cw - btn4.b3.w / 2) {
                    if (y>btn4.b1.y + btn4.b1.h * 0.5) {
                        btn4.b3.h = y - btn4.b3.y - btn4.b3.w / 2;
                        btn4.b3.y = btn4.b1.y;
                    }else{
                        btn4.b3.h = btn4.b1.y - y + btn4.b3.w / 2;
                        stmovey(y,btn4.b3, btn4.b1.h);
                    }
                    
                }
                if (grab && y>= btn4.b2.h / 2 && y <= ch - btn4.b2.h / 2) {
                    movey(y, btn4.b2);
                    //c.fillStyle = "rgba(0, 0, 255, 0.3)";
                }
                if (grab && x>= btn4.b1.w / 2 && x <= cw - btn4.b1.w / 2) {
                    if (x>btn4.b2.x + btn4.b2.w / 2) {
                        btn4.b2.w = x - btn4.b2.x + btn4.b2.h / 2;
                        fixex(btn4.b2, btn4.b1);
                    }else{
                        btn4.b2.w = btn4.b1.x - x + btn4.b2.h *1.5;
                        btn4.b2.x = x - btn4.b1.w / 2;
                        stmovex(x,btn4.b2, btn4.b1.w);
                    }
                }
                c.drawImage(cyn, btn4.b2.x, btn4.b2.y, btn4.b2.w, btn4.b2.h);
                c.drawImage(cyn, btn4.b3.x, btn4.b3.y, btn4.b3.w, btn4.b3.h);
                //c.fillRect(btn4.b2, btn4.b2.y, btn4.b2.w, btn4.b2.h);
                //c.fillRect(btn4.x3, btn4.y3, btn4.w3, btn4.h3);
            }else {
                c.fillRect(btn4.b1.x, btn4.b1.y, btn4.b1.w, btn4.b1.h);

            }c.fillRect(btn4.b4.x, btn4.b4.y, btn4.b4.w, btn4.b4.h);
            break;
        case 4*s: 
          c.drawImage(bg, 0, 0, cw, ch);
            

    }c.fillRect(0, 0, 100, 100);
    /*c.fillRect(400, y - 50, 50, 100);
    c.fillRect(x - 50, 300, 100, 50);
    c.fillRect(x - 50, y - 50, 100, 50);*/
});

function levelstart() {
    switch (etape) {
        case 0:
            btn = {
                b1:{
                    x: cw / 2 - 100,
                    y: ch / 2 - 50,
                    w: 200,
                    h: 100
                }
            };
            break;
        case 1*s:
            btn2={
                b1:{
                    x: 385,
                    y: 200,    
                    w: 50,
                    h: 100
                },
                b2:{
                    x: 885,
                    y: 200,
                    w: 50,
                    h: 100
                }
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
                b1:{
                    x: 385,
                    y: 200,
                    w: 50,
                    h: 50
                },
                b2:{
                    x: 385,
                    y: 200,
                    w: 50,
                    h: 50
                },
                b3:{
                    x: 385,
                    y: 200,
                    w: 50,
                    h: 50},
                b4:{
                    x: 785,
                    y: 400,
                    w: 50,
                    h: 50
                }
                
                
                
            };
            console.log(btn4.b1.x);
            break;
        case 4*s: 
        c.fillStyle = "rgba(202,78,23,1)"; 
        bnt8= {
           x1: 385, 
           y1: 200, 
           w1: 50, 
           h1: 180,
           x2: 600, 
           y2: 300, 
           w2: 300, 
           h2: 20
        };
        break; 

        
    }
}

function movey(y,b) {
    b.y = y - b.h / 2;
}
function movex(x,b) {
    b.x = x - b.w / 2;
}
function movexy(x,y,b) {
    b.x = x - b.w / 2;
    b.y = y - b.h / 2;
}
function stmovexy(x,y,b,w,h) {
    b.x = x - w / 2;
    b.y = y - h / 2;
}
function stmovex(x,b,w) {
    b.x = x - w / 2;
}
function stmovey(y,b,h) {
    b.y = y - h / 2;
}
function fixey(b,b2) {
    b.y = b2.y;
}
function fixex(b,b2) {
    b.x = b2.x;
}














levelstart();