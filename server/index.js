// npm init -y to initialize
// npm install body-parser cors express mongoose nodemon

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts',postRoutes);
app.use('/user',userRoutes)

// const connection_url = "mongodb+srv://aniketdevil:aniketroy123@cluster0.nfpfjm4.mongodb.net/Memory?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.connection_url,{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error));
