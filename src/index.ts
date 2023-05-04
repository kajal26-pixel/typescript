import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';

const app=express();
app.use(cors({
    credentials:true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server=http.createServer(app);

mongoose.Promise=Promise;
mongoose.connect('mongodb+srv://kajal_s26:kajal80544@cluster0.bs22zit.mongodb.net/typescript');
mongoose.connection.on('error',(error:Error)=>console.log(error))

server.listen(3000,()=>{
    console.log('server running on http://localhost:3000')
})

app.use('/',router());