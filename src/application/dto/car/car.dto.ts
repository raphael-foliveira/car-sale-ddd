import { CreateCarDto } from './create-car.dto';

export interface CarDto extends CreateCarDto {
  id: number;
}
