import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create.customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  readonly nic: string;
  readonly name: string;
  readonly address: string;
  readonly salary: number;
}
