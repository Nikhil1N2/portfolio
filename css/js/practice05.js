let arr=[3,4,1,5,6];

arr.forEach((el)=>{
    console.log(el);
}
);
arr.forEach(function(el){
    console.log(el);
});

// let print=function(el){
//     console.log(el);
// };
// arr.forEach(print);

function sum(a,b=9){   //default parameters
    return a+b;
}
 let array=[6,7,8];
Math.min(...arr);

console.log("Nilhil kumar");
console.log(..."Nilhil kumar");
let names=["Nikhil","peter","shivani","bholu","pushpa","sunny"];//[destructuring],{object destructering}
let[winner,runner,secondrunner,...others]=names;