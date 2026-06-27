function getNum(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10)+1;
            console.log(num);
            resolve();
        },1000);
    });
    console.log(5);
}

async function demo(){
    await getNum();
    await getNum();
    getNum();

}

h1 = document.querySelector("h1");
function changeColor(color,delay) {
    return new Promise((resolve,reject) => {
    setTimeout(()=> {
        let num = Math.floor(Math.random() * 15) + 1;
        if(num > 3){
            reject("promise rejcted");
        }
    h1.style.color = color;
    console.log(`color changed to ${color}!`);
    resolve("color changed!");
    },delay);
});
}
    async function demo() {
        try{await changeColor("red",1000);
        await changeColor("violet",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("brown",1000);
        changeColor("blue",1000);
        }
        catch(err){
            console.log("caught error");
            console.log(err);
        }
        let a=5;
        console.log(a);
        console.log(a+3);
    }
        

    let url = "https://catfact.ninja/fact";


    fetch(url)
    .then((res)=>{
        console.log(res);
       return res.json();
    })
    .then((data) => {
        console.log(data.fact)
    })
    .catch((err) => {
        console.log("ERROR-",err);
    })
