import { Car } from '../../domain/entities/car.entity';
import { Client } from '../../domain/entities/client.entity';
import { Sale } from '../../domain/entities/sale.entity';
import { Salesperson } from '../../domain/entities/salesperson.entity';
import { CreateSaleDto } from '../dto/sale/create-sale.dto';
import { SaleDetailedDto } from '../dto/sale/sale-detailed.dto';
import { SaleDto } from '../dto/sale/sale.dto';
import { UpdateSaleDto } from '../dto/sale/update-sale.dto';

const updateEntity = (sale: Sale, saleDto: UpdateSaleDto): Sale => {
  return {
    ...sale,
    carId: saleDto.carId ?? sale.carId,
    clientId: saleDto.clientId ?? sale.clientId,
    salespersonId: saleDto.salespersonId ?? sale.salespersonId,
    finalPrice: saleDto.finalPrice ?? sale.finalPrice,
    discount: saleDto.discount ?? sale.discount,
  };
};

const createDtoToEntity = (sale: CreateSaleDto): Sale => {
  return {
    carId: sale.carId,
    clientId: sale.clientId,
    salespersonId: sale.salespersonId,
    finalPrice: sale.finalPrice,
    discount: sale.discount,
  };
};

const toDto = (sale: Sale): SaleDto => {
  return {
    id: sale.id,
    createdAt: sale.createdAt,
    discount: sale.discount,
    updatedAt: sale.updatedAt,
    price: sale.finalPrice,
    carId: sale.carId,
    salespersonId: sale.salespersonId,
    clientId: sale.clientId,
  };
};

const toDetailedDto = (
  sale: Sale,
  car: Car,
  salesperson: Salesperson,
  client: Client,
): SaleDetailedDto => {
  return {
    id: sale.id,
    createdAt: sale.createdAt,
    discount: sale.discount,
    updatedAt: sale.updatedAt,
    price: sale.finalPrice,
    car: {
      id: car.id,
      brand: car.brand,
      model: car.model,
      color: car.color,
      year: car.year,
      price: car.price,
    },
    salesperson: {
      id: salesperson.id,
      name: salesperson.name,
      email: salesperson.email,
      phone: salesperson.phone,
      nationalId: salesperson.nationalId,
      address: salesperson.address,
    },
    client: {
      id: client.id,
      name: client.name,
      email: client.email,
      phone: client.phone,
      nationalId: client.nationalId,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    },
  };
};

export const saleMapper = {
  updateEntity,
  createDtoToEntity,
  toDto,
  toDetailedDto,
};
