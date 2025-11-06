import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { returnResponse } from '../utils/helper.js';
import { PrismaClient } from '../node_modules/.prisma/client/default.js';

const router = express.Router();
const prisma = new PrismaClient();


router.get("/products/category", async (req, res) => {
  const data = await prisma.category.findMany({
    include: {
      children: true
    }
  });
  
  return res.json({ success: true, data });
});

export default router;