export class Car {
  private _brand: string;
  private _color: string;
  private _model: string;
  private _year: number;
  private _price: number;

  constructor(
    private _id: number = null,
    private _createdAt: Date = null,
    private _updatedAt: Date = null,
  ) {}

  get price() {
    return this._price;
  }

  setPrice(price: number) {
    if (price < 0) {
      throw new Error('Price must be greater than 0');
    }
    this._price = price;
    return this;
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

  setBrand(brand: string) {
    if (!brand) {
      throw new Error('Brand is required');
    }
    this._brand = brand;
    return this;
  }

  get color() {
    return this._color;
  }

  setColor(color: string) {
    if (!color) {
      throw new Error('Color is required');
    }
    this._color = color;
    return this;
  }

  get model() {
    return this._model;
  }

  setModel(model: string) {
    if (!model) {
      throw new Error('Model is required');
    }
    this._model = model;
    return this;
  }

  get year() {
    return this._year;
  }

  setYear(year: number) {
    if (year < 0) {
      throw new Error('Year must be greater than 0');
    }
    this._year = year;
    return this;
  }
}
