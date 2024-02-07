// const {mongoose}=require('../Config/db')

// const userSchema=mongoose.Schema({
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     city:{
//         type:String,
//     }

// })

// const UserCollection=mongoose.model('User',userSchema)

// module.exports=UserCollection
const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
        lastname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);