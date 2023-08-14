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

  async saveCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const newCustomer = new this.customerModel(createCustomerDto);
    return await newCustomer.save();
  }
}
