const express = require('express');
// const cors = require('cors');
const path = require('path');

const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const uri='mongodb+srv://Aryan:@Karter1020.pbjm47h.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri).then(()=>{
    console.log("running succesfully");
}).catch((err)=>{
    console.log(err);
});
const todo=require('./db');
const app = express();
app.use('/public', express.static(path.join(__dirname, '../client/public')));
console.log(__dirname);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.get('/Signup',(req,res)=>{
    res.sendFile(path.join(__dirname, '../client/Signup.html'));
});

const port = process.env.PORT || 3001;
app.listen(port,(err)=>{
    if(err) console.log(err);
    console.log('Server started at http://localhost:' + port);
});
