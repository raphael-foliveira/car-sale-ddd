import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from '../../application/dto/client/create-client.dto';
import { UpdateClientDto } from '../../application/dto/client/update-client.dto';
import { ClientUseCases } from '../../application/use-cases/client.use-cases';
import { ClientRepository } from '../../domain/repositories/client.repository';

@Injectable()
export class ClientAdapter {
  private useCases: ClientUseCases;

  constructor(
    @Inject('ClientRepository') private repository: ClientRepository,
  ) {
    this.useCases = new ClientUseCases(repository);
  }

  findAll() {
    return this.useCases.findAll();
  }

  async findById(id: number) {
    return this.useCases.findById(id);
  }

  create(client: CreateClientDto) {
    return this.useCases.create(client);
  }

  async delete(id: number): Promise<void> {
    return this.useCases.delete(id);
  }

  async update(id: number, client: UpdateClientDto) {
    return this.useCases.update(id, client);
  }
}
