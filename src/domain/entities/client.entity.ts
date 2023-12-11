export class Client {
  private _nationalId: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _phone: string;
  private _address: string;

  constructor(
    private _id: number = null,
    private _createdAt: Date = null,
    private _updatedAt: Date = null,
  ) {}

  get id() {
    return this._id;
  }

  get nationalId() {
    return this._nationalId;
  }

  setNationalId(nationalId: string) {
    if (this.nationalId) {
      throw new Error('National ID cannot be changed');
    }
    this._nationalId = nationalId;
    return this;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get name() {
    return this._name;
  }

  setName(name: string) {
    this._name = name;
    return this;
  }

  get email() {
    return this._email;
  }

  setEmail(email: string) {
    this._email = email;
    return this;
  }

  get password() {
    return this._password;
  }

  setPassword(password: string) {
    this._password = password;
    return this;
  }

  get phone() {
    return this._phone;
  }

  setPhone(phone: string) {
    this._phone = phone;
    return this;
  }

  get address() {
    return this._address;
  }

  setAddress(address: string) {
    this._address = address;
    return this;
  }
}
