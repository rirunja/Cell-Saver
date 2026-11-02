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
var grab4 = false;
var grab5=false; 
var grab6=false; 
var btn2;
var btn4;
var btn8; 
var btn10;
var btn12; 
var no_hold=true;
var count_press=0; 
var souris_enfoncée = null; 
var duree_maintenue = 0; 





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
        case 3*s:
         if (no_hold) { 
           if (grab) {
              grab = false; 
              grab4 = false; 
              if (btn8.b1.x >= btn8.b2.x && btn8.b1.x <= btn8.b2.x + btn8.b2.w && btn8.b1.y >= btn8.b2.y && btn8.b1.y <= btn8.b2.y + btn8.b2.h) {
                no_hold = false; 
              }

           } else {
              if (x >= btn8.b1.x && x <= btn8.b1.x + btn8.b1.w && y >= btn8.b1.y && y <= btn8.b1.y + btn8.b1.h) {
                
                      grab = true;
                      grab4 = true; 
                    
                  }
          }

         } 
         
        else {
           
         }

        
           break; 
        case 4*s:
            if (grab) {
                grab = false; 
                grab5 = false; 
                if (btn10.b1.x >= btn10.b2.x && btn10.b1.x <= btn10.b2.x + btn10.b2.w && btn10.b1.y >= btn10.b2.y && btn10.b1.y <= btn10.b2.y + btn10.b2.h) {
                    etape+=s; 
                    levelstart(); 

                }
            } 

            else {
               if (x >= btn10.b1.x && x <= btn10.b1.x + btn10.b1.w && y >= btn10.b1.y && y <= btn10.b1.y + btn10.b1.h)  {
                grab = true; 
                grab5 = true; 
               }
            }

          break;
        case 5*s: 
          if (no_hold) {
           if (grab) {
             grab = false; 
             grab6 = false; 
             if (btn12.b3.x >= btn12.b1.x &&  btn12.b3.x <= btn12.b1.x + btn12.b1.w/2 && btn12.b3.y >= btn12.b1.y && btn12.b3.y <= btn12.b1.y + btn12.b1.h/2 ) {
                 no_hold=false; 
                 
             }

           }

           else {
              if (Math.sqrt((x - btn12.b3.x ) * ( x - btn12.b3.x ) + ( y - btn12.b3.y ) * ( y - btn12.b3.y)) < btn12.b3.r) {
                grab = true; 
                grab6 = true; 
              }
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
        case 2*s:/*         **********NE PAS DECOMMENTER**********
            c.drawImage(bg, 0, 0, cw, ch);
            if (grab){
                if (grab && y>= btn4.w2 / 2 && y <= ch - btn4.w2 / 2) {
                    btn4.y2 = y - btn4.w2/2;
                    c.fillStyle = "rgba(0, 0, 255, 0.3)";
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
                    c.fillStyle = "rgba(0, 0, 255, 0.3)";
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
                //c.fillRect(btn4.b2, btn4.b2.y, btn4.b2.w, btn4.b2.h);**********NE PAS DECOMMENTER**********
                //c.fillRect(btn4.x3, btn4.y3, btn4.w3, btn4.h3);
            }else {
                c.fillRect(btn4.b1.x, btn4.b1.y, btn4.b1.w, btn4.b1.h);

            }c.fillRect(btn4.b4.x, btn4.b4.y, btn4.b4.w, btn4.b4.h);
            break;
        case 3*s: 
          c.drawImage(bg, 0, 0, cw, ch);
          
           if (grab && (y> btn8.b1.h || y<btn8.b1.h)) {
             
                movey(y, btn8.b1);
                btn8.b4.x=btn8.b1.x+40; 
                btn8.b3.x=btn8.b1.x
                
                
            }
            if (grab && (x> btn8.b1.w || x<btn8.b1.w)) {
               
                movex(x, btn8.b1);
               
                btn8.b3.y=btn8.b1.y-20
                btn8.b4.y=btn8.b1.y-20
              
            }
            c.fillRect(btn8.b1.x, btn8.b1.y, btn8.b1.w, btn8.b1.h);
            c.fillRect(btn8.b2.x, btn8.b2.y, btn8.b2.w, btn8.b2.h);
            c.fillRect(btn8.b3.x, btn8.b3.y, btn8.b3.w, btn8.b3.h);
            c.fillRect(btn8.b4.x, btn8.b4.y, btn8.b4.w, btn8.b4.h);
            break; 
        case 4*s: 
           c.drawImage(bg, 0, 0, cw, ch);

           if (grab && (y>btn10.b1.h || y<btn10.b1.h)) {
            movey(y,btn10.b1); 
           } 

           if (grab && (x> btn10.b1.w || x<btn10.b1.w)) {
               
            movex(x, btn10.b1);
           }
           c.fillRect(btn10.b1.x, btn10.b1.y, btn10.b1.w, btn10.b1.h);
           c.fillRect(btn10.b2.x, btn10.b2.y, btn10.b2.w, btn10.b2.h);
           c.fillRect(btn10.b3.x, btn10.b3.y, btn10.b3.w, btn10.b3.h);


           break; 

        case 5*s: 
           c.drawImage(bg, 0, 0, cw, ch); 

           if (grab && (x > btn12.b3.x || x < btn12.b3.x)) {
              circle_movex(x,btn12.b3); 
           }
           if (grab && (y > btn12.b3.y || y < btn12.b3.y)) {
              circle_movey(y,btn12.b3);
           }
           c.fillRect(btn12.b1.x, btn12.b1.y, btn12.b1.w, btn12.b1.h);
           c.beginPath(); 
           c.arc(btn12.b2.x,btn12.b2.y,btn12.b2.r,0,Math.PI*2,false); 
           c.fill(); 
           c.closePath(); 
           c.fillStyle = "white"; 
           c.beginPath(); 
           c.arc(btn12.b3.x,btn12.b3.y,btn12.b3.r,0,Math.PI*2,false); 
           c.fill(); 
           c.closePath(); 
           c.fillStyle = "rgba(120,12,65,1)"; 

           
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
        case 2*s:/* **********NE PAS DECOMMENTER**********
            c.fillStyle = "rgba(0, 0, 255, 1)";
            btn4={
                b1: {
                x: 385,
                y: 200,
                w: 50,
                h: 50
            }, 
                b2: {
                x: 385,
                y: 200,
                w: 50,
                h: 800
            },
                b3: {
                    x: 385,
                y: 200,
                w: 50,
                h: 800
            }, 

             b4 :  {
                x: 785,
                y: 400,
                w: 50,
                h: 50
            }};
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
            //console.log(btn4.b1.x);
            break;
        case 3*s: 
            c.fillStyle = "rgba(202,78,23,1)"; 
            btn8= {
              b1:{
                x: 385, 
                y: 200, 
                w: 50, 
                h: 180
            },
              b2:{
                x: 600, 
                y: 300, 
                w: 50, 
                h: 10
            },
              b3:{
                x: 385, 
                y: 180, 
                w: 10,
                h: 10
            },
              b4:{
                x: 425, 
                y: 180, 
                w: 10,
                h: 10
            }


           
        };
         break; 

        case 4*s:
            c.fillStyle = "rgba(65,89,185,1)";
            btn10= {
                b1: { 
                  x : 120, 
                  y : 145, 
                  w : 70, 
                  h : 150
                }, 
                b2: {
                  x : 520, 
                  y : 300, 
                  w : 200, 
                  h : 10
                },
                b3: {
                  x : 520,
                  y : 300, 
                  w : 10,
                  h : 200
                }
            }
            break;  

        case 5*s: 
          c.fillStyle = "rgba(120,12,65,1)"; 
          btn12 = {
            b1: {
                x : 700, 
                y : 377, 
                w : 45, 
                h : 175
            },

           b2 :  {
                x : 725,
                y : 350,
                r : 45
            }, 

            b3 : {
                x : 120, 
                y : 500, 
                r : 25
            }


          }
          break; 

    }
}

canvas.addEventListener("dblclick",function(event) {
    switch (etape) {
        case 3*s:  
         
            c.drawImage(bg, 0, 0, cw, ch);
            const{ offsetX:x, offsetY:y } = event;
            if (!no_hold) {
              
                if (x >= btn8.b3.x && x <= btn8.b3.x + btn8.b3.w && y >= btn8.b3.y && y <= btn8.b3.y + btn8.b3.h && btn8.b3.y<btn8.b1.y-10) {
                    btn8.b3.y+=2; 


                }

                if (x >= btn8.b4.x && x <= btn8.b4.x + btn8.b4.w && y >= btn8.b4.y && y <= btn8.b4.y + btn8.b4.h && btn8.b4.y<btn8.b1.y-10) {
                    btn8.b4.y+=2; 
                }
                
                if (btn8.b4.y == btn8.b1.y-10 && btn8.b3.y == btn8.b1.y-10) {
                    no_hold=true; 
                    etape+=s; 
                    levelstart();
                }
            }


            c.fillRect(btn8.b1.x, btn8.b1.y, btn8.b1.w, btn8.b1.h);
            c.fillRect(btn8.b2.x, btn8.b2.y, btn8.b2.w, btn8.b2.h);
            c.fillRect(btn8.b3.x, btn8.b3.y, btn8.b3.w, btn8.b3.h);
            c.fillRect(btn8.b4.x, btn8.b4.y, btn8.b4.w, btn8.b4.h);
            break;
       
    
        


            
            
    }


})
 
canvas.addEventListener("mousedown",function(event) {
    switch (etape) {
       case 5*s: 
           const{offsetX:x2, offsetY:y2} = event;
           if ((!no_hold) && Math.sqrt((x2 - btn12.b3.x ) * ( x2 - btn12.b3.x ) + ( y2 - btn12.b3.y ) * ( y2 - btn12.b3.y)) < btn12.b3.r) {
            souris_enfoncée = Date.now(); 
         
          }
           break;
    }
})


canvas.addEventListener("mouseup",function(event) {
    switch (etape) {
        case 5*s:
            const{offsetX:x2, offsetY:y2} = event;
            if (!no_hold && Math.sqrt((x2 - btn12.b3.x ) * ( x2 - btn12.b3.x ) + ( y2 - btn12.b3.y ) * ( y2 - btn12.b3.y)) < btn12.b3.r) {
                if (souris_enfoncée != null) {

                    duree_maintenue = (Date.now() - souris_enfoncée)/1000; 
                    
                    if (duree_maintenue>=2.5) {
                        no_hold=true; 
                        etape+=s; 
                        levelstart(); 
                    }
                    else {
                    duree_maintenue=0;
                    }
                }
            }
            break; 


    }




})




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

function circle_movey(y,b) {
    b.y = y;
}

function circle_movex(x,b) {
    b.x = x; 
}

function circle_movexy(x,y,b) {
    b.x = x; 
    b.y = y; 
}













levelstart();