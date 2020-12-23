var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="pink";
radius="2";
width_of_line=3;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
  color=document.getElementById("color").value;
  width=document.getElementById("width").value;
  radius=document.getElementById("radius").value;
  mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseUp";
};

canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseUp(e){
    mouseEvent="mouseLeave";
};

canvas.addEventListener("mousemove",myMouseMove);

function myMouseMove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width_of_line;
     ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI)
     console.log("last position of x and y coordinates = ");
     console.log("X = " + lastPositionX +",Y= " + lastPositionY);
     ctx.moveTo(lastPositionX,lastPositionY);
     console.log("current position of x and y coordinates = ");
     console.log( "X = " + current_position_of_mouse_x +",Y= " + current_position_of_mouse_y);
     ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
     ctx.stroke();
     
    }

    lastPositionX=current_position_of_mouse_x;
    lastPositionY=current_position_of_mouse_y;
}



