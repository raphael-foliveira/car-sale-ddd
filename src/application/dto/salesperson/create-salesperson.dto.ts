import { UpdateSalespersonDto } from './update-salesperson.dto';

export interface CreateSalespersonDto extends UpdateSalespersonDto {
  nationalId: string;
}
