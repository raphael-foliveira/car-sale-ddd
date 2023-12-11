import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salesperson } from '../../../../domain/entities/salesperson.entity';
import { SalespersonRepository } from '../../../../domain/repositories/salesperson.repository';
import { SalespersonEntity } from '../entities/salesperson.entity';

export class SalespersonOrmRepository implements SalespersonRepository {
  constructor(
    @InjectRepository(SalespersonEntity)
    private repository: Repository<SalespersonEntity>,
  ) {}

  async findAll(): Promise<Salesperson[]> {
    const dbSalesPersons = await this.repository.find();
    return dbSalesPersons.map(this.toDomainEntity);
  }

  async findById(id: number): Promise<Salesperson> {
    const dbSalesPerson = await this.repository.findOne({ where: { id } });
    return this.toDomainEntity(dbSalesPerson);
  }

  async create(salesperson: Salesperson): Promise<Salesperson> {
    const dbSalesPerson = await this.repository.save({
      address: salesperson.address,
      email: salesperson.email,
      name: salesperson.name,
      nationalId: salesperson.nationalId,
      password: salesperson.password,
      phone: salesperson.phone,
    });
    return this.toDomainEntity(dbSalesPerson);
  }

  async delete(id: number): Promise<void> {
    const dbSalesPerson = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbSalesPerson);
  }

  async update(salesperson: Salesperson): Promise<Salesperson> {
    await this.repository.update({ id: salesperson.id }, salesperson);
    const updatedSalesPerson = await this.repository.findOne({
      where: { id: salesperson.id },
    });
    return this.toDomainEntity(updatedSalesPerson);
  }

  private toDomainEntity(salesperson: SalespersonEntity): Salesperson {
    if (!salesperson) {
      return;
    }
    return new Salesperson(
      salesperson.id,
      salesperson.nationalId,
      salesperson.createdAt,
      salesperson.updatedAt,
      salesperson.name,
      salesperson.email,
      salesperson.password,
      salesperson.phone,
      salesperson.address,
    );
  }
}
