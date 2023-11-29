import { UserEntity, UserProps } from '../../entities/user.entity';
import { UserDataBuilder } from '../../testing/helpers/user-data-builder';

describe('UserEntity unit test', () => {
  let props: UserProps;
  let sut: UserEntity;
  beforeEach(() => {
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Constructor method ', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toEqual('string');
  });

  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toEqual('string');
  });

  it('Getter of password field', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toEqual('string');
  });

  it('Getter of createdAt field', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Setter of name field', () => {
    const name = 'other name';
    sut['name'] = name;
    expect(sut.props.name).toBe(name);
    expect(typeof sut.props.name).toEqual('string');
  });

  it('Setter of password field', () => {
    const password = 'other password';
    sut['password'] = password;
    expect(sut.props.password).toBe(password);
    expect(typeof sut.props.password).toEqual('string');
  });

  it('Should update the name field', () => {
    const name = 'other name';
    sut.updateName(name);
    expect(sut.name).toBe(name);
  });

  it('Should update the password field', () => {
    const password = 'other password';
    sut.updatePassword(password);
    expect(sut.password).toBe(password);
  });
});
