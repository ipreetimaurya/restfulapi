const express = require('express');
const app = express();
require('./db/conn');
const router = require('./router/student');

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended:true
    }));
app.use(router);
 app.get('/',(req,res)=>{
res.send("home page");
})


// app.post('/student',async(req,res)=>{
//    try{
//     const user = new Student(req.body);
//     const createUser = await user.save()
//     const done=res.json(createUser)
//     res.status(201).send(done);
//    }
// catch(e){
//     res.status(400).send(e);
// }
// })

 


app.listen(port,()=>{
console.log(`connetcion sucessfully for ${port}`)
})