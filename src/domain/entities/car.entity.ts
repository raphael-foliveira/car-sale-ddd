export class Car {
  private _price: number;

  constructor(
    public readonly id: number,
    public readonly brand: string,
    public readonly color: string,
    public readonly model: string,
    public readonly year: number,
    price: number,
  ) {
    this._price = price;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    if (price < 0) {
      throw new Error('Price must be greater than 0');
    }
    this._price = price;
  }
}
