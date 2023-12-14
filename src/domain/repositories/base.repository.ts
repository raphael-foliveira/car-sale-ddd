export interface BaseRepository<T> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T>;
  create(car: T): Promise<T>;
  delete(id: number): Promise<void>;
  update(car: T): Promise<T>;
}
