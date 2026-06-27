
let btn = document.querySelector("button");
// let url2="https://dog.ceo/api/breeds/image/random";



// btn.addEventListener("click",async ()=>{
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);
    // console.log(link);
    // console.log("button was clicked");
    // let fact = await getFacts();
    // // console.log(fact);
    // let p = document.querySelector("#result");
    // p.innerText = fact;
// });


// let url = "https://catfact.ninja/fact";

//     async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//         return res.data.fact;
//     } catch (e) {
//         console.log("error - ",e);
//         return "NO Image found"
//     }
// }

const url3="https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = {headers:{Accept:"application/json"}};
        let res = await axios.get(url3,config);
        console.log(res.data);

    }catch(err){
        console.log(err);
    }
}

let url4 = "http://universities.hipolabs.com/search?name=";
let btn1 = document.querySelector("button");

btn1.addEventListener("click",async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    Show(colArr);
});

function Show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
    async function getColleges(country) {
    try{
        let res = await axios.get(url4+country);
        return res.data;
} catch(e) {
    console.log("error : ",e);
    return [];
}
 }


    
