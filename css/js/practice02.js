// // const favmovie="3 idiots";
// // let guess=prompt("guess my favmovie");
// // while((guess!=favmovie)&&guess!="quit"){
// //     guess=prompt("wrong guess.try again");
// // }
// // if(guess==favmovie){
// //     console.log("congrats!!"); 
// // } else{
// //     console.log("you quit") 
// // }  
// let fruits=["mango","apple","banana","litchi","orange"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }
// let fruitss=["apple","orange","pineapple"];
// fruitss.push("banana");
// for(fruit of fruitss){
//     console.log(fruit);
// }
let todo=[];
let req=prompt("please enter your requesst");
while(true){
    if(req=="quit"){
        console.log("quiting the todo app");
        break;
    }
    if(req=="list"){
        console.log("-----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);

        }
            console.log("-----------");

    }else if(req=="add"){
     task=prompt("please enter the task you want to add");
    todo.push(task);
    console.log("task added");
 }else if(req=="delete"){
    let idx=prompt("please enter the task index");
    todo.splice(idx,1);
    console.log("task delete");

 }
  req=prompt("please enter your requesst");
 
} 