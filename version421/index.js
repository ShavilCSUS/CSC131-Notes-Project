//calculator

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}
function calculate(){
    try{ display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
const draggableDiv = document.getElementById('calculator');

// Initialize the position variables

let offsetX = 0;
let offsetY = 0;
let mouseX = 0;
let mouseY = 0;
isMouseDown = false;

// Mouse down event
draggableDiv.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    offsetX = draggableDiv.offsetLeft - e.clientX;
    offsetY = draggableDiv.offsetTop - e.clientY;
});

// Mouse move event
document.addEventListener('mousemove', (e) => {
    if(!isMouseDown) return;
    e.preventDefault(); 
    mouseX = e.clientX + offsetX;
    mouseY = e.clientY + offsetY;
    draggableDiv.style.left = mouseX + 'px';
    draggableDiv.style.top = mouseY + 'px';
});

// Mouse up event
document.addEventListener('mouseup', (e) => {
    isMouseDown = false;
});
