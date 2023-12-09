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
import { SaleUseCases } from '../../application/use-cases/sale.use-cases';
import { CreateSaleDto } from '../../application/dto/sale/create-sale.dto';
import { UpdateSaleDto } from '../../application/dto/sale/update-sale.dto';

@Controller('sales')
export class SaleController {
  constructor(private saleUseCases: SaleUseCases) {}

  @Get()
  findAll() {
    return this.saleUseCases.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.saleUseCases.findById(id);
  }

  @Post()
  create(@Body() sale: CreateSaleDto) {
    return this.saleUseCases.create(sale);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() sale: UpdateSaleDto) {
    return this.saleUseCases.update(id, sale);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.saleUseCases.delete(id);
  }
}
