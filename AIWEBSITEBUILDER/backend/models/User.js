import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
const STARTING_CREDITS = 20

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 32
    },
    email: {
        type : String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    passwordHash:{
        type:String,
        required:true
    },
    credits:{
        type:Number,
        default: STARTING_CREDITS,
        min:0
    },
    emailVerified:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
});

//to return a safe user obg (no password) to sent to frontend.
userSchema.methods.toClient = function () {
    return {
        id: this._id.toString(),
        name: this.name,
        email: this.email,
        credits: this.credits,
        emailVerified: Boolean(this.emailVerified),
        createdAt: this.createdAt
    };
};
//to hash the password before saving tpo DB
userSchema.statics.hashPassword = function(plain) {
    return bcrypt.hash(plain,10);
};

//to verify the hash passowrd with the user password before loggoin
userSchema.methods.verifyPassword = function(plain){
    return bcrypt.compare(plain,this.passwordHash);
};

userSchema.statics.STARTING_CREDITS = STARTING_CREDITS;
export const User = mongoose.model("User",userSchema);