import { UserValidator, UserValidatorFactory } from '../../user.validator';
import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';

let sut: UserValidator;
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
});
