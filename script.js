const log = console.log

const next = document.getElementById('next')
const back = document.getElementById('back')
const circles = document.querySelectorAll('.circle')
const line = document.querySelector('.line')

//Variable de apollo para contador 
let numRef = 1;

//Listenir even al click en los botones
next.addEventListener('click',()=>{
  if(numRef<circles.length){
        numRef++
    }
    activeCircle()
})

back.addEventListener('click',()=>{
    if(numRef>1){
        numRef--
    }
    activeCircle()
})

function activeCircle() {
    circles.forEach((a,b)=>{
        if (b<numRef){a.classList.add('active')}else{
            a.classList.remove('active')
        }
    })
    const active = document.querySelectorAll('.active')
    line.style.width = (active.length-1)/(circles.length-1)*100+'%'
}