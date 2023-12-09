export class Sale {
  constructor(
    public readonly id: number,
    public carId: number,
    public clientId: number,
    public salesPersonId: number,
    public price: number,
    public discount: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
