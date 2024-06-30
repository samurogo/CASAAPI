// src/models/LightModel.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface LightDocument extends Document {
  isOn: boolean;
}

const LightSchema: Schema = new Schema({
  isOn: { type: Boolean, required: true, default: false },
});

const LightModel = mongoose.model<LightDocument>('Light', LightSchema);

export default LightModel;
