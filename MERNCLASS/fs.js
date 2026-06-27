const fs = require('fs');

fs.writeFile("hello.txt","welcome to the class",(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("file was created");
    }
})