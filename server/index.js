import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Student from './models/Student.js';
import Mentor from './models/Mentor.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('Connected to MongoDB');

    // const Names = [
    //   'Aarav', 'Aanya', 'Advik', 'Ananya', 'Arjun', 'Ishaan', 'Kavya', 'Krishna', 'Mira', 'Neha', 'Rohan', 'Saanvi', 'Shreya', 'Vedika', 'Vihaan'
      
    // ];
    // const students = [];
    // for (let i = 0; i < Names.length; i++) {
    //   const student = new Student({
    //     name: Names[i],
    //     rollNo: `2025${i + 1}`,
    //   });
    //   await student.save();
    //   students.push(student);
    // }
    // const mentorNames = [
    //   'Arjun', 'Neha', 'Aarti', 'Raj', 'Priya', 'Ankit', 'Shreya', 'Vikram', 'Kriti', 'Siddharth'
    // ];
    // const mentors = [];
    // for (let i = 0; i < mentorNames.length; i++) {
    //   const mentor = new Mentor({
    //     name: mentorNames[i],
    //     email: `${mentorNames[i]}${i + 1}@example.com`, 
    //     students: []
    //   });
    //   await mentor.save();
    //   mentors.push(mentor);
    // }
    
    app.listen(PORT, () => console.log(`Server Port: ${PORT} && connected to database`));
  })
  .catch((error) => console.log(`${error} did not connect`));

  app.get('/getStudent',async (req,res)=>{
      const data = await Student.find();
      res.status(200).json(data);
  });
  app.get('/getMentor',async(req,res)=>{
    const mentee = await Mentor.find();
    res.status(200).json(mentee);
  })

