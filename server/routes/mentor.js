import express from 'express';
import Mentor from '../models/Mentor.js';
const router = express.Router();
router.get('/',async(req,res)=>{
    const mentee = await Mentor.find();
    res.status(200).json(mentee);
  })

export default router;
