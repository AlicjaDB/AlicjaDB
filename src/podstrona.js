import style from "../src/podstrona.scss";



///// Pogoda /////

let button8 = document.querySelector('.submit8');
let pogoda = document.querySelector('.pogoda');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp= document.querySelector('.temp');
let tempvalue=document.getElementById("temp-value");
let icon =document.getElementById('icon');
 
button8.addEventListener('click', function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+pogoda.value+'&appid=20c5e6a815d03428798c0eef34f7402d')


.then(response => response.json())
.then(data => {
const nameValue = data['name'];
const tempValue = data['main']['temp'];
const descValue = data['weather'][0]['description'];
const iconUrl =`http://openweathermap.org/img/w/${data.weather[0].icon}.png` 
icon.setAttribute('src', iconUrl);
name.innerHTML =nameValue;
desc.innerHTML = descValue;
tempvalue.innerHTML=Math.round(tempValue-273);
})
    
.catch(err => alert("Wrong city name!"));
});

/////// Szczegoły lotu //////

fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/referral/v1.0/%7Bcountry%7D/%7Bcurrency%7D/%7Blocale%7D/%7Boriginplace%7D/%7Bdestinationplace%7D/%7Boutboundpartialdate%7D/%7Binboundpartialdate%7D?shortapikey=ra66933236979928&apiKey=%7Bshortapikey%7D", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "00442d610dmsh6a5f7c2248b3428p17ba7djsn8c560358e0e0",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

////// samolot/////
// const seatsArray = ["s01", "s02", "_s03"];

// for (var i = 0; i < seatsArray.length; i++) {
//   console.log(seatsArray[i]);


//   document.getElementById(seatsArray[i]).addEventListener("click", function () {
//     console.log("i", i); //ok
//     console.log("id", this.id); //ok
//     console.log(seatsArray); //ok
//     console.log("całosć", seatsArray[i]); //not ok
//     if (document.getElementById(this.id).getAttribute("class") == "occupied") {
//       document.getElementById(this.id).removeAttribute("style");
//       document.getElementById(this.id).setAttribute("class", "free");
//     } else {
//       document.getElementById(this.id).removeAttribute("style");
//       document.getElementById(this.id).setAttribute("class", "occupied");
//     }
//   });
// }










