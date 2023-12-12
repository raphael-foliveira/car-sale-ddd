import { ApiProperty } from '@nestjs/swagger';
import { CarResponseDto } from '../car/car.dto';
import { ClientResponseDto } from '../clients/client-response.dto';
import { SalespersonResponseDto } from '../salesperson/salesperson.dto';

export class SaleDetailedResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  car: CarResponseDto;
  @ApiProperty()
  client: ClientResponseDto;
  @ApiProperty()
  salesperson: SalespersonResponseDto;
  @ApiProperty()
  price: number;
  @ApiProperty()
  discount: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
