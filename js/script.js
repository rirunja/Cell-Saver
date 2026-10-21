



var canvas = document.getElementById("canvas-game");
var x_rect=0; 
var y_rect=0; 
var object = {
    x:x_rect,
    y:y_rect,
    width:160,
    height:80
}

var object = {
    x:x_rect,
    y:y_rect,
    width:160,
    height:80
}
var follow = false;
var ctx = canvas.getContext("2d");
var img = document.getElementById("ken");

window.addEventListener('load', function() {



ctx.drawImage(img,0,0,canvas.clientWidth,canvas.clientHeight)

ctx.fillRect(object.x,object.y,object.width,object.height)

 

}
) 
function get_mouse_position(canvas, event) {
    const rect = canvas.getBoundingClientRect(); 
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    return [x,y]
}

function mouse_in_object(x,y,object) {
if (x>=object.x && x<= object.x+object.width && y >= object.y && y <= object.y+object.height) {
  follow=true; 
  console.log("ok");
}
}

function paint() {
   
   ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
   
   ctx.drawImage(img,0,0,canvas.clientWidth,canvas.clientHeight)
   ctx.fillRect(object.x,object.y,object.width,object.height); 
}
canvas.addEventListener('mousedown', function(e) {

const [x_mouse,y_mouse] = get_mouse_position(canvas, e);
mouse_in_object(x_mouse,y_mouse,object); 




})

canvas.addEventListener('mousemove',function(e) {
    if (follow) {
        const rect = canvas.getBoundingClientRect(); 
        object.x = e.clientX - rect.left;
        object.y = e.clientY - rect.top;

        paint()

    }
})

canvas.addEventListener("mouseup", () => {
    follow = false;
    console.log("souris relachée"); 
});

canvas.addEventListener("mouseleave", () => {
    follow = false;
    console.log("hors limites");
});





