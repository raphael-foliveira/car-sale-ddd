import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCarDto } from '../../../application/dto/car/create-car.dto';
import { UpdateCarDto } from '../../../application/dto/car/update-car.dto';
import { CarAdapter } from '../../adapters/car.adapter';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarResponseDto } from '../dto/car/car.dto';

@Controller('cars')
@ApiTags('cars')
export class CarController {
  constructor(private readonly service: CarAdapter) {}

  @Get()
  @ApiResponse({ type: [CarResponseDto] })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: CarResponseDto })
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Post()
  @ApiResponse({ type: CarResponseDto })
  create(@Body() car: CreateCarDto) {
    return this.service.create(car);
  }

  @Put(':id')
  @ApiResponse({ type: CarResponseDto })
  update(@Param('id') id: number, @Body() car: UpdateCarDto) {
    return this.service.update(id, car);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
