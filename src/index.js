
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

/// pogoda i data ////

let loc = document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>
{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';
});

const getWeather=async (city) =>{
  
  try{

    const res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20c5e6a815d03428798c0eef34f7402d`,
    
    );

    const weatherData= await res.json();
    console.log(weatherData);
    const{name}=weatherData;
    const{feels_like}=weatherData.main;
    const{id,main}=weatherData.weather[0];
    loc.textContent=name; 
    climate.textContent=main;
    tempvalue.textContent=Math.round(feels_like-273);
    if(id<300 && id>200)
    {
      tempicon.src="./icons/storm.svg"
    }
    else
    if(id<400 && id>300)
    {
      tempicon.src="./icons/clouds.svg"
    }
    else
    if(id<600 && id>500)
    {
      tempicon.src="./icons/rain.svg"
    }
    else
    if(id<700 && id>600)
    {
      tempicon.src="./icons/snow.svg"
    }
    else
    if(id<800 && id>700)
    {
      tempicon.src="./icons/cloud.svg"
    }
    else
    if(id==800)
    {
      tempicon.src="./icons/sun and cloud.svg"
    }
    else
    if(id>800)
    {
      tempicon.src="./icons/sun.svg"
    }
  }
    catch(error){
      alert("city not found");
    }

  
};













// window.addEventListener("load", ()=>{

//   let long;
//   let lat;
// if(navigator.geolocation)
// {
//   navigator.geolocation.getCurrentPossition((position)=>
//   { 
//   long=position.coords.longitute;
//   lat=position.coords.latitude;
//   const proxy="https://robwu.nl/cors-anywhere.html/";

//   const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=20c5e6a815d03428798c0eef34f7402d`

//   fetch(api)
//   .then((res) => res.json())
//   .then((data) => {
    

//     const{name}= data;
//     const{feels_like}= data.main;
//     const{id,main}=data.weather[0];

//     loc.textContent=name;
//     climate.textContent=main;
//     tempvalue.textContent=Math.round(feels_like-273);
//     if(id<300 && id>200)
//     {
//       tempicon.src="./icons/storm.svg"
//     }
//     else
//     if(id<400 && id>300)
//     {
//       tempicon.src="./icons/clouds.svg"
//     }
//     else
//     if(id<600 && id>500)
//     {
//       tempicon.src="./icons/rain.svg"
//     }
//     else
//     if(id<700 && id>600)
//     {
//       tempicon.src="./icons/snow.svg"
//     }
//     else
//     if(id<800 && id>700)
//     {
//       tempicon.src="./icons/cloud.svg"
//     }
//     else
//     if(id==800)
//     {
//       tempicon.src="./icons/sun and cloud.svg"
//     }
//     else
//     if(id>800)
//     {
//       tempicon.src="./icons/sun.svg"
//     }
    
    
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

//   }
  
//   )}
// })
      