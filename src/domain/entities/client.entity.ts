export class Client {
  constructor(
    public readonly id: number,
    public readonly nationalId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public name: string,
    public email: string,
    public password: string,
    public phone: string,
    public address: string,
  ) {}
}
