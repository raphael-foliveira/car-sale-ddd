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
import { CreateSaleDto } from '../../../application/dto/sale/create-sale.dto';
import { UpdateSaleDto } from '../../../application/dto/sale/update-sale.dto';
import { SaleAdapter } from '../../adapters/sale.adapter';

@Controller('sales')
export class SaleController {
  constructor(private service: SaleAdapter) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() sale: CreateSaleDto) {
    return this.service.create(sale);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() sale: UpdateSaleDto) {
    return this.service.update(id, sale);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
