// Iteration 2: Generate 2 random number and display it on the screen
var n1=  document.getElementById("number1");
var n2 = document.getElementById("number2");
var num1 = Math.round(Math.random()*100);
n1.innerHTML = num1;
var num2 = Math.round(Math.random()*100);
n2.innerHTML = num2;

// Iteration 3: Make the options button functional
const greater_than = document.getElementById("greater-than");
const equal_to = document.getElementById("equal-to");
const lesser_than = document.getElementById("lesser-than");

var score = 0


greater_than.onclick = () =>{
    if (num1>num2){
        resetTime()
        time=6;
        score++;
        console.log(score)

    }else{
        window.location = "./gameover.html";
    }

    num1 = Math.round(Math.random()*100);
    n1.innerHTML = num1;
    num2 = Math.round(Math.random()*100);
    n2.innerHTML = num2;
}

equal_to.onclick = () =>{
    if (num1==num2){
        resetTime()
        time=6;
        score++;
        console.log(score)

    }else{
        window.location = "./gameover.html";
    }

    num1 = Math.round(Math.random()*100);
    n1.innerHTML = num1;
    num2 = Math.round(Math.random()*100);
    n2.innerHTML = num2;
}

lesser_than.onclick = () =>{
    if (num1<num2){
        resetTime()
        time=6;
        score++;
        console.log(score)
        
    }else{
        window.location = "./gameover.html";
    }

    num1 = Math.round(Math.random()*100);
    n1.innerHTML = num1;
    num2 = Math.round(Math.random()*100);
    n2.innerHTML = num2;
}


// Iteration 4: Build a timer for the game
var time=6;
var t=document.getElementById("timer");
var timer; 

function Start_timer(){
    time = 6;
    t.innerHTML=time;
    timer = setInterval(() =>{
        time--;
        if (time==0){
            window.location = "./gameover.html"
        }
        t.innerHTML=time
    },1000)
    localStorage.setItem("score", score);
    
}


function resetTime() {
    clearInterval(timer);
    Start_timer();
  }
  
Start_timer();