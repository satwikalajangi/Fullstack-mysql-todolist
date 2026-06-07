const express = require('express');

function sayHello(){
  console.log('welcome to node js');
}
sayHello();

const app = express();
app.get('/',(req,res)=>{
  res.send('Welcome to server');
});
app.get('/bad',(req,res)=>{
  console.log('welcome to about page');
  res.send('Bye');
});

app.post('/bad',(req,res)=>{
  console.log('welcome to post page');
  res.send('Satwik');
});
//app.listen(3000,()=>{
 // console.log('server is running ');
//});