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
import { CreateClientDto } from '../../../application/dto/client/create-client.dto';
import { ClientService } from '../../services/client.service';

@Controller('clients')
export class ClientController {
  constructor(private service: ClientService) {}

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
  update(@Param('id') id: number, @Body() client: CreateClientDto) {
    return this.service.update(id, client);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(+id);
  }
}
