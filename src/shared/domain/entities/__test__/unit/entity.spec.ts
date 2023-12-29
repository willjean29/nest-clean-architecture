import { uuidV4Adapter } from '../../../../adapters/uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit test', () => {
  const id = '8bd21a72-3238-4c17-9a60-f1326f25ad2c';
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const entity = new StubEntity(props);
    expect(entity.props).toEqual(props);
    expect(entity.id).not.toBeNull();
    expect(uuidV4Adapter.validate(entity.id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const entity = new StubEntity(props, id);
    expect(uuidV4Adapter.validate(entity.id)).toBeTruthy();
    expect(entity.id).toEqual(id);
  });

  it('Should convert a entity to a Javascript Object', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const entity = new StubEntity(props, id);
    expect(entity.toJSON()).toEqual({ id, ...props });
  });
});
