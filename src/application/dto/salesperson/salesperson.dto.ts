import { CreateSalespersonDto } from './create-salesperson.dto';

export type SalespersonDto = Omit<CreateSalespersonDto, 'password'> & {
  id: number;
};
