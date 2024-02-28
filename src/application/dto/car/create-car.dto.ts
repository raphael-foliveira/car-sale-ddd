import { IsNumber, IsString, Min } from 'class-validator';

export class CreateCarDto {
  @IsString()
  brand: string;
  @IsString()
  color: string;
  @IsString()
  model: string;
  @IsNumber()
  @Min(1900)
  year: number;
  @IsNumber()
  @Min(0)
  price: number;
}
