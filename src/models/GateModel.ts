// src/models/GateModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface GateDocument extends Document {
  isOpen: boolean;
}

const GateSchema: Schema = new Schema({
  isOpen: { type: Boolean, default: false },
});

const GateModel = mongoose.model<GateDocument>('Gate', GateSchema);

export default GateModel;
