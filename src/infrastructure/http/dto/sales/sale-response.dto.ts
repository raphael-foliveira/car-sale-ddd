import { ApiProperty } from '@nestjs/swagger';

export class SaleResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  carId: number;

  @ApiProperty()
  clientId: number;

  @ApiProperty()
  salespersonId: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  discount: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
