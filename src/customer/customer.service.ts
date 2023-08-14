import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create.customer.dto';
import { UpdateCustomerDto } from './dto/update.customer.dto';
import { Customer } from './interfaces/customer.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async saveCustomer(customer: Customer): Promise<Customer> {
    const newCustomer = new this.customerModel(customer);
    return await newCustomer.save();
  }

  async retrieveAllCustomers(): Promise<Customer[]> {
    return await this.customerModel.find();
  }

  async retrieveCustomer(id: string): Promise<Customer> {
    return await this.customerModel.findById(id);
  }

  async updateCustomer(id: string, customer: Customer): Promise<Customer> {
    return await this.customerModel.findByIdAndUpdate(id, customer, {
      new: true,
    });
  }
}
