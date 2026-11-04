var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cw = canvas.width;
const ch = canvas.height;

/**Ajout d'un minuteur, de consignes  et d'un "tire d'appréciation" sur la performance 
 * (bien, moyen, nul) par rapport aux personnes (15 minutes pur les débutants, 7 minutes pour les experts*/
var c = canvas.getContext("2d");

c.fillStyle = "rgba(0, 0, 0, 1)";

let bg = new Image();
bg.src = "./images/titre.jpg";
let cyn = new Image();
cyn.src = "./images/cyn.jpeg";
let materiel = new Image(); 
materiel.src = "./images/ILL-planche_composants_cell_saver_xtra_calques copie.svg"; 


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

var etape = 0*s;
var grab = false;
var grab1 = false;
var grab2 = false;
var grab4 = false;
var grab5=false; 
var grab6=false; 
var btn2;
var btn4;
var btn4; 
var btn10;
var btn12; 
var no_hold=true;
var lock;
var count_press=0; 
var souris_enfoncée = null; 
var duree_maintenue = 0; 
var gauche_ouvert = false; 
var droite_ouvert = false;
var haut_ouvert = false;
var bas_ouvert = false;
var ouverture = false; 





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
               console.log(x,y);
                if (grab) {
                    grab = false; 
                    grab4 = false; 
                    if (btn4.b1.x >= btn4.b2.x && btn4.b1.x <= btn4.b2.x + btn4.b2.w && btn4.b1.y+30 >= btn4.b2.y && btn4.b1.y+30 <= btn4.b2.y + btn4.b2.h) {
                        no_hold = false; 
                    }

                } else {
                    if (x >= btn4.b1.x && x <= btn4.b1.x + btn4.b1.w && y >= btn4.b1.y && y <= btn4.b1.y + btn4.b1.h) {
                        
                        grab = true;
                        grab4 = true; 
                        
                    }
                }

            } 
            
            else {
            
            }

        
            break; 


        case 6*s:
            if (grab) {
                grab = false;
                grab1 = false;
                grab2 = false;
                if (!lock.b1 && !lock.b2 && !lock.b3 && !lock.b4 && btn4.b3.x >= btn4.b1.x - btn4.b3.w/2 && btn4.b3.x <= btn4.b1.x + btn4.b1.w + btn4.b3.w/2 && btn4.b3.y >= btn4.b1.y - btn4.b3.h/2 && btn4.b3.y <= btn4.b1.y + btn4.b1.h + btn4.b3.h/2 && btn4.b4.x >= btn4.b2.x - btn4.b4.w/2 && btn4.b4.x <= btn4.b2.x + btn4.b2.w + btn4.b4.w/2 && btn4.b4.y >= btn4.b2.y - btn4.b4.h/2 && btn4.b4.y <= btn4.b2.y + btn4.b2.h + btn4.b4.h/2) {
                    etape += s;
                    levelstart();
                }
            }else {
                if (!lock.b3 && x >= btn4.b3.x && x <= btn4.b3.x + btn4.b3.w && y >= btn4.b3.y && y <= btn4.b3.y + btn4.b3.h) { 
                    grab = true;
                    grab1 = true;
                }else if (!lock.b4 && x >= btn4.b4.x && x <= btn4.b4.x + btn4.b3.w && y >= btn4.b4.y && y <= btn4.b4.y + btn4.b3.h) {
                    grab = true;
                    grab2 = true;
                }
            }
            break;
        case 4*s:
            console.log(x,y);
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
        case 7*s : 
        if (!ouverture) {
          if (x >= btn2.b1.x && x <= btn2.b1.x + btn2.b1.w && y >= btn2.b1.y && y <= btn2.b1.y + btn2.b1.h) { 
             const cx = btn2.b1.x + btn2.b1.w/2;
             const cy = btn2.b1.y + btn2.b1.h/2; 
             const rx = btn2.b1.x; 
             const ry = btn2.b1.y; 
             const rw = btn2.b1.w; 
             const rh = btn2.b1.h; 
             const triangles = [[{rx , ry}, {rx:rx+rw , ry}, {rx:cx , ry:cy}], 
                                [{rx:rx+rw , ry} , {rx:rx+rw , ry:ry+rh}, {rx:cx , ry:cy}],
                                [{rx:rx+rw , ry:ry+rh}, {rx , ry:ry+rh}, {rx:cx , ry:cy}],
                                [{rx , ry:ry+rh}, {rx , ry}, {rx:cx , ry:cy}]]; 
             
            var index = -1; 

            for (let i = 0; i < triangles.length; i++) {
                if (dot_in_triangle({rx:x,ry:y},triangles[i][0],triangles[i][1],triangles[i][2])) {
                    index=i; 
                }
            }
            if (index !== -1) {
               switch (index) {
                case 0: 
                   haut_ouvert = true; 
                   break; 
                case 1:
                   droite_ouvert = true;
                   break; 
                case 2:
                    bas_ouvert = true; 
                    break;
                case 3: 
                    gauche_ouvert = true;
                    break;   
               }
            }

            if (haut_ouvert && droite_ouvert && bas_ouvert && gauche_ouvert) {
                ouverture=true;        
            }
        



            
             
             


          }
        }

        else {
           if (x >= btn2.b2.x && x <= btn2.b2.x + btn2.b2.w && y >= btn2.b2.y && y <= btn2.b2.y + btn2.b2.h) {
            ouverture=false; 
            etape+=s; 
            levelstart(); 

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
                c.drawImage(materiel,765,280,140,30, btn4.b2.x, btn4.b2.y, btn4.b2.w, btn4.b2.h);
                c.drawImage(materiel,900,280,30,235, btn4.b3.x, btn4.b3.y, btn4.b3.w, btn4.b3.h);
                //c.fillRect(btn4.b2, btn4.b2.y, btn4.b2.w, btn4.b2.h);**********NE PAS DECOMMENTER**********
                //c.fillRect(btn4.x3, btn4.y3, btn4.w3, btn4.h3);
            }else {
                c.fillRect(btn4.b1.x, btn4.b1.y, btn4.b1.w, btn4.b1.h);

            }c.fillRect(btn4.b4.x, btn4.b4.y, btn4.b4.w, btn4.b4.h);
            break;
        case 3*s: 
          c.drawImage(bg, 0, 0, cw, ch);
          
           if (grab4 && (y> btn4.b1.h || y<btn4.b1.h)) {
             
                movey(y, btn4.b1);
                btn4.b4.x=btn4.b1.x+90; 
                btn4.b3.x=btn4.b1.x
                
                
            }
            if (grab4 && (x> btn4.b1.w || x<btn4.b1.w)) {
               
                movex(x, btn4.b1);
               
                btn4.b3.y=btn4.b1.y+4
                btn4.b4.y=btn4.b1.y+4
              
            }
            c.drawImage(materiel, 635, 137, 123, 140, btn4.b1.x, btn4.b1.y, btn4.b1.w, btn4.b1.h);
            machine();
            c.fillStyle = "rgb(250, 250, 250)";
            c.fillRect(btn4.b3.x, btn4.b3.y, btn4.b3.w, btn4.b3.h);
            c.fillRect(btn4.b4.x, btn4.b4.y, btn4.b4.w, btn4.b4.h);
            c.fillStyle = "rgba(25,25,175,1)"; 
            break; 
        
        case 6*s:
            if (grab1) {
                btn4.b3.y = y - btn4.b3.h / 2;
                btn4.b3.x = x - btn4.b3.w / 2;
            }
            if (grab2) {
                btn4.b4.y = y - btn4.b3.h / 2;
                btn4.b4.x = x - btn4.b3.w / 2;
            }
            if (grab) {
                btn4.b4.w = Math.max(btn4.b4.x-btn4.b3.x, btn4.b3.x-btn4.b4.x);
                btn4.b4.h = Math.max(btn4.b4.y-btn4.b3.y, btn4.b3.y-btn4.b4.y);
            }
            c.drawImage(bg, 0, 0, cw, ch);
            c.fillStyle = "rgba(202,78,23,1)";
            c.fillRect(btn4.b1.x, btn4.b1.y, btn4.b1.w, btn4.b1.h);
            c.fillRect(btn4.b2.x, btn4.b2.y, btn4.b2.w, btn4.b2.h);
            c.fillRect(btn4.b3.x, Math.min(btn4.b4.y,btn4.b3.y), btn4.b3.w, btn4.b4.h);
            c.fillRect(Math.min(btn4.b4.x, btn4.b3.x),btn4.b4.y, btn4.b4.w, btn4.b3.h);
            c.drawImage(cyn, btn4.b3.x, btn4.b3.y, btn4.b3.w, btn4.b3.h);
            c.drawImage(cyn, btn4.b3.x, btn4.b4.y, btn4.b3.w, btn4.b3.h);
            c.drawImage(cyn, btn4.b4.x, btn4.b4.y, btn4.b3.w, btn4.b3.h);
            if (lock.b1){
                c.drawImage(bg, btn4.b1.x, btn4.b1.y, btn4.b1.w, btn4.b1.h);
            }
            if (lock.b2){
                c.drawImage(bg, btn4.b2.x, btn4.b2.y, btn4.b2.w, btn4.b2.h);
            }
            if (lock.b3){
                c.drawImage(bg, btn4.b3.x, btn4.b3.y, btn4.b3.w, btn4.b3.h);
            }
            if (lock.b4){
                c.drawImage(bg, btn4.b4.x, btn4.b4.y, btn4.b3.w, btn4.b3.h);
            }
            break;
        case 4*s: 
           c.drawImage(bg, 0, 0, cw, ch);
           
           if (grab && (y>btn10.b1.h || y<btn10.b1.h)) {
            movey(y,btn10.b1); 
           } 

           if (grab && (x> btn10.b1.w || x<btn10.b1.w)) {
               
            movex(x, btn10.b1);
           }
           c.drawImage(materiel, 155, 150, 369, 610, 603, 205, 517, 680);
           c.drawImage(materiel, 778, 750, 120, 120, btn10.b1.x, btn10.b1.y, btn10.b1.w, btn10.b1.h);
           c.drawImage(materiel, 155, 165, 145, 100, 885, 189, 145, 50);
           c.fillRect(btn10.b2.x, btn10.b2.y, btn10.b2.w, btn10.b2.h);
          


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
        case 7*s: 
           c.drawImage(bg, 0, 0, cw, ch);
           

           if (!ouverture) {
           c.fillRect(btn2.b1.x, btn2.b1.y, btn2.b1.w, btn2.b1.h);
           if (haut_ouvert) {
            c.beginPath(); 
            c.moveTo(btn2.b1.x, btn2.b1.y); 
            c.lineTo(btn2.b1.x + btn2.b1.w/2, btn2.b1.y - 30); 
            c.lineTo(btn2.b1.x + btn2.b1.w , btn2.b1.y); 
            c.closePath();
            c.fill();
           }

           if (droite_ouvert) {
            c.beginPath(); 
            c.moveTo(btn2.b1.x + btn2.b1.w, btn2.b1.y); 
            c.lineTo(btn2.b1.x + btn2.b1.w + 30, btn2.b1.y + btn2.b1.h/2); 
            c.lineTo(btn2.b1.x + btn2.b1.w , btn2.b1.y + btn2.b1.h); 
            c.lineTo(btn2.b1.x , btn2.b1.y+btn2.b1.h); 
            c.closePath();
            c.fill(); 
           }

           if (bas_ouvert) {
            c.beginPath(); 
            c.moveTo(btn2.b1.x + btn2.b1.w , btn2.b1.y + btn2.b1.h); 
            c.lineTo(btn2.b1.x + btn2.b1.w/2, btn2.b1.y + btn2.b1.h + 30); 
            c.lineTo(btn2.b1.x , btn2.b1.y+btn2.b1.h); 
            c.closePath();
            c.fill(); 
           }

          if (gauche_ouvert) {
            c.beginPath(); 
            c.moveTo(btn2.b1.x , btn2.b1.y); 
            c.lineTo(btn2.b1.x - 30,btn2.b1.y + btn2.b1.h/2); 
            c.lineTo(btn2.b1.x , btn2.b1.y+btn2.b1.h); 
            c.closePath();
            c.fill(); 
          }

        }

        else {
          c.fillRect(btn2.b2.x, btn2.b2.y, btn2.b2.w, btn2.b2.h); 
        }
      

           

           
          
            

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
            c.fillStyle = "rgba(25,25,175,1)"; 
            btn4= {
                b1:{
                    x: 385, 
                    y: 200, 
                    w: 123, 
                    h: 120
                },
                b2:{
                    x: 600, 
                    y: 300, 
                    w: 110, 
                    h: 10
                },
                b3:{
                    x: 385, 
                    y: 204, 
                    w: 10,
                    h: 10
                },
                b4:{
                    x: 475, 
                    y: 204, 
                    w: 10,
                    h: 10
                }


           
            };break; 
        case 6*s:
            btn4= {
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
                    x: 485, 
                    y: 80,
                    w: 100,
                    h: 100
                }
            };
            lock={
                b1:true,
                b2:true,
                b3:true,
                b4:true,
            }
            break;
        

        case 4*s:
            c.fillStyle = "rgba(65,89,185,1)";
            btn10= {
                b1: { 
                  x : 385, 
                  y : 200, 
                  w : 70, 
                  h : 70
                }, 
                b2: {
                  x : 896, 
                  y : 186, 
                  w : 130, 
                  h : 10
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
        case 7*s: 
          var grad = c.createLinearGradient(0,0,300,300);
          grad.addColorStop(0, 'blue');
          grad.addColorStop(0.25, 'white');
          grad.addColorStop(0.5, 'blue');
          grad.addColorStop(0.75, 'white');
          grad.addColorStop(1, 'blue'); 
          c.fillStyle =  grad; 
          btn2 = {
            b1 : {
               x : 770, 
               y : 458, 
               w : 120, 
               h : 75

            },

            b2 : {
                x : 790, 
                y : 470, 
                w : 70, 
                h : 45
            }
            
          } 
          break; 

    }
}








canvas.addEventListener("dblclick",function(event) {
    const{ offsetX:x, offsetY:y } = event;
    switch (etape) {
        case 3*s:  
         
            c.drawImage(bg, 0, 0, cw, ch);
            
            if (!no_hold) {
              
                if (x >= btn4.b3.x && x <= btn4.b3.x + btn4.b3.w && y >= btn4.b3.y && y <= btn4.b3.y + btn4.b3.h && btn4.b3.y<btn4.b1.y+10) {
                    btn4.b3.y+=2; 


                }

                if (x >= btn4.b4.x && x <= btn4.b4.x + btn4.b4.w && y >= btn4.b4.y && y <= btn4.b4.y + btn4.b4.h && btn4.b4.y<btn4.b1.y+10) {
                    btn4.b4.y+=2; 
                }
                
                if (btn4.b4.y==btn4.b1.y+10 && btn4.b3.y==btn4.b1.y+10) {

                    no_hold=true; 
                    etape+=s; 
                    levelstart();
                }
                
                
            }

            c.drawImage(materiel, 635, 137, 123, 140, btn4.b1.x, btn4.b1.y, btn4.b1.w, btn4.b1.h);
            c.drawImage(materiel, 155, 150, 369, 610, 603, 205, 517, 680);
            c.fillStyle = "rgb(250, 250, 250)";
            c.fillRect(btn4.b3.x, btn4.b3.y, btn4.b3.w, btn4.b3.h);
            c.fillRect(btn4.b4.x, btn4.b4.y, btn4.b4.w, btn4.b4.h);
            c.fillStyle = "rgba(25,25,175,1)";  

                
            break;
        
        case 6*s:
            if (x >= btn4.b1.x && x <= btn4.b1.x + btn4.b1.w && y >= btn4.b1.y && y <= btn4.b1.y + btn4.b1.h) {
                lock.b1 = false;
            }
            if (x >= btn4.b2.x && x <= btn4.b2.x + btn4.b2.w && y >= btn4.b2.y && y <= btn4.b2.y + btn4.b2.h) {
                lock.b2 = false;
            }   
            if (x >= btn4.b3.x && x <= btn4.b3.x + btn4.b3.w && y >= btn4.b3.y && y <= btn4.b3.y + btn4.b3.h) {
                lock.b3 = false;
            }
            if (x >= btn4.b4.x && x <= btn4.b4.x + btn4.b3.w && y >= btn4.b4.y && y <= btn4.b4.y + btn4.b3.h) {
                lock.b4 = false;
            }
            // c.drawImage(cyn, 0, 0, cw, ch);
            break;
       
    
        


            
            
    }


});
 
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
document.addEventListener("keypress",function(event) {
    switch (event.key) {
        case "p":
            etape+=s;
            levelstart();
            break;
        default:
            break;
    }
});


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

function dot_in_triangle(p,a,b,c) { 
     const sign = (p1, p2, p3) => 
     (p1.rx - p3.rx) * (p2.ry - p3.ry) - (p2.rx - p3.rx) * (p1.ry - p3.ry); 
     

     const d1 = sign(p, a, b);
     const d2 = sign(p, b, c);
     const d3 = sign(p, c, a);

     return d1 >= 0.0 && d2 >= 0.0 && d3 >=0.0; 
}

function machine() {
    macx=956;
    macy=348;
    macw=200;
    mach=200*250/90;
    c.drawImage(materiel, 55, 120, 50, 200,  macx-66, macy-128, macw/200*150, mach/200*150);
    c.drawImage(materiel, 192, 120, 50, 250, macx+134, macy-248, macw/150*150, mach/150*150);
    c.drawImage(materiel, 96, 125, 90, 250, macx, macy, macw, mach);
}













levelstart();