import Student from '../models/Student.js';
import Mentor from '../models/Mentor.js';

export const assign = async (req, res) => {
    try {
        const { students, mentor } = req.body;

        const updatedStudents = await Promise.all(students.map(async (studentData) => {
            const student = await Student.findByIdAndUpdate(studentData._id, {
                isAssigned: true,
                mentorEmail: mentor.email 
            }, { new: true });
            return student;
        }));

        const updatedMentor = await Mentor.findByIdAndUpdate(mentor._id, {
            $addToSet: { students: { $each: updatedStudents.map(student => student._id) } }
        }, { new: true });

        res.status(200).json({ message: "Students assigned successfully", updatedMentor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}