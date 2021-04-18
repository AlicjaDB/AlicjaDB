
import style from "../src/index.scss"

// document.getElementById("xxx").addEventListener("mousedown", function () {
//   prompt("Zaloguj się");
// });

// document.getElementById("xxx").addEventListener("click", function () {
//   prompt("Zaloguj");
// });

// okno popup -----------------------------------------------------------------------
// const btn1=document.getElementById("button1");
// console.log(btn1);
// const pop1=document.querySelector(".popup");
// console.log(pop1);
// function pop_up(){
//     pop1.style.display = "flex";
// }
// btn1.addEventListener("click",pop_up);



document.getElementById("button").addEventListener("click",function(){
     document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".cancel").addEventListener("click", function(){
    document.querySelector(".popup-content").style.display="none";
})