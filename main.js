var canvas=document.getElementById("myCanvas");
var pen=canvas.getContext("2d");
var startX,startY,endX,endY,tracker=0;
window.addEventListener("mousemove",mousemove_action);
window.addEventListener("mouseup",mouseup_action);
window.addEventListener("mousedown",mousedown_action);
function mousemove_action(e){
     startX=e.clientX-canvas.offsetLeft;
     startY=e.clientY-canvas.offsetTop;
    if(tracker==1){
        pen.beginPath();
        pen.lineWidth=3;
        pen.strokeStyle="red";
        pen.moveTo(startX,startY);
        pen.lineTo(endX,endY);
        pen.stroke();
    }
        endX=startX;
        endY=startY;
     }
function mouseup_action(e){
    tracker-0
}function mousedown_action(e){
  tracker-1
  endX=e.clientX-canvas.offsetLeft;
  endY=e.clientY-canvas.offsetTop;

}
