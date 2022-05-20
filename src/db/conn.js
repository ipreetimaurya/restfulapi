const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentRes",{
  useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
console.log("connection successful of mongodb")
}).catch((e)=>{
console.log(e)
})