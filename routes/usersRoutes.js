import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/user/:id', verifyToken, (req, res) =>{
    const user_id = req.params.id;
    return res.json({'success' : true, user_id : user_id})
})

export default router;