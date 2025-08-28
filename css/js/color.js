let colors="green";
if(colors=="red"){
    console.log("stop ");
}
 if(colors=="yellow"){
    console.log("slow down");
}
if(colors=="green"){
    console.log("you can go");

}

let str="snake";
if((str[0]== 'a') && ( str.length > 3)){
    console.log("good string")
}else{
    console.log("not good")
}
// let num=-12 ;
if(num){
    console.log("num is not  equal to 0")
}else{
    console.log("num is equal to 0")
}

let color="yellow";

switch(color){
    case "red":
        console.log("stop");
    break;
    case "yellow":
            console.log("slow down");
    break;
    case "green":
         console.log("go");
    break;
    default:
         console.log("broken light")

            

}
