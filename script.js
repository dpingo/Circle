
var canvas=document.getElementById("my_canvas")
ctx=canvas.getContext("2d")
var mouse_event="empty";

var color=document.getElementById("color").value;
var radi=document.getElementById("radius").value;
var line_width=document.getElementById("line_width").value;

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouse_event="mousedown"
    console.log("mousedown1")
}

canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouse_event="mouseup"
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(){
    mouse_event="mouseleave"
}

canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e){
    // mouse_event="mousemove"
    console.log("mousemove"+ "mouse_event=" + mouse_event)
    
    var currentX=e.clientX - canvas.offsetLeft
    var currentY=e.clientY - canvas.offsetTop
    console.log("X- "+currentX)

    if (mouse_event == "mousedown") {
        color=document.getElementById("color").value;
        radi=document.getElementById("radius").value;
        line_width=document.getElementById("line_width").value;
        console.log("circle1111111111111")
        ctx.beginPath()
        console.log("radi=" + radi)
        //It works like a pen down
        ctx.strokeStyle=color;//pen color
        ctx.lineWidth=line_width
        ctx.arc(currentX,currentY,radi,0,2*Math.PI)
        //ctx.strokeStyle="red";//pen color
        //ctx.lineWidth=5
        //ctx.arc(currentX,currentY,5,0,2*Math.PI)
        ctx.stroke()
        //ctx.arc(200(x),200(y),40(r),0(start_angle),2(ending_angle*Math.PI)
    }
}

function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)}
           
