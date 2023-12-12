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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSaleDto } from '../../../application/dto/sale/create-sale.dto';
import { UpdateSaleDto } from '../../../application/dto/sale/update-sale.dto';
import { SaleAdapter } from '../../adapters/sale.adapter';
import { SaleDetailedResponseDto } from '../dto/sales/sale-detailed.dto';
import { SaleResponseDto } from '../dto/sales/sale-response.dto';

@Controller('sales')
@ApiTags('sales')
export class SaleController {
  constructor(private service: SaleAdapter) {}

  @Get()
  @ApiResponse({ type: [SaleResponseDto] })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: SaleDetailedResponseDto })
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Post()
  @ApiResponse({ type: SaleDetailedResponseDto })
  create(@Body() sale: CreateSaleDto) {
    return this.service.create(sale);
  }

  @Put(':id')
  @ApiResponse({ type: SaleDetailedResponseDto })
  update(@Param('id') id: number, @Body() sale: UpdateSaleDto) {
    return this.service.update(id, sale);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
