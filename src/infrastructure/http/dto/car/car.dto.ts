import { ApiProperty } from '@nestjs/swagger';
import { CreateCarRequestDto } from './create-car.dto';

export class CarResponseDto extends CreateCarRequestDto {
  @ApiProperty()
  id: number;
}
