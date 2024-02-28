import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../../../../domain/entities/sale.entity';
import { SaleRepository } from '../../../../domain/repositories/sale.repository';

export class SaleOrmRepository implements SaleRepository {
  constructor(@InjectRepository(Sale) private repository: Repository<Sale>) {}

  findAll(): Promise<Sale[]> {
    return this.repository.find({
      relations: ['car', 'client', 'salesperson'],
    });
  }

  async findById(id: number): Promise<Sale> {
    return this.repository.findOne({
      where: { id },
      relations: ['car', 'client', 'salesperson'],
    });
  }

  async create(sale: Sale): Promise<Sale> {
    return this.repository.save(sale);
  }

  async delete(id: number): Promise<void> {
    const dbSale = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbSale);
  }

  async update(sale: Sale): Promise<Sale> {
    await this.repository.update({ id: sale.id }, sale);
    return this.repository.findOne({
      where: { id: sale.id },
    });
  }
}
