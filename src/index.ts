import express from "express";
import path from 'path';
import mongoose from 'mongoose';
import router from './router/router';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

mongoose.connect('mongodb://localhost:27017/TC-CRUD').then(() => {
    console.log('mongoose connected');
}).catch((error) => console.log(error));

app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);    
});

