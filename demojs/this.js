let btn = document.querySelector("button");
let p=document.querySelector("p");
let h1 =document.querySelector("h1");
let h3=document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);

h1.addEventListener("click",changeColor);

h3.addEventListener("click",changeColor);

// let input = document.querySelector("input");
//  input.addEventListener("keydown",function (event){
//     console.log(event.key);
//     console.log("key was pressed")
//  });

 let inp = document.querySelector("#text");

 inp.addEventListener("input",function(){
    console.log(inp.value)
    p.innerText=inp.value;
 })
