let addbtn = document.getElementById('addBtn');
let subbtn = document.getElementById('subBtn');
let startbtn = document.getElementById('startBtn');
let resetbtn = document.getElementById('resetBtn')
let timeToStart;
let counter

function start(timeToStart) {
    counter = timeToStart    

let secondsTo = setInterval(() =>{
    
    if(counter <= 0){
        clearInterval(secondsTo)
        let timeCount = document.getElementById('countText').textContent = counter;
    }
    
    let timeCount = document.getElementById('countText').textContent = counter;
    counter --;
    
    
    
},1000);
}

startbtn.addEventListener('click',() =>{
    timeToStart = parseInt(prompt('Enter Number of seconds'))
    start(timeToStart)
    startbtn.textContent = "Stop"
})

addbtn.addEventListener('click',function(){
    counter = counter + 1
    })

subbtn.addEventListener('click',function(){
    counter = counter - 1
})
resetbtn.addEventListener('click',function(){
    counter = 0
    })
console.log("Exercise 3 - Timer");