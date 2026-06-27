h1 = document.querySelector("h1");
// setTimeout(function(){
// h1.style.color = "red";
// console.log("color printed")
// },1000);
// setTimeout(function(){
// h1.style.color = "orange";
// console.log("color change ")
// },2000);

//callback hell
// function changeColor(color,delay,nextColorchange) {
//     setTimeout(()=> {
//         h1.style.color = color;
//         if(nextColorchange)nextColorchange();
//     },delay);
// }
// changeColor("red",1000,() => {
// changeColor("orange",1000,() => {
// changeColor("green",3000);

// });

// });

function savetoDb(data){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
if (internetSpeed > 4) {
    console.log("your data was saved:", data);
}else {
    comsole.log("weak connection. data not saved")
}
};

function savetoDb(data){
    return new Promise((resolv,reject)=> {

        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolv("success");
        }else{
            reject("weak connectio");
        }
});
}


//req = promise object
savetoDb("Nikhil")
.then((result) => {
    console.log("data1 saved");
    console.log("result of :" ,result);
    savetoDb("helloworld").then(() => {
        console.log("data2 saved");
    });
})
.catch((error)=> {
    console.log("promise was rejected");
    console.log("error od:",error);

});

//for change color
function changeColor(color,delay) {
    return new Promise((resolve,reject) => {
 setTimeout(()=> {
        h1.style.color = color;
        resolve("color chnaged");
        if(nextColorchange)nextColorchange();
    },delay);
    });
   
}
// changeColor("red",1000)
//     .then(()=>{
//         console.log("red color was competed");
//         return changeColor("orange",1000);
//     })
//     .then(()=>{
//         console.log("orange color was competed");
//         return changeColor("green",1000);
//     })
//     .then(()=>{
//         console.log("green color was competed");
//     })


    async function greet() {
        throw"404";
        return "hello!";
    }
    greet()
    .then((result)=>{
        console.log("Promise was resolved");
        console.log("result was:",result);

    })
     .catch((err)=>{
        console.log("promises was rejected with err : ",err);

    })
    
    let demo = async() =>{
        return 5;
    }