const student={
    name:"nikhil",
    age:19,
    eng:80,
    math:98,
    phy:95,
    getAvg(){
        let avg=(this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got aveg marks=${avg}`);
    }
}
function getAvg(){
    console.log(this);
}
console.log("hello");
console.log("hello");
try{
console.log(a);

}catch{
    console.log("caught an error");

}
console.log("hello");
console.log("hello");
console.log("hello");

let sum=function(a){
    return a*a*a;
}
let sub=(a,b)=>{
    console.log(a+b);
};
const mul=(a,b)=>a*b;

// console.log("hi there!");
// let id = setInterval(()=> {    //setTimeout
//     console.log("nikhil");
// },4000);
// console.log(id);

// console.log("welocome to");

const students={
    name:'nikhil',
    marks:99,
    prop:this,
    getName:function(){
        console.log(this);
    return this.name;

    },
    getMarks:()=>{
        console.log(this);
    return this.marks;
    }
};
// let sqr= (n) =>{
// console.log(n*n);
// }
e=(n)=>(n*n);

let id=setInterval(()=>{
    
    console.log("hello world")
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval run")
},10000);
