export class Sale {
  constructor(
    private _id: number,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _carId: number,
    private _clientId: number,
    private _salesPersonId: number,
    private _finalPrice: number,
    private _discount: number,
  ) {}

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get carId() {
    return this._carId;
  }

  set carId(carId: number) {
    this._carId = carId;
  }

  get clientId() {
    return this._clientId;
  }

  set clientId(clientId: number) {
    this._clientId = clientId;
  }

  get salesPersonId() {
    return this._salesPersonId;
  }

  set salesPersonId(salesPersonId: number) {
    this._salesPersonId = salesPersonId;
  }

  get finalPrice() {
    return this._finalPrice;
  }

  set finalPrice(price: number) {
    this._finalPrice = price;
  }

  get discount() {
    return this._discount;
  }

  set discount(discount: number) {
    this._discount = discount;
  }
}
