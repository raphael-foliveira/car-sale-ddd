import { Car } from '../../../domain/entities/car.entity';
import { SalesPerson } from '../../../domain/entities/salesperson.entity';
import { ClientDto } from '../client/client.dto';

export interface SaleDetailedDto {
  id: number;
  car: Car;
  client: ClientDto;
  salesperson: SalesPerson;
  price: number;
  discount: number;
  createdAt: Date;
  updatedAt: Date;
}
