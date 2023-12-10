
const bigBox= document.getElementById("bigbox");
const fly = bigBox.querySelector("#fly");
const text = document.getElementById("text");
const btn = document.getElementById("but");
const dead = document.getElementById("dead");
const audio__fly = document.getElementById("audio__fly");

let x = 0 ;
let y = 0 ;
let v = 0 ;

function play() {
    audio__fly.play();
}

btn.onclick = function(){
    intervalfly()
    xYcordinates()
}

function intervalfly() {
    setInterval(() => {
        let x1 = bigBox.clientWidth;
        let y1 = bigBox.clientHeight;
        x = Math.ceil( Math.random() * x1);  
        y = Math.ceil( Math.random() * y1);    
        fly.style.top = y - 50 + "px";
        fly.style.left = x - 50 + "px";
        play()
    }, 1000 );
} 

function xYcordinates() {
    fly.onmousedown = function(event){
        let x = event.clientX ;
        let y = event.clientY ;
        dead.style.top = y - 50 + "px" ;
        dead.style.left = x - 50 + "px" ;
        v++
        text.innerHTML = v ;
    }
} 



