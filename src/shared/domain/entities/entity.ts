import { uuidV4Adapter } from '../../adapters/uuid';

export abstract class Entity<T> {
  public readonly _id: string;
  public readonly props: T;

  constructor(props: T, id?: string) {
    this._id = id || uuidV4Adapter.getUuid();
    this.props = props;
  }

  get id() {
    return this._id;
  }

  toJSON(): Required<{ id: string } & T> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & T>;
  }
}
