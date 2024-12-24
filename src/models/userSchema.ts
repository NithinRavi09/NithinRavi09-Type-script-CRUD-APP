import mongoose, { Schema } from "mongoose";

interface Student extends Document {
    name: string;
    email: string;
    age: number;
}

const userSchema = new Schema<Student> ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

export default mongoose.model<Student>('User', userSchema,'users')