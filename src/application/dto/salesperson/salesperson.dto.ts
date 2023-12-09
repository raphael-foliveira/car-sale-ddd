import { CreateSalespersonDto } from './create-salesperson.dto';

export interface SalespersonDto
  extends Pick<
    CreateSalespersonDto,
    Exclude<keyof CreateSalespersonDto, 'password'>
  > {
  id: number;
}
