let start_btn = document.querySelector('#start')
let reset_btn = document.querySelector('#reset')
let display = document.querySelector('#display')
let is_start = false;
let intervalID;

let seconde_initiale = 0;
let minutes_initiale = 0 ;
let hours_initiale = 0 ;


start_btn.addEventListener(('click'), start_chrono)
reset_btn.addEventListener(('click') , reset_chrono)


function start_chrono(){
 if(!is_start){
  intervalID =  setInterval(update_chrono , 1000)
 }
  
}

function update_chrono(){
  is_start = true
  seconde_initiale++
  if(seconde_initiale > 59){
    seconde_initiale = 0
    minutes_initiale++
  }else if(minutes_initiale > 59){
    seconde_initiale = 0
   minutes_initiale = 0
    hours_initiale++
   
  }
  heures = (hours_initiale < 10 ? `0${hours_initiale}` : hours_initiale )
  minutes = (minutes_initiale < 10 ? `0${minutes_initiale}` : minutes_initiale)
  seconde = (seconde_initiale < 10 ? `0${seconde_initiale}` : seconde_initiale)

  display.textContent = `${heures} : ${minutes} : ${seconde}`
}


function reset_chrono(){
  clearInterval(intervalID); 
  is_start = false
   seconde_initiale = 0;
 minutes_initiale = 0 ;
 hours_initiale = 0 ;

 display.textContent = `00 :00 : 00`
}
 


 

 
 
