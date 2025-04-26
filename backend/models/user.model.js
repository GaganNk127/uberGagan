const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname : {
        firstname:{
            type : String,
            required : true,
            minlength :[3, 'First name must be at least 3 charactersor long']
        },
        lastname:{
            type : String,
            required : true,
            minlength :[3, 'Lastt name must be at least 3 charactersor long']
        },

    },
    email :
    {
        type : String,
        required :true,
        unique:true,
        minlength : [5, 'email must be true'],
    },
    password : {
        type : String,
        required : true,
        select : false,
    },
    SocketId:{
        type : String,
    },
})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id:this.id},process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashpassword = async function(password){
    return await bcrypt.hash(password, 10);
}


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;