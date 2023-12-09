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
import { CreateSalespersonDto } from '../../../application/dto/salesperson/create-salesperson.dto';
import { UpdateSalespersonDto } from '../../../application/dto/salesperson/update-salesperson.dto';
import { SalespersonService } from '../../services/salesperson.service';

@Controller('salespeople')
export class SalespersonController {
  constructor(private service: SalespersonService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() id: number) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() salesperson: CreateSalespersonDto) {
    return this.service.create(salesperson);
  }

  @Put(':id')
  update(@Param() id: number, @Body() salesperson: UpdateSalespersonDto) {
    return this.service.update(id, salesperson);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param() id: number) {
    return this.service.delete(id);
  }
}
