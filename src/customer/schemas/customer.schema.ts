import mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  nic: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: false },
  salary: { type: Number, required: false },
});
