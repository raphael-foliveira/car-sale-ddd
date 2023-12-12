import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';
import { UpdateClientRequestDto } from './update-client.dto';

export class CreateClientRequestDto extends UpdateClientRequestDto {
  @ApiProperty()
  @IsNumberString()
  nationalId: string;
}
