import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default: 0,
    }
},
{timestamps:true}
);

userSchema.pre("save", function(next) {
    let user = this;
    bcrypt.hash(user.password, 10).then(hash => {
      user.password = hash;
      next();
    });
  });
  

export default  mongoose.models.user || mongoose.model("user", userSchema);