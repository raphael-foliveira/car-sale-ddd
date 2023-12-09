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
import { CarService } from '../../services/car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly service: CarService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() car: CreateCarDto) {
    return this.service.create(car);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() car: UpdateCarDto) {
    return this.service.update(id, car);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
