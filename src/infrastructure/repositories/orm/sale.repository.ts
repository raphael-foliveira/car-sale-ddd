import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSaleDto } from '../../../application/dto/sale/create-sale.dto';
import { SaleDetailedDto } from '../../../application/dto/sale/sale-detailed.dto';
import { UpdateSaleDto } from '../../../application/dto/sale/update-sale.dto';
import { Car } from '../../../domain/entities/car.entity';
import { Sale } from '../../../domain/entities/sale.entity';
import { SaleRepository } from '../../../domain/repositories/sale.repository';
import { SaleEntity } from '../../database/entities/sale.entity';

export class SaleOrmRepository implements SaleRepository {
  constructor(
    @InjectRepository(SaleEntity) private repository: Repository<SaleEntity>,
  ) {}

  async findAll(): Promise<Sale[]> {
    const dbSales = await this.repository.find();
    return dbSales.map(this.toDomainEntity);
  }
  async findById(id: number): Promise<SaleDetailedDto> {
    const dbSale = await this.repository.findOne({
      where: { id },
      relations: ['car', 'client', 'salesperson'],
    });
    return this.toSaleDetailed(dbSale);
  }
  async create(sale: CreateSaleDto): Promise<Sale> {
    const dbSale = await this.repository.save({
      ...sale,
      car: { id: sale.carId },
      client: { id: sale.clientId },
      salesperson: { id: sale.salespersonId },
    });
    return this.toDomainEntity(dbSale);
  }
  async delete(id: number): Promise<void> {
    const dbSale = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbSale);
  }
  async update(id: number, sale: UpdateSaleDto): Promise<Sale> {
    await this.repository.update({ id }, sale);
    const updatedSale = await this.repository.findOne({ where: { id } });
    return this.toDomainEntity(updatedSale);
  }

  private toDomainEntity(sale: SaleEntity): Sale {
    if (!sale) {
      return;
    }
    return new Sale(
      sale.id,
      sale.car?.id,
      sale.client?.id,
      sale.salesperson?.id,
      sale.price,
      sale.discount,
      sale.createdAt,
      sale.updatedAt,
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
