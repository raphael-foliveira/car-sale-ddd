import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salesperson } from '../../../../domain/entities/salesperson.entity';
import { SalespersonRepository } from '../../../../domain/repositories/salesperson.repository';
import { SalespersonEntity } from '../entities/salesperson.entity';
import { salespersonOrmMapper } from '../mappers/salesperson.mapper';

export class SalespersonOrmRepository implements SalespersonRepository {
  constructor(
    @InjectRepository(SalespersonEntity)
    private repository: Repository<SalespersonEntity>,
  ) {}

  async findAll(): Promise<Salesperson[]> {
    const dbSalespeople = await this.repository.find();
    return dbSalespeople.map(salespersonOrmMapper.toDomainEntity);
  }

  async findById(id: number): Promise<Salesperson> {
    const dbSalespeople = await this.repository.findOne({ where: { id } });
    return salespersonOrmMapper.toDomainEntity(dbSalespeople);
  }

  async create(salesperson: Salesperson): Promise<Salesperson> {
    const dbSalesperson = await this.repository.save({
      address: salesperson.address,
      email: salesperson.email,
      name: salesperson.name,
      nationalId: salesperson.nationalId,
      password: salesperson.password,
      phone: salesperson.phone,
    });
    return salespersonOrmMapper.toDomainEntity(dbSalesperson);
  }

  async delete(id: number): Promise<void> {
    const dbSalesperson = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbSalesperson);
  }

  async update(salesperson: Salesperson): Promise<Salesperson> {
    await this.repository.update({ id: salesperson.id }, salesperson);
    const updatedSalesperson = await this.repository.findOne({
      where: { id: salesperson.id },
    });
    return salespersonOrmMapper.toDomainEntity(updatedSalesperson);
  }
}
