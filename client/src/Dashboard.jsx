import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentTable from './components/StudentTable';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import SetTable from './components/SetTable';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



export const Dropdown = () => {
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState('');
  const [openUnassigned, setOpenUnassigned] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [student,setStudents] = useState([]);
  const [mentor,setMentor] = useState([]);
  const [OnScreenStudent,setOnScreenStudent] = useState([]);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);


  const updateStudentMarks = (studentId, marks) => {
    setOnScreenStudent(prevStudents => prevStudents.map(student => {
      if (student._id === studentId) {
        return { ...student, marks };
      } else {
        return student;
      }
    }));
  };

  const handleOpenUnassigned = () => {
    setOpenUnassigned(true);
  };

  const handleCloseUnassigned = () => {
    setOpenUnassigned(false);
  };
  

  const getStudent = async () => {
    const response = await axios.get('http://localhost:3001/student/getStudent');
    console.log(response.data);
    setStudents(response.data);
  }
  
  const getMentor = async () => {
    const response = await axios.get('http://localhost:3001/mentor');
    console.log(response.data);
    setMentor(response.data);
  }

  useEffect(()=>{
    getStudent();
    getMentor();
  },[]);

  const updateStudentList = (studentId) => {
    setOnScreenStudent(prevStudents => prevStudents.filter(student => student._id !== studentId));
  };

  const handleLockedStudent = () => {
    navigate(`/finalList/${selectedMentor._id}`);
  };


  const handleStudentChange = (event) => {
    const selectedStudentName = event.target.value;
    setSelectedStudent(selectedStudentName);
  
    const selectedStudentObject = student.find(student => student.name === selectedStudentName);
    setOnScreenStudent(prevStudents => [...prevStudents, selectedStudentObject]);
  
    const updatedStudents = student.filter(student => student.name !== selectedStudentName);
    setStudents(updatedStudents);
  };

  const handleMentorChange = (event) => {
    const selectedMentorName = event.target.value;
    const selectedMentorObject = mentor.find(mentor => mentor.name === selectedMentorName);
    setSelectedMentor(selectedMentorObject);

  }

  const handleSubmit = async () => {
    if (OnScreenStudent.length >= 3 && OnScreenStudent.length <= 4) {
      setSubmitSuccessful(true);
      //alert(`Mentor: ${selectedMentor}, Students: ${OnScreenStudent.join(', ')}`);
      const response = await axios.patch('http://localhost:3001/student/assign', {
        students: OnScreenStudent,
        mentor: selectedMentor
      })
      console.log(response.data);
    } else {
      alert("Please select between 3 and 4 students");
    }
    
  };



  return (
    <>
    <div>
    <select value={selectedMentor?.name} onChange={handleMentorChange}>
  <option value="">Select Mentor</option>
  {mentor.map((mentor) => (
    <option key={mentor._id} value={mentor.name}>
      {mentor.name}
    </option>
  ))}
</select>
<p>Mentor: {selectedMentor?.name}</p>
    </div>
    <div>
      <select value={selectedStudent} onChange={handleStudentChange} disabled={OnScreenStudent.length >= 4 || selectedMentor=='' }>
        <option value="">Select Student</option>
        {student.map((student) => (
          <option key={student._id} value={student.name}>
            {student.name}
          </option>
        ))}
      </select>
      <p>Students Selected</p>
      <ul>
        {OnScreenStudent.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
    <button onClick={handleSubmit} disabled={OnScreenStudent.length < 3 || OnScreenStudent.length > 4 || selectedMentor.name == undefined}>
        Submit
      </button>
      {submitSuccessful && <StudentTable StudentList={OnScreenStudent} 
      updateStudentMarks={updateStudentMarks} 
      updateStudentList={updateStudentList} 
      selectedMentor={selectedMentor}
      />}
      <Button variant="contained" color="primary" onClick={handleLockedStudent} disabled={selectedMentor==''}>
        Locked Students
      </Button>
      <Button variant="contained" color="error" onClick={handleOpenUnassigned} disabled={selectedMentor==''}>
        Unassigned Students
      </Button>

      <Dialog open={openUnassigned} onClose={handleCloseUnassigned}>
  <DialogTitle>
    Unassigned Students
    <IconButton
      edge="end"
      color="inherit"
      onClick={handleCloseUnassigned}
      aria-label="close"
      sx={{ position: 'absolute', right: 30, top: 7 }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent>
    <SetTable StudentList={student} />
  </DialogContent>
</Dialog>

    </>
  );
};

export default Dropdown;