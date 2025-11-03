import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { returnResponse } from '../utils/helper.js';
import { PrismaClient } from '../node_modules/.prisma/client/default.js';

const router = express.Router();
const prisma = new PrismaClient();

// router.get('/user/:id', verifyToken, (req, res) =>{
//     const param_user_id = req.params.id;

//     if(param_user_id != req.user.id){
//         return res.status(401).json(returnResponse(false, 'Not authorizeds!'))
//     }

//     const user_id = req.params.id;
//     return res.json({'success' : true, user_id : user_id, user : req.user})
// })

router.get("/user/me", verifyToken, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: { id: true, username: true, email: true } // exclude password
  });
  
  return res.json({ success: true, user });
});

export default router;