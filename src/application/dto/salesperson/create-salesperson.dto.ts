import { UpdateSalespersonDto } from './update-salesperson.dto';

export interface CreateSalespersonDto extends UpdateSalespersonDto {
  name: string;
  nationalId: string;
}
