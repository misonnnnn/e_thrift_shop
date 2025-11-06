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
  const category_ids = req.query.category_ids ? req.query.category_ids.split(',').map(Number) : [];
  const data = await prisma.product.findMany({
    where: category_ids.length > 0 ? {
      categories : {
        some: {
          category_id: { in : category_ids}
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