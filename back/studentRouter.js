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
    
    const {name,age,phone} =req.body;

    const newStudent = new studentModel({
        name,age,phone
    })
    const result = await newStudent.save()

    res.status(201).json(result);
});

studentRouter.delete("/delete/:id", async (req, res) => {
    const id =req .url.split("/delete/")[1]
    // console.log(id);
    await studentModel.deleteOne({_id:id})
    
    res.json(students) 
})

export default studentRouter