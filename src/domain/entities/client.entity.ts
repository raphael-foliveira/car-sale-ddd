export class Client {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly phone: string,
    public readonly nationalId: string,
    public readonly address: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
