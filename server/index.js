const express = require('express');
const mongoose = require('mongoose');
const Student = require('../server/models/Student');
require('dotenv').config(); 

const app = express();

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
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

    app.listen(PORT, () => console.log(`Server Port: ${PORT} && connected to database`));
  })
  .catch((error) => console.log(`${error} did not connect`));