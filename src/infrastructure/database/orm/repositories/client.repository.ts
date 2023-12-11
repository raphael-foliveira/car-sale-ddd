import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../../../domain/entities/client.entity';
import { ClientRepository } from '../../../../domain/repositories/client.repository';
import { ClientEntity } from '../entities/client.entity';

export class ClientOrmRepository implements ClientRepository {
  constructor(
    @InjectRepository(ClientEntity)
    private repository: Repository<ClientEntity>,
  ) {}

  async findAll(): Promise<Client[]> {
    const dbClients = await this.repository.find();
    return dbClients.map(this.toDomainEntity);
  }

  async findById(id: number): Promise<Client> {
    const dbClient = await this.repository.findOne({ where: { id } });
    return this.toDomainEntity(dbClient);
  }

  async create(client: Client): Promise<Client> {
    const dbClient = await this.repository.save({
      address: client.address,
      email: client.email,
      name: client.name,
      nationalId: client.nationalId,
      password: client.password,
      phone: client.phone,
    });
    return this.toDomainEntity(dbClient);
  }

  async delete(id: number): Promise<void> {
    const dbClient = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbClient);
  }

  async update(client: Client): Promise<Client> {
    await this.repository.update({ id: client.id }, client);
    const updatedClient = await this.repository.findOne({
      where: { id: client.id },
    });
    return this.toDomainEntity(updatedClient);
  }

  private toDomainEntity(client: ClientEntity): Client {
    if (!client) {
      return;
    }
    return new Client(client.id, client.createdAt, client.updatedAt)
      .setNationalId(client.nationalId)
      .setName(client.name)
      .setEmail(client.email)
      .setPassword(client.password)
      .setPhone(client.phone)
      .setAddress(client.address);
  }
}
