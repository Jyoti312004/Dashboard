import express from 'express';
import { assign } from '../controller/assginController.js';
import {lockedStudent} from "../controller/lockController.js";
import { getAllStudents,getAssignStudent,getEvaluatedStudent,getFinalList} from '../controller/studentDetails.js';
import { sendMarkSheet } from '../controller/sendMail.js';
const router = express.Router();
router.patch('/assign',assign);
router.patch('/:studentId/lock',lockedStudent);
router.get('/getStudent',getAllStudents);
router.get('/mentorAssignStudent/:mentorId',getAssignStudent);
router.get('/mentorEvaluatedStudent/:mentorId',getEvaluatedStudent);
router.get('/getFinalStudents/:mentorId ',getFinalList);
router.post('/sendEmail',sendMarkSheet)
export default router;
