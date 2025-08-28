// // // const post={
// // //     username:"@nikhil kumar",
// // //     content:"this is my #firstpost",
// // //     likes:150,
// // //     reposts:5,
// // //     tags:["@nikhil corporate buisness","@delta"] 
// // // };
// // // console.log(post); 
// // function print1from5(){
// //     for(let i=0;i<6;i++){
// //         console.log(i);
// //     }
// // }
// // print1from5();
// function calaverage(a,b){
//     let average=(a+b)/2;
//     console.log(average);
// }
// calaverage(8,6);
function calTable(n){
    for(let i=n; i<=n*10;i+=n){
    console.log(i);
}
}
calTable(3);
function getsum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum +=i;
    }
    return sum;
}
let str=["nikhil","kumar","paswan","!"];

function concat(str){
    let result;
    for (let i=0;i<str.length;i++){
        result +=str[i];
    }
    return result;
} 