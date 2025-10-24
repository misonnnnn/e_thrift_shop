import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { returnResponse } from '../utils/helper.js';

const router = express.Router();

router.get('/user/:id', verifyToken, (req, res) =>{
    const param_user_id = req.params.id;

    if(param_user_id != req.user.id){
        return res.status(401).json(returnResponse(false, 'Not authorized!'))
    }

    const user_id = req.params.id;
    return res.json({'success' : true, user_id : user_id, user : req.user})
})

export default router;