import { UpdateSaleDto } from '../../application/dto/sale/update-sale.dto';
import { SaleNotFoundError } from '../../application/errors/sale.errors';
import { Sale } from '../../domain/entities/sale.entity';
import { CarRepository } from '../../domain/repositories/car.repository';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { SaleRepository } from '../../domain/repositories/sale.repository';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CreateSaleDto } from '../dto/sale/create-sale.dto';
import { SaleDetailedDto } from '../dto/sale/sale-detailed.dto';

export class SaleUseCases {
  constructor(
    private repository: SaleRepository,
    private carRepository: CarRepository,
    private salespersonRepository: SalespersonRepository,
    private clientRepository: ClientRepository,
  ) {}

  findAll(): Promise<Sale[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<SaleDetailedDto> {
    const sale = await this.repository.findById(id);
    if (!sale) {
      throw new SaleNotFoundError();
    }
    const [car, salesperson, client] = await Promise.all([
      this.carRepository.findById(sale.carId),
      this.salespersonRepository.findById(sale.salesPersonId),
      this.clientRepository.findById(sale.clientId),
    ]);
    return {
      id: sale.id,
      createdAt: sale.createdAt,
      discount: sale.discount,
      updatedAt: sale.updatedAt,
      price: sale.finalPrice,
      car,
      salesperson,
      client,
    };
  }

  create(sale: CreateSaleDto): Promise<Sale> {
    const saleEntity = this.createDtoToEntity(sale);
    return this.repository.create(saleEntity);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, saleDto: UpdateSaleDto): Promise<Sale> {
    const sale = await this.repository.findById(id);
    const updatedEntity = this.updateEntity(sale, saleDto);
    return this.repository.update(updatedEntity);
  }

  private updateEntity(sale: Sale, saleDto: UpdateSaleDto): Sale {
    sale.carId = saleDto.carId;
    sale.clientId = saleDto.clientId;
    sale.salesPersonId = saleDto.salespersonId;
    sale.finalPrice = saleDto.price;
    return sale;
  }

  private createDtoToEntity(sale: CreateSaleDto): Sale {
    return new Sale(
      null,
      null,
      null,
      sale.carId,
      sale.clientId,
      sale.salespersonId,
      sale.price,
      sale.discount,
    );
  }
}
