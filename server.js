import dotenv from 'dotenv';
import express from 'express';
import AuthRoutes from './routes/authRoutes.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use('/api', AuthRoutes);

//api routes
app.get('/test', (req, res)=>{
    return res.status(200).json({
        'success' : true,
        'data' : 'success api'
    })
})



const PORT = process.env.API_PORT || 5000;
const BASE_PATH = process.env.API_BASE_PATH || `http://localhost:${PORT}`;
app.listen(PORT, () => console.log(`Server running on ${BASE_PATH}`))