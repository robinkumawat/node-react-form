import  express  from "express";
import cors from "cors"

let students=[
    {id:101 , name:"robin",phone:1234512345,age:21},
    {id:102 , name:"puneet",phone:1234512346,age:22},
    {id:103 , name:"renveer",phone:1234512348,age:19},
    {id:104 , name:"viki",phone:1234512349,age:24},

];
const app=express()
app.use(express.json());
app.use(cors({orgin:"http://localhost:5173"}))

app.get("/", (req, res) => {
    res.json(students);
});

app.post("/new",(req,res) => {
    const newStudent = req.body
    const newid =students[students.length-1].id+1
    newStudent.id=newid;
    students.push(newStudent)
    res.json(students)
});

app.listen(5000,()=>{console.log("server is put ")})