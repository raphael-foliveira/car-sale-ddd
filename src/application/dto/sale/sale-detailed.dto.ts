import { CarDto } from '../car/car.dto';
import { ClientDto } from '../client/client.dto';
import { SalespersonDto } from '../salesperson/salesperson.dto';

export interface SaleDetailedDto {
  id: number;
  car: CarDto;
  client: ClientDto;
  salesperson: SalespersonDto;
  price: number;
  discount: number;
  createdAt: Date;
  updatedAt: Date;
}
