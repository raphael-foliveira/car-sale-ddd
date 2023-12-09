export class Salesperson {
  constructor(
    private _id: number,
    private _nationalId: string,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _name: string,
    private _email: string,
    private _password: string,
    private _phone: string,
    private _address: string,
  ) {}

  get id() {
    return this._id;
  }

  get nationalId() {
    return this._nationalId;
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

  get email() {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get phone() {
    return this._phone;
  }

  set phone(phone: string) {
    this._phone = phone;
  }

  get address() {
    return this._address;
  }

  set address(address: string) {
    this._address = address;
  }
}
