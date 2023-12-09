import { CreateCarDto } from './create-car.dto';

export interface UpdateCarDto extends Partial<CreateCarDto> {}
