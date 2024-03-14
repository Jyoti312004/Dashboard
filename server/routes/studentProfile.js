import express from 'express';
import { assign } from '../controller/assginController.js';
import {lockedStudent} from "../controller/lockController.js";
import { getAllStudents,getAssignStudent,getEvaluatedStudent,getFinalList} from '../controller/studentDetails.js';
import { sendMarkSheet } from '../controller/sendMail.js';
const router = express.Router();
router.patch('/assign',assign);
router.patch('/:studentId/lock',lockedStudent);
router.get('/getStudent',getAllStudents);
router.get('/mentorAssignStudent',getAssignStudent);
router.get('/mentorEvaluatedStudent',getEvaluatedStudent);
router.get('/getFinalStudents',getFinalList);
router.post('/sendEmail',sendMarkSheet)
export default router;
