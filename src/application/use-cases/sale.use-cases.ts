import { UpdateSaleDto } from '../../application/dto/sale/update-sale.dto';
import { SaleNotFoundError } from '../../application/errors/sale.errors';
import { Car } from '../../domain/entities/car.entity';
import { Client } from '../../domain/entities/client.entity';
import { Sale } from '../../domain/entities/sale.entity';
import { Salesperson } from '../../domain/entities/salesperson.entity';
import { CarRepository } from '../../domain/repositories/car.repository';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { SaleRepository } from '../../domain/repositories/sale.repository';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CreateSaleDto } from '../dto/sale/create-sale.dto';
import { SaleDetailedDto } from '../dto/sale/sale-detailed.dto';
import { SaleDto } from '../dto/sale/sale.dto';

export class SaleUseCases {
  constructor(
    private repository: SaleRepository,
    private carRepository: CarRepository,
    private salespersonRepository: SalespersonRepository,
    private clientRepository: ClientRepository,
  ) {}

  async findAll(): Promise<SaleDto[]> {
    const sales = await this.repository.findAll();
    return sales.map(this.toDto);
  }

  async findById(id: number): Promise<SaleDetailedDto> {
    const sale = await this.repository.findById(id);
    if (!sale) {
      throw new SaleNotFoundError();
    }
    const [car, salesperson, client] = await Promise.all([
      this.carRepository.findById(sale.carId),
      this.salespersonRepository.findById(sale.salespersonId),
      this.clientRepository.findById(sale.clientId),
    ]);
    return this.toDetailedDto(sale, car, salesperson, client);
  }

  async create(sale: CreateSaleDto): Promise<SaleDto> {
    const saleEntity = this.createDtoToEntity(sale);
    const newSale = await this.repository.create(saleEntity);
    return this.toDto(newSale);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, saleDto: UpdateSaleDto): Promise<SaleDto> {
    const sale = await this.repository.findById(id);
    const updatedEntity = this.updateEntity(sale, saleDto);
    const updatedSale = await this.repository.update(updatedEntity);
    return this.toDto(updatedSale);
  }

  private updateEntity(sale: Sale, saleDto: UpdateSaleDto): Sale {
    return sale
      .setCarId(saleDto.carId)
      .setClientId(saleDto.clientId)
      .setSalespersonId(saleDto.salespersonId)
      .setFinalPrice(saleDto.finalPrice)
      .setDiscount(saleDto.discount);
  }

  private createDtoToEntity(sale: CreateSaleDto): Sale {
    return new Sale()
      .setCarId(sale.carId)
      .setClientId(sale.clientId)
      .setSalespersonId(sale.salespersonId)
      .setFinalPrice(sale.finalPrice)
      .setDiscount(sale.discount);
  }

  private toDto(sale: Sale): SaleDto {
    return {
      id: sale.id,
      createdAt: sale.createdAt,
      discount: sale.discount,
      updatedAt: sale.updatedAt,
      price: sale.finalPrice,
      carId: sale.carId,
      salespersonId: sale.salespersonId,
      clientId: sale.clientId,
    };
  }

  private toDetailedDto(
    sale: Sale,
    car: Car,
    salesperson: Salesperson,
    client: Client,
  ): SaleDetailedDto {
    return {
      id: sale.id,
      createdAt: sale.createdAt,
      discount: sale.discount,
      updatedAt: sale.updatedAt,
      price: sale.finalPrice,
      car: {
        id: car.id,
        brand: car.brand,
        model: car.model,
        color: car.color,
        year: car.year,
        price: car.price,
      },
      salesperson: {
        id: salesperson.id,
        name: salesperson.name,
        email: salesperson.email,
        phone: salesperson.phone,
        nationalId: salesperson.nationalId,
        address: salesperson.address,
      },
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
    };
  }
}
