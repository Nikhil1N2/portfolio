// let btn=document.querySelector("button");
// console.dir(btn);
// // btn.onclick = function(){
// //    alert("Button was clicked");
// // };
let btns=document.querySelectorAll("button");
for(btn of btns){
// btn.onclick = sayhello;
// btn.onmouseenter = function(){
//    console.dir("entered the button")
// }
// btn.addEventListener("click" ,sayHello);
// btn.addEventListener("click" ,sayName);
btn.addEventListener("dblclick", function(){
    console.dir("you double click me")
});



}

function sayHello(){
    alert("Hello!");
};

function sayName(){
    alert("Nikhil kumar");
};
console.log("nikh");

let form = document.querySelector("form");
 form.addEventListener("submit",function(){
    event.preventDefault();
    // alert("form submitted");
    let inp = document.querySelector("input");
 console.log(inp.value);
 });


 let user = document.querySelector("#user");

 user.addEventListener("change", function(){
    console.log(" changed event");
    console.log("final value = ",this.value);
    
 });
 user.addEventListener("input", function(){
    console.log("input event");
    console.log("final value = ",this.value);
 
 });


