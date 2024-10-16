import express from 'express';
import connectDB from './config/dbConfig.js';

const PORT = 3000;

const app = express();

app.get('/', (req,res)=>{
    return res.send('This is HOME page');

})
app.post('/post', (req,res)=>{
    return res.send('using post request');

})
app.put('/put', (req,res)=>{
    return res.send('using put method');

})
app.delete('/delete', (req,res)=>{
    return res.send('deleting sonthing...');

})

app.listen(PORT, ()=>{
    console.log(`The server is running on PORT : ${PORT}`);
    connectDB();

})