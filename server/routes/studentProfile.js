import express from 'express';
import { assign } from '../controller/assginController.js';
import {lockedStudent} from "../controller/lockController.js";
const router = express.Router();
router.patch('/assign',assign);
router.patch('/:studentId/lock',lockedStudent);
export default router;
