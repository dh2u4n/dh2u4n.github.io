const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';

let size=10;

function draw(x,y){
    const circle = new Path2D();
    circle.arc(x,y,size,0,2 * Math.PI);
    ctx.fill(circle);
}

let isMousedown = false;

window.addEventListener('mousedown', function(){
    isMousedown = true;
})

window.addEventListener('mouseup', function(){
    isMousedown = false;
})

window.addEventListener('mousemove',(e)=>{
    if(!isMousedown) return;
    const{x,y}=e;
    const react = canvas.getBoundingClientRect();
    draw(x - react.left,y - react.top);
})

window.addEventListener('wheel',(e)=>{
    if(e.deltaY > 0){
        if(size > 1) size--;
    }
    else if(size < 50) size++;
})

const selectColor = [...document.querySelectorAll(".select-color")]
selectColor.forEach(selectColor =>{
    selectColor.addEventListener('click',(e)=>{
        ctx.fillStyle = e.target.style.backgroundColor;
    })
})

document.querySelector('#btn').addEventListener('click',function(){
    ctx.clearRect(0,0,600,600);
})

document.querySelector('#fullscreen').addEventListener('click',function(){
    document.querySelector('body').requestFullscreen();
    
})