import { Salesperson } from '../../../../domain/entities/salesperson.entity';
import { SalespersonEntity } from '../entities/salesperson.entity';

const toDomainEntity = (salesperson: SalespersonEntity): Salesperson => {
  if (!salesperson) {
    return;
  }
  return {
    id: salesperson.id,
    createdAt: salesperson.createdAt,
    updatedAt: salesperson.updatedAt,
    name: salesperson.name,
    nationalId: salesperson.nationalId,
    email: salesperson.email,
    password: salesperson.password,
    phone: salesperson.phone,
    address: salesperson.address,
  };
};

export const salespersonOrmMapper = {
  toDomainEntity,
};
