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
import { CreateSalespersonDto } from '../../../application/dto/salesperson/create-salesperson.dto';
import { UpdateSalespersonDto } from '../../../application/dto/salesperson/update-salesperson.dto';
import { SalespersonAdapter } from '../../adapters/salesperson.adapter';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SalespersonResponseDto } from '../dto/salesperson/salesperson.dto';

@Controller('salespeople')
@ApiTags('salespeople')
export class SalespersonController {
  constructor(private service: SalespersonAdapter) {}

  @Get()
  @ApiResponse({ type: [SalespersonResponseDto] })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: SalespersonResponseDto })
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Post()
  @ApiResponse({ type: SalespersonResponseDto })
  create(@Body() salesperson: CreateSalespersonDto) {
    return this.service.create(salesperson);
  }

  @Put(':id')
  @ApiResponse({ type: SalespersonResponseDto })
  update(@Param('id') id: number, @Body() salesperson: UpdateSalespersonDto) {
    return this.service.update(id, salesperson);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
