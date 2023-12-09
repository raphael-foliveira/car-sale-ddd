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
import { CreateClientDto } from '../../../application/dto/client/create-client.dto';
import { ClientAdapter } from '../../adapters/client.adapter';
import { UpdateClientDto } from '../../../application/dto/client/update-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private service: ClientAdapter) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() @Body() client: CreateClientDto) {
    return this.service.create(client);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() client: UpdateClientDto) {
    return this.service.update(id, client);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(+id);
  }
}
