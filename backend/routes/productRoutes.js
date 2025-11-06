import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { returnResponse } from '../utils/helper.js';
import { PrismaClient } from '../node_modules/.prisma/client/default.js';

const router = express.Router();
const prisma = new PrismaClient();


router.get("/product/category", async (req, res) => {
  const data = await prisma.category.findMany({
    include: {
      children: true
    }
  });
  
  return res.json({ success: true, data });
});

router.get("/product", async (req, res) => {
  const category_id = req.query.category_id;
  const data = await prisma.product.findMany({
    where: category_id ? {
      categories : {
        some: {
          category_id: Number(category_id)
        }
      }
    } : {}, 
   
    include: {
      categories : {
        include: {
          category: true
        }
      }
    },
    orderBy : {
      id: 'desc'
    }
  });
  
  return res.json({ success: true, data });
});

export default router;