import { Client } from '../../../../domain/entities/client.entity';
import { ClientEntity } from '../entities/client.entity';

const toDomainEntity = (client: ClientEntity): Client => {
  if (!client) {
    return;
  }
  return {
    id: client.id,
    createdAt: client.createdAt,
    updatedAt: client.updatedAt,
    nationalId: client.nationalId,
    name: client.name,
    email: client.email,
    password: client.password,
    phone: client.phone,
    address: client.address,
  };
};

export const clientOrmMapper = {
  toDomainEntity,
};
