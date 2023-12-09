import { InjectRepository } from '@nestjs/typeorm';
import { CreateSalesPersonDto } from '../../../application/dto/salesperson/create-salesperson.dto';
import { UpdateSalesPersonDto } from '../../../application/dto/salesperson/update-salesperson.dto';
import { SalesPerson } from '../../../domain/entities/salesperson.entity';
import { SalespersonRepository } from '../../../domain/repositories/salesperson.repository';
import { Repository } from 'typeorm';
import { SalespersonEntity } from '../../database/entities/salesperson.entity';

export class SalespersonOrmRepository implements SalespersonRepository {
  constructor(
    @InjectRepository(SalespersonEntity)
    private repository: Repository<SalespersonEntity>,
  ) {}

  async findAll(): Promise<SalesPerson[]> {
    const dbSalesPersons = await this.repository.find();
    return dbSalesPersons.map(this.toDomainEntity);
  }

  async findById(id: number): Promise<SalesPerson> {
    const dbSalesPerson = await this.repository.findOne({ where: { id } });
    return this.toDomainEntity(dbSalesPerson);
  }

  async create(salesperson: CreateSalesPersonDto): Promise<SalesPerson> {
    const dbSalesPerson = await this.repository.save(salesperson);
    return this.toDomainEntity(dbSalesPerson);
  }

  async delete(id: number): Promise<void> {
    const dbSalesPerson = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbSalesPerson);
  }

  async update(
    id: number,
    salesperson: UpdateSalesPersonDto,
  ): Promise<SalesPerson> {
    await this.repository.update({ id }, salesperson);
    const updatedSalesPerson = await this.repository.findOne({ where: { id } });
    return this.toDomainEntity(updatedSalesPerson);
  }

  private toDomainEntity(salesperson: SalespersonEntity): SalesPerson {
    if (!salesperson) {
      return;
    }
    return new SalesPerson(
      salesperson.id,
      salesperson.name,
      salesperson.email,
      salesperson.password,
      salesperson.phone,
      salesperson.nationalId,
      salesperson.address,
      salesperson.createdAt,
      salesperson.updatedAt,
    );
  }
}
