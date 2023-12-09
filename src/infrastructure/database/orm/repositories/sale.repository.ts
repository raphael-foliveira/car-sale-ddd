import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleDetailedDto } from '../../../../application/dto/sale/sale-detailed.dto';
import { Car } from '../../../../domain/entities/car.entity';
import { Sale } from '../../../../domain/entities/sale.entity';
import { SaleRepository } from '../../../../domain/repositories/sale.repository';
import { SaleEntity } from '../entities/sale.entity';

export class SaleOrmRepository implements SaleRepository {
  constructor(
    @InjectRepository(SaleEntity) private repository: Repository<SaleEntity>,
  ) {}

  async findAll(): Promise<Sale[]> {
    const dbSales = await this.repository.find();
    return dbSales.map(this.toDomainEntity);
  }

  async findById(id: number): Promise<Sale> {
    const dbSale = await this.repository.findOne({
      where: { id },
    });
    return this.toDomainEntity(dbSale);
  }

  async findDatailedById(id: number): Promise<SaleDetailedDto> {
    const dbSale = await this.repository.findOne({
      where: { id },
      relations: ['car', 'client', 'salesperson'],
    });
    return this.toSaleDetailed(dbSale);
  }

  async create(sale: Sale): Promise<Sale> {
    const dbSale = await this.repository.save({
      ...sale,
      car: { id: sale.carId },
      client: { id: sale.clientId },
      salesperson: { id: sale.salesPersonId },
    });
    return this.toDomainEntity(dbSale);
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
    return this.toDomainEntity(updatedSale);
  }

  private toDomainEntity(sale: SaleEntity): Sale {
    if (!sale) {
      return;
    }
    return new Sale(
      sale.id,
      sale.createdAt,
      sale.updatedAt,
      sale.car?.id,
      sale.client?.id,
      sale.salesperson?.id,
      sale.price,
      sale.discount,
    );
  }

  private toSaleDetailed(sale: SaleEntity): SaleDetailedDto {
    const { car, client, salesperson } = sale;
    return {
      id: sale.id,
      car: new Car(
        car.id,
        car.brand,
        car.color,
        car.model,
        car.year,
        car.price,
      ),
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
      salesperson,
      price: sale.price,
      discount: sale.discount,
      createdAt: sale.createdAt,
      updatedAt: sale.updatedAt,
    };
  }
}
