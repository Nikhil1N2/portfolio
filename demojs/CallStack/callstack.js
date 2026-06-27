function hello(){
    console.log("inside hello fnx")
    console.log("hello world");
}

function demo(){
    console.log("calling hello function")
    hello();
}

console.log("calling demo function")
demo();
console.log("bye");

//Visualizing the call stak (call back)
function one(){
    return 6;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans)
}
three();


//breakpoint
setTimeout(function(){
console.log("Nikhil kumar");
},2000);
console.log("hello...");

