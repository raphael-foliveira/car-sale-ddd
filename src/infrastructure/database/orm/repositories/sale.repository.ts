import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../../../../domain/entities/sale.entity';
import { SaleRepository } from '../../../../domain/repositories/sale.repository';
import { SaleEntity } from '../entities/sale.entity';
import { saleOrmMapper } from '../mappers/sale.mapper';

export class SaleOrmRepository implements SaleRepository {
  constructor(
    @InjectRepository(SaleEntity) private repository: Repository<SaleEntity>,
  ) {}

  async findAll(): Promise<Sale[]> {
    const dbSales = await this.repository.find({
      relations: ['car', 'client', 'salesperson'],
    });
    return dbSales.map(saleOrmMapper.toDomainEntity);
  }

  async findById(id: number): Promise<Sale> {
    const dbSale = await this.repository.findOne({
      where: { id },
      relations: ['car', 'client', 'salesperson'],
    });
    return saleOrmMapper.toDomainEntity(dbSale);
  }

  async create(sale: Sale): Promise<Sale> {
    const dbSale = await this.repository.save({
      ...sale,
      car: { id: sale.carId },
      client: { id: sale.clientId },
      salesperson: { id: sale.salespersonId },
    });
    return saleOrmMapper.toDomainEntity(dbSale);
  }
  async delete(id: number): Promise<void> {
    const dbSale = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbSale);
  }

  async update(sale: Sale): Promise<Sale> {
    await this.repository.update({ id: sale.id }, sale);
    const updatedSale = await this.repository.findOne({
      where: { id: sale.id },
    });
    return saleOrmMapper.toDomainEntity(updatedSale);
  }
}
