



var canvas = document.getElementById("canvas-game");
var x_rect=0; 
var y_rect=0; 

var objects = [{id:1, x:0,y:0,width:160,height:120,color:"black"},
    {id:2, x:300,y:300,width:160,height:120,color:"blue"},
    {id:3, x:600,y:600,width:160,height:120,color:"hotpink"},
{id:4, x:700,y:700,width:160,height:120,color:"red"}]


var follow = false;
var ctx = canvas.getContext("2d");
var img = document.getElementById("ken");
var x_offset=0; 
var y_offset=0; 

var element=0;


window.addEventListener('load', function() {



ctx.drawImage(img,0,0,canvas.clientWidth,canvas.clientHeight)


for (const i of objects) {
    ctx.fillStyle = i.color; 
    ctx.fillRect(i.x,i.y,i.width,i.height)
}

 

}
) 
function get_mouse_position(canvas, event) {
    const rect = canvas.getBoundingClientRect(); 
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    return [x,y]
}

function mouse_in_object(x,y) {
for (let i=0; i<objects.length; i++) {
    const o = objects[i]; 
  if (x>=o.x && x<= o.x+o.width && y >= o.y && y <= o.y+o.height) {
   follow=true; 
   x_offset= x - o.x; 
   y_offset = y - o.y;
   element=o.id; 
   console.log("ok");

   canvas.style.cursor = "grabbing";
}
}
}

function paint() {
   
   ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
   
   ctx.drawImage(img,0,0,canvas.clientWidth,canvas.clientHeight)
   for (let i=0; i<objects.length; i++) {
      const o = objects[i]
      ctx.fillStyle = o.color; 
      ctx.fillRect(o.x,o.y,o.width,o.height)
   }
   
}



canvas.addEventListener('mousedown', function(e) {

const [x_mouse,y_mouse] = get_mouse_position(canvas, e);
mouse_in_object(x_mouse,y_mouse)
})

canvas.addEventListener('mousemove',function(e) {
    if (follow) {
        const rect = canvas.getBoundingClientRect(); 
        for (let i=0; i<objects.length; i++) {
            const o= objects[i]
            if (element==o.id) {
                 o.x = e.clientX - rect.left;
                 o.y = e.clientY - rect.top;
            }
        }
        

        paint()
    }
})

canvas.addEventListener("mouseup", () => {
    follow = false;
    element=0; 
    canvas.style.cursor = "grab";
    console.log("souris relachée"); 
});

canvas.addEventListener("mouseleave", () => {
    follow = false;
    element=0;
    canvas.style.cursor = "grab";
    console.log("hors limites");
});





