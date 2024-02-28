import { IsString, Length } from 'class-validator';
import { UpdateSalespersonDto } from './update-salesperson.dto';

export class CreateSalespersonDto extends UpdateSalespersonDto {
  @IsString()
  name: string;
  @IsString()
  @Length(11)
  nationalId: string;
}
