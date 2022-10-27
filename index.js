const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const port = process.env.PORT || 5000; 
const courses = require('./data/courses.json')
app.use(cors());

app.get('/', (req, res)=>{
   res.send('Web Learning sever in running now')
})

app.get('/courses', (req,res)=>{
   res.send(courses);
})

app.get('/courses/:id', (req,res)=>{
   const id = parseInt(req.params.id); 
   const selectedCourse = courses.find(c => c.id === id); 
   res.send(selectedCourse); 
   
})

app.listen(port , ()=>{
   console.log(`Server is running on port : ${port}`); 
})


