import { ApiProperty } from '@nestjs/swagger';
import { CreateSalespersonRequestDto } from './create-salesperson.dto';

export class SalespersonResponseDto extends CreateSalespersonRequestDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  nationalId: string;
}
