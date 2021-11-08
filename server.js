const express = require('express');
const path = require('path');

const app = express()
const port = process.env.PORT || 7797;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/page1',(req,res) =>{
  res.sendFile(path.join(__dirname, '/public/page1.html'));
})

app.get('/page2',(req,res) =>{
  res.sendFile(path.join(__dirname, '/public/page2.html'));
})

app.get('/page3',(req,res) =>{
  res.sendFile(path.join(__dirname, '/public/page3.html'));
})

app.get('/page4',(req,res) =>{
  res.sendFile(path.join(__dirname, '/public/page4.html'));
})

app.get('/page5',(req,res) =>{
  res.sendFile(path.join(__dirname, '/public/page5.html'));
})

app.get('/page6',(req,res) =>{
  res.sendFile(path.join(__dirname, '/public/page6.html'));
})

app.get('/page7',(req,res) =>{
  res.sendFile(path.join(__dirname, '/public/page7.html'));
})

app.get('/page8',(req,res) =>{
  res.sendFile(path.join(__dirname, '/public/page8.html'));
})

app.get('/page9',(req,res) =>{
  res.sendFile(path.join(__dirname, '/public/page9.html'));
})


app.listen(port);
console.log('Server started at http://localhost:' + port);