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
import { SalespersonUseCases } from '../../application/use-cases/salesperson.use-cases';
import { CreateSalesPersonDto } from '../../application/dto/salesperson/create-salesperson.dto';
import { UpdateSalesPersonDto } from '../../application/dto/salesperson/update-salesperson.dto';

@Controller('salespeople')
export class SalespersonController {
  constructor(private salespersonUseCases: SalespersonUseCases) {}

  @Get()
  findAll() {
    return this.salespersonUseCases.findAll();
  }

  @Get(':id')
  findById(@Param() id: number) {
    return this.salespersonUseCases.findById(id);
  }

  @Post()
  create(@Body() salesperson: CreateSalesPersonDto) {
    return this.salespersonUseCases.create(salesperson);
  }

  @Put(':id')
  update(@Param() id: number, @Body() salesperson: UpdateSalesPersonDto) {
    return this.salespersonUseCases.update(id, salesperson);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param() id: number) {
    return this.salespersonUseCases.delete(id);
  }
}
