import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateSaleRequestDto {
  @ApiProperty()
  @IsNumber()
  carId: number;

  @ApiProperty()
  @IsNumber()
  clientId: number;

  @ApiProperty()
  @IsNumber()
  salespersonId: number;

  @ApiProperty()
  @IsNumber()
  finalPrice: number;

  @ApiProperty()
  @IsNumber()
  discount: number;
}
