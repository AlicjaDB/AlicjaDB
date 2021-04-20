
import style from "../src/index.scss"

// document.getElementById("xxx").addEventListener("mousedown", function () {
//   prompt("Zaloguj się");
// });

// document.getElementById("xxx").addEventListener("click", function () {
//   prompt("Zaloguj");
// });

// okno popup -----------------------------------------------------------------------
const btn1=document.getElementById("button");
console.log(btn1);
const pop1=document.querySelector(".popup-content");
console.log(pop1);
function pop_up(){
    pop1.style.display = "flex";
}
btn1.addEventListener("click",pop_up);



document.getElementById("xxx").addEventListener("click",function(){
     document.querySelector(".popup-content").style.display = "flex";
})

document.querySelector(".cancel").addEventListener("click", function(){
    document.querySelector(".popup-content").style.display="none";
});



///// data i godzina 

function updateClock(){
var now = new Date();
var dname = now.getDay(),
    mo = now.getMonth(),
    dnum= now.getDate(),
    yr= now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

if(hou == 0){
  hou = 12;

}
if(hou>12){
  hou= hou -12;
  pe = "PM";
}

Number.prototype.pad = function(digits){
  for(var n= this.toString(); n.length < digits; n= 0 + n);
  return n;
}

var months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
var week = ["Monday","Tuesday","Wendsday","Thursday","Friday", "Saturday","Sunday"];
var ids= ["dayname","month", "daynr", "year", "hour","minutes", "seconds", "period"];
var values = [week[dname],months[mo], dnum.pad(2),yr,hou.pad(2), min.pad(2), sec.pad(2),pe];
for(var i= 0; i < ids.length; i++)
document.getElementsById("datetime").addEventListener("click", function(){



function initClock(){
  updateClock();
  console.log("updateClock()", 1 )}
})
}
//// pogoda ///////

let button8 = document.querySelector('.submit8');
let pogoda = document.querySelector('.pogoda');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp= document.querySelector('.temp');
let tempvalue=document.getElementById("temp-value");



button8.addEventListener('click', function(){
 
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+pogoda.value+'&appid=20c5e6a815d03428798c0eef34f7402d')
  .then(response => response.json())
  .then(data => {
     
     const nameValue = data['name'];
     const tempValue = data['main']['temp'];
     const descValue = data['weather'][0]['description'];
     
     
       
  name.innerHTML =nameValue;
  desc.innerHTML = descValue;
  tempvalue.innerHTML=Math.round(tempValue-273);
  
  // if(id<300 && id>200)
  
  //       {
  //           tempicon.src="./icons/storm.svg"
  //       }
  //      else  if(id<400 && id>300)
  //       {
  //           tempicon.src="./icons/clouds.svg"
  //       }
  //      else if(id<600&& id>500)
  //       {
  //           tempicon.src="./icons/rain.svg"
  //       }
  //      else  if(id<700 && id>600)
  //       {
  //           tempicon.src="./icons/snow.svg"
  //       }
  //      else  if(id<800 && id>700)
  //       {
  //           tempicon.src="./icons/cloud.svg"
  //       }
  //        else if(id==800)
  //       {
  //           tempicon.src="./icons/sun and cloud.svg"
  //       }


  
   
 })
    
  


  
  .catch(err => alert("Wrong city name!"));
  
})
  




