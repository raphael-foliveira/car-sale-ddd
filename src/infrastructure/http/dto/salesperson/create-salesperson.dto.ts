import { ApiProperty } from '@nestjs/swagger';
import { UpdateSalespersonRequestDto } from './update-salesperson.dto';
import { IsNumberString, IsString } from 'class-validator';

export class CreateSalespersonRequestDto extends UpdateSalespersonRequestDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumberString()
  nationalId: string;
}
