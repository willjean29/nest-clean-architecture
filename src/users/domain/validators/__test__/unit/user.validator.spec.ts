import { UserRules, UserValidator, UserValidatorFactory } from '../../user.validator';
import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';

let sut: UserValidator;
const props = UserDataBuilder({});
describe('UserValidator unit test', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create();
  });

  describe('Name field ', () => {
    it('Invalidation cases for name field', () => {
      let isValid = sut.validate(null);
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual([
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...props,
        name: '',
      });

      expect(sut.errors['name']).toStrictEqual(['name should not be empty']);

      isValid = sut.validate({
        ...props,
        name: 10 as any,
      });

      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...props,
        name: 'a'.repeat(256),
      });

      expect(sut.errors['name']).toStrictEqual(['name must be shorter than or equal to 255 characters']);
    });
  });

  describe('Email field ', () => {
    it('Invalidation cases for email field', () => {
      let isValid = sut.validate(null);
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toStrictEqual([
        'email should not be empty',
        'email must be a string',
        'email must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...props,
        email: '',
      });

      expect(sut.errors['email']).toStrictEqual(['email should not be empty']);

      isValid = sut.validate({
        ...props,
        email: 10 as any,
      });

      expect(sut.errors['email']).toStrictEqual([
        'email must be a string',
        'email must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...props,
        email: 'a'.repeat(256),
      });

      expect(sut.errors['email']).toStrictEqual(['email must be shorter than or equal to 255 characters']);
    });
  });

  describe('Password field ', () => {
    it('Invalidation cases for password field', () => {
      let isValid = sut.validate(null);
      expect(isValid).toBeFalsy();
      expect(sut.errors['password']).toStrictEqual([
        'password should not be empty',
        'password must be a string',
        'password must be shorter than or equal to 100 characters',
      ]);

      isValid = sut.validate({
        ...props,
        password: '',
      });

      expect(sut.errors['password']).toStrictEqual(['password should not be empty']);

      isValid = sut.validate({
        ...props,
        password: 10 as any,
      });

      expect(sut.errors['password']).toStrictEqual([
        'password must be a string',
        'password must be shorter than or equal to 100 characters',
      ]);

      isValid = sut.validate({
        ...props,
        password: 'a'.repeat(256),
      });

      expect(sut.errors['password']).toStrictEqual(['password must be shorter than or equal to 100 characters']);
    });
  });

  describe('CreatedAt field ', () => {
    it('Invalidation cases for createdAt field', () => {
      let isValid = sut.validate({ ...props, createdAt: 10 as any });
      expect(isValid).toBeFalsy();
      expect(sut.errors['createdAt']).toStrictEqual(['createdAt must be a Date instance']);

      isValid = sut.validate({
        ...props,
        createdAt: '2023' as any,
      });

      expect(sut.errors['createdAt']).toStrictEqual(['createdAt must be a Date instance']);
    });
  });

  it('valid case for user validator class', () => {
    const isValid = sut.validate(props);
    expect(isValid).toBeTruthy();
    expect(sut.validatedData).toStrictEqual(new UserRules(props));
  });
});
