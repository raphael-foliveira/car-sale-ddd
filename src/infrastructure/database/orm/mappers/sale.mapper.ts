import { Sale } from '../../../../domain/entities/sale.entity';
import { SaleEntity } from '../entities/sale.entity';

const toDomainEntity = (sale: SaleEntity): Sale => {
  if (!sale) {
    return;
  }
  return {
    id: sale.id,
    createdAt: sale.createdAt,
    updatedAt: sale.updatedAt,
    carId: sale.car.id,
    clientId: sale.client.id,
    salespersonId: sale.salesperson.id,
    finalPrice: sale.finalPrice,
    discount: sale.discount,
  };
};

export const saleOrmMapper = {
  toDomainEntity,
};
