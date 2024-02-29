import { IsNumber } from 'class-validator';

export class CreateSaleDto {
  @IsNumber()
  carId: number;
  @IsNumber()
  clientId: number;
  @IsNumber()
  salespersonId: number;
  @IsNumber()
  finalPrice: number;
  @IsNumber()
  discount: number;
}
