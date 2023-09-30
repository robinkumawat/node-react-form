import  express  from "express";
import cors from "cors"
import studentRouter from "./studentRouter.js"
// import connection from "./Connections.js";
import connectToMongoDB from "./localconnection.js";
// let students=[
//     {id:101 , name:"robin",phone:1234512345,age:21},
//     {id:102 , name:"puneet",phone:1234512346,age:22},
//     {id:103 , name:"renveer",phone:1234512348,age:19},
//     {id:104 , name:"viki",phone:1234512349,age:24},

// ];
const app=express()
app.use(express.json());
app.use(cors({orgin:"http://localhost:5173"}))

app.use("/student",studentRouter)




connectToMongoDB().then(()=>{
    app.listen(5000,()=>{console.log("server is running ")})
})



