import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salesperson } from '../../../../domain/entities/salesperson.entity';
import { SalespersonRepository } from '../../../../domain/repositories/salesperson.repository';

export class SalespersonOrmRepository implements SalespersonRepository {
  constructor(
    @InjectRepository(Salesperson)
    private repository: Repository<Salesperson>,
  ) {}

  findAll(): Promise<Salesperson[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Salesperson> {
    return this.repository.findOne({ where: { id }, relations: ['sales'] });
  }

  create(salesperson: Salesperson): Promise<Salesperson> {
    return this.repository.save(salesperson);
  }

  async delete(id: number): Promise<void> {
    const dbSalesperson = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbSalesperson);
  }

  async update(salesperson: Salesperson): Promise<Salesperson> {
    await this.repository.update({ id: salesperson.id }, salesperson);
    return this.findById(salesperson.id);
  }
}
