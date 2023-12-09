export class Salesperson {
  constructor(
    public readonly id: number,
    public name: string,
    public email: string,
    public password: string,
    public phone: string,
    public readonly nationalId: string,
    public address: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
