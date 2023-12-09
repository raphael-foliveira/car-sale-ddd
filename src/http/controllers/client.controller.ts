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
import { ClientUseCases } from '../../application/use-cases/client.use-cases';
import { CreateClientDto } from '../../application/dto/client/create-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private clientUseCases: ClientUseCases) {}

  @Get()
  findAll() {
    return this.clientUseCases.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.clientUseCases.findById(id);
  }

  @Post()
  create(@Body() @Body() client: CreateClientDto) {
    return this.clientUseCases.create(client);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() client: CreateClientDto) {
    return this.clientUseCases.update(id, client);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clientUseCases.delete(+id);
  }
}
