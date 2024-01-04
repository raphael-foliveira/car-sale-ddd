import { UpdateSaleDto } from '../../application/dto/sale/update-sale.dto';
import { SaleNotFoundError } from '../../application/errors/sale.errors';
import { CarRepository } from '../../domain/repositories/car.repository';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { SaleRepository } from '../../domain/repositories/sale.repository';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CreateSaleDto } from '../dto/sale/create-sale.dto';
import { SaleDetailedDto } from '../dto/sale/sale-detailed.dto';
import { SaleDto } from '../dto/sale/sale.dto';
import { saleMapper } from '../mappers/sale.mapper';

export class SaleUseCases {
  constructor(
    private repository: SaleRepository,
    private carRepository: CarRepository,
    private salespersonRepository: SalespersonRepository,
    private clientRepository: ClientRepository,
  ) {}

  async findAll(): Promise<SaleDto[]> {
    const sales = await this.repository.findAll();
    return sales.map(saleMapper.toDto);
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
    return saleMapper.toDetailedDto(sale, car, salesperson, client);
  }

  async create(sale: CreateSaleDto): Promise<SaleDto> {
    const saleEntity = saleMapper.createDtoToEntity(sale);
    const newSale = await this.repository.create(saleEntity);
    return saleMapper.toDto(newSale);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, saleDto: UpdateSaleDto): Promise<SaleDto> {
    const sale = await this.repository.findById(id);
    const updatedEntity = saleMapper.updateEntity(sale, saleDto);
    const updatedSale = await this.repository.update(updatedEntity);
    return saleMapper.toDto(updatedSale);
  }
}
