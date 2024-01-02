import { Salesperson } from '../../domain/entities/salesperson.entity';
import { CreateSalespersonDto } from '../dto/salesperson/create-salesperson.dto';
import { SalespersonDto } from '../dto/salesperson/salesperson.dto';
import { UpdateSalespersonDto } from '../dto/salesperson/update-salesperson.dto';

function updateEntity(
  salesperson: Salesperson,
  salespersonDto: UpdateSalespersonDto,
): Salesperson {
  return {
    ...salesperson,
    email: salespersonDto.email,
    password: salespersonDto.password,
    phone: salespersonDto.phone,
    address: salespersonDto.address,
  };
}

function createDtoToEntity(salesperson: CreateSalespersonDto): Salesperson {
  return {
    name: salesperson.name,
    nationalId: salesperson.nationalId,
    email: salesperson.email,
    password: salesperson.password,
    phone: salesperson.phone,
    address: salesperson.address,
  };
}

function toDto(salesperson: Salesperson): SalespersonDto {
  return {
    id: salesperson.id,
    name: salesperson.name,
    nationalId: salesperson.nationalId,
    email: salesperson.email,
    phone: salesperson.phone,
    address: salesperson.address,
  };
}

export const salespersonMapper = {
  updateEntity,
  createDtoToEntity,
  toDto,
};
