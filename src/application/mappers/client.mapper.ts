import { Client } from '../../domain/entities/client.entity';
import { ClientDto } from '../dto/client/client.dto';
import { CreateClientDto } from '../dto/client/create-client.dto';
import { UpdateClientDto } from '../dto/client/update-client.dto';

const updateEntity = (client: Client, clientDto: UpdateClientDto): Client => {
  return {
    ...client,
    email: clientDto.email ?? client.email,
    phone: clientDto.phone ?? client.phone,
    address: clientDto.address ?? client.address,
    password: clientDto.password ?? client.password,
  };
};

const createDtoToEntity = (client: CreateClientDto): Client => {
  return {
    nationalId: client.nationalId,
    name: client.name,
    email: client.email,
    password: client.password,
    phone: client.phone,
    address: client.address,
  };
};

const toDto = (client: Client): Omit<ClientDto, 'password'> => {
  return {
    id: client.id,
    name: client.name,
    email: client.email,
    phone: client.phone,
    nationalId: client.nationalId,
    address: client.address,
    createdAt: client.createdAt,
    updatedAt: client.updatedAt,
  };
};

export const clientMapper = {
  updateEntity,
  createDtoToEntity,
  toDto,
};
