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
import { ClientAdapter } from '../../adapters/client.adapter';
import { ClientResponseDto } from '../dto/clients/client-response.dto';
import { CreateClientRequestDto } from '../dto/clients/create-client.dto';
import { UpdateClientRequestDto } from '../dto/clients/update-client.dto';

@Controller('clients')
@ApiTags('clients')
export class ClientController {
  constructor(private service: ClientAdapter) {}

  @Get()
  @ApiResponse({ type: [ClientResponseDto] })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: ClientResponseDto })
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Post()
  @ApiResponse({ type: ClientResponseDto })
  create(@Body() @Body() client: CreateClientRequestDto) {
    return this.service.create(client);
  }

  @Put(':id')
  @ApiResponse({ type: ClientResponseDto })
  update(@Param('id') id: number, @Body() client: UpdateClientRequestDto) {
    return this.service.update(id, client);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(+id);
  }
}
