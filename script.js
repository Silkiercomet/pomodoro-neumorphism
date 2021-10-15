const watch = document.querySelector(".watch")
let pomo;
let sec = 59, min = 25

const start = () =>{
    pomo = setInterval(pomodoro,1000);
 }

const pomodoro = () => {
        if(sec<59 && sec < 9){
        sec++;
        document.querySelector(".sec").innerHTML = `0${sec}`;
        } else if(sec<59){
        sec++;
        document.querySelector(".sec").innerHTML = sec;
        }else if(sec==59){
        min--;
        sec=1;
        document.querySelector(".min").innerHTML = min;
        document.querySelector(".sec").innerHTML = `0${sec}`;         
        }
    
        if(min==25){
            clearInterval(pomo)
        }
}

document.querySelector(".start").addEventListener("click", start)
