export class Car {
  constructor(
    private _id: number,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _brand: string,
    private _color: string,
    private _model: string,
    private _year: number,
    private _price: number,
  ) {}

  get price() {
    return this._price;
  }

  set price(price: number) {
    if (price < 0) {
      throw new Error('Price must be greater than 0');
    }
    this._price = price;
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand: string) {
    if (!brand) {
      throw new Error('Brand is required');
    }
    this._brand = brand;
  }

  get color() {
    return this._color;
  }

  set color(color: string) {
    if (!color) {
      throw new Error('Color is required');
    }
    this._color = color;
  }

  get model() {
    return this._model;
  }

  set model(model: string) {
    if (!model) {
      throw new Error('Model is required');
    }
    this._model = model;
  }

  get year() {
    return this._year;
  }

  set year(year: number) {
    if (year < 0) {
      throw new Error('Year must be greater than 0');
    }
    this._year = year;
  }
}
