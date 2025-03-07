import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    dob: Date;
    password: string;
}

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    dob: { type: Date},
    password: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
