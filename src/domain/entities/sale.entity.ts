export class Sale {
  constructor(
    public readonly id: number,
    public readonly carId: number,
    public readonly clientId: number,
    public readonly salesPersonId: number,
    public readonly price: number,
    public readonly discount: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
