// let smallimg=document.getElementsByClassName("oldimg")
// for(let i=0; i<smallimg.length;i++){
//     smallimg[0].src="https://imgs.search.brave.com/x3H2GR5PGuq42CEUw_vpGi56pbl9BEK3eVNNWiXdWSc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc3Bp/ZGVyLW1hbi1waWN0/dXJlcy1oODRmbGls/bjJkemcwNG05Lmpw/Zw";
//     console.dir(`value of img no.${0} is changed`);
// }
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelectorAll("div img"));
let link=document.querySelectorAll(".box a");
for(let i=0;i<link.length;i++){
    link[i].style.color="red";
    console.dir(`value of ${i}is changed`);
}


