// src/models/UserModel.ts

import mongoose, { Schema, Document } from 'mongoose';
import { UserRole } from '../domain/user/User';

export interface UserDocument extends Document {
  email: string;
  password: string;
  role: UserRole;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.FAMILIAR },
});

const UserModel = mongoose.model<UserDocument>('User', UserSchema);

export default UserModel;
