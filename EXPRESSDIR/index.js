const express = require("express");
    const app = express();

    console.dir(app);

    let port = 8080;

    app.listen(port,()=>{
        console.log(`app is listening on port ${port}`);
    })
app.get("/",(req,res) => {
    res.send("hello, i am root");
   });
   app.get("/:username/:id",(req,res) => {
    // console.log(req.params);    //params=it show parameter
    // res.send("hello,i am root");
    let {username, id} = req.params;
    let hmtlStr = `<h1>welcome to the page of @${username}!</h1>.`
    res.send(hmtlStr)
   });

    
//   app.get("/",(req,res) => {
//     res.send("you contacted root path");
//   });
//    app.get("/search",(req,res) => {
//     res.send("you contacted search path");
//   });
//    app.get("/help",(req,res) => {
//     res.send("you contacted help path");
//   });

//   app.post("/help",(req,res) => {       //send post to request
//     res.send("you send post to request");
//   });
  
  

//    app.get("*",(req,res) => {            //for print all path
//      res.send("this page does not exist");
//    });
    // app.use((req,res) => {     
    //  //console.log(req);
    //                                          // request recieved
    //  console.log("request recieved");
    //  //res.send("This is a basic response");  //for send response
    //     // res.send({                 //for send object
    //     //     name:"apple",
    //     //     color:"red",
    //     // });
    //     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li><li>bannanna</li></ul>";
    //     res.send(code);
    // });

    app.get("/search",(req,res) => {
        // console.log(req.query);
        let {q} = req.query;
        if(!q){
            res.send("<h1>nothing search</h1>")
        }
        res.send(`search results for query: ${q}`);
    })
