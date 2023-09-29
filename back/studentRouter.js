import  express  from "express";
import studentModel from "./studentModel.js";
 const studentRouter = express.Router();

let students=[
    {id:101 , name:"robin",phone:1234512345,age:21},
    {id:102 , name:"puneet",phone:1234512346,age:22},
    {id:103 , name:"renveer",phone:1234512348,age:19},
    {id:104 , name:"viki",phone:1234512349,age:24},

];


studentRouter.get("/", async(req, res) => {
    const existingStudents = await studentModel.find({})
    res.json(existingStudents);
});

studentRouter.post("/new", async(req,res) => {
    // const newStudent = req.body
    // const newid =students[students.length-1].id+1
    // newStudent.id=newid;
    // students.push(newStudent)
    // res.json(students)
    const {name,age,phone} =req.body;

    const newStudent = new studentModel({
        name,age,phone
    })
    const result = await newStudent.save()

    res.status(201).json(result);
});

studentRouter.delete("/delete/:id(\\d+)", (req, res) => {
    const idtoDelete = Number(req.url.split("/delete/")[1])
    students = students.filter((user) => {
        return user.id != idtoDelete
    })
    res.json(students) 
})

export default studentRouter