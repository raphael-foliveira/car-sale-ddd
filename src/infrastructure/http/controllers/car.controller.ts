import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCarDto } from '../../../application/dto/car/create-car.dto';
import { UpdateCarDto } from '../../../application/dto/car/update-car.dto';
import { CarUseCases } from '../../../application/use-cases/car.use-cases';

@Controller('cars')
export class CarController {
  constructor(private readonly carUseCases: CarUseCases) {}

  @Get()
  findAll() {
    return this.carUseCases.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.carUseCases.findById(id);
  }

  @Post()
  create(@Body() car: CreateCarDto) {
    return this.carUseCases.create(car);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() car: UpdateCarDto) {
    return this.carUseCases.update(id, car);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.carUseCases.delete(id);
  }
}
