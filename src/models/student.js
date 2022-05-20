const mongoose = require('mongoose');
const validator = require('validator');

const studentData = new mongoose.Schema({
name:{
    type:String,
    required:true,
    minlength:2,
    maxlength:20
},
email:{
    type:String,
    required:true,
    unique:true,
    validator(value) { 
       if(!validator.isEmail(value))
throw new Error ( "incorrect");
       
    }
    
    // validate: {
    //     validator: () => Promise.resolve(false),
    //     message: 'Email validation failed'
    //   }
    },
    // 

    number:{
type:Number,
required:true,
unique:true,
min:10
// validate: {
//     validator: function(v) {
//       return /\d{3}-\d{3}-\d{4}/.test(v);
//     }
// }
},

message:{
    type:String,
    required:true,
    minlength:2
}

})

const Student = mongoose.model("Studs", studentData)

module.exports = Student;