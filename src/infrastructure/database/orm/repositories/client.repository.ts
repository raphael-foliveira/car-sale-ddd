import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../../../domain/entities/client.entity';
import { ClientRepository } from '../../../../domain/repositories/client.repository';

export class ClientOrmRepository implements ClientRepository {
  constructor(
    @InjectRepository(Client)
    private repository: Repository<Client>,
  ) {}

  findAll(): Promise<Client[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Client> {
    return this.repository.findOne({ where: { id } });
  }

  create(client: Client): Promise<Client> {
    return this.repository.save({
      address: client.address,
      email: client.email,
      name: client.name,
      nationalId: client.nationalId,
      password: client.password,
      phone: client.phone,
    });
  }

  async delete(id: number): Promise<void> {
    const dbClient = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbClient);
  }

  async update(client: Client): Promise<Client> {
    await this.repository.update({ id: client.id }, client);
    return this.repository.findOne({
      where: { id: client.id },
    });
  }
}
