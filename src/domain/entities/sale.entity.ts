export class Sale {
  private _carId: number;
  private _clientId: number;
  private _salespersonId: number;
  private _finalPrice: number;
  private _discount: number;

  constructor(
    private _id: number = null,
    private _createdAt: Date = null,
    private _updatedAt: Date = null,
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

  setCarId(carId: number) {
    this._carId = carId;
    return this;
  }

  get clientId() {
    return this._clientId;
  }

  setClientId(clientId: number) {
    this._clientId = clientId;
    return this;
  }

  get salespersonId() {
    return this._salespersonId;
  }

  setSalespersonId(salespersonId: number) {
    this._salespersonId = salespersonId;
    return this;
  }

  get finalPrice() {
    return this._finalPrice;
  }

  setFinalPrice(price: number) {
    this._finalPrice = price;
    return this;
  }

  get discount() {
    return this._discount;
  }

  setDiscount(discount: number) {
    this._discount = discount;
    return this;
  }
}
