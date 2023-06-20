let track = document.querySelector('.track');
let carpet = document.querySelector('.carpet');
let fast = document.querySelector('.fast');
let slow = document.querySelector('.slow');
let b = 2;
const colorButs = document.querySelectorAll('.color');
const colros = ['red', 'green', 'yellow', 'blue'];

fast.addEventListener('click', function(event){
    carpet.addEventListener('mousemove', function(){
        b = b + 2
        track.style.width = b + 'px'
        
    })
});

slow.addEventListener('click', function(event){
    carpet.addEventListener('mousemove', function(){
        b = b + 0.5
        track.style.width = b + 'px'
        
    })
});

for (let i= 0; i < colorButs.length; i++) {
        colorButs[i].onclick = function(){
        track.style.backgroundColor = colros[i]
    }
};
