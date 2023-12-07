import { UserRules, UserValidator, UserValidatorFactory } from '../../user.validator';
import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';

let sut: UserValidator;
describe('UserValidator unit test', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create();
  });

  it('valid case for user validator class', () => {
    const props = UserDataBuilder({});
    const isValid = sut.validate(props);
    expect(isValid).toBeTruthy();
    expect(sut.validatedData).toStrictEqual(new UserRules(props));
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
        ...UserDataBuilder({}),
        name: '',
      });

      expect(sut.errors['name']).toStrictEqual(['name should not be empty']);

      isValid = sut.validate({
        ...UserDataBuilder({}),
        name: 10 as any,
      });

      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...UserDataBuilder({}),
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
        ...UserDataBuilder({}),
        email: '',
      });

      expect(sut.errors['email']).toStrictEqual(['email should not be empty']);

      isValid = sut.validate({
        ...UserDataBuilder({}),
        email: 10 as any,
      });

      expect(sut.errors['email']).toStrictEqual([
        'email must be a string',
        'email must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...UserDataBuilder({}),
        email: 'a'.repeat(256),
      });

      expect(sut.errors['email']).toStrictEqual(['email must be shorter than or equal to 255 characters']);
    });
  });
});
