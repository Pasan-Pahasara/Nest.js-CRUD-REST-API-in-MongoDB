import { Document, Schema, model } from 'mongoose';

interface ICustomer extends Document {
  nic: string;
  name: string;
  address: string;
  salary: number;
}

const CustomerSchema = new Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export const Customer = model<ICustomer>('Customer', CustomerSchema);
