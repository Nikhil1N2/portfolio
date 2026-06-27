let btn =document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomcolor=getRandomcolor();
    h3.innerText=randomcolor;
    console.log("color update");
    let div=document.querySelector("div");
    div.style.background=randomcolor;

});


function getRandomcolor() {
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
let color = `rgb(${red}, ${green}, ${blue})`;
return color;
}

let box=document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("mouse inside box");
});
let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("para was clisked");
});