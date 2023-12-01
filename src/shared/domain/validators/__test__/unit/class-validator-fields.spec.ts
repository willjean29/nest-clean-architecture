import * as libClassValidator from 'class-validator';
import { ClassValidatorFields } from '../../class-validator-fields';

class SutbClassValidatorFields extends ClassValidatorFields<{ field: string }> {}
describe('ClassValidatorFields unit test', () => {
  it('Should initialize errors and validatedData variables with null', () => {
    const sut = new SutbClassValidatorFields();
    expect(sut.errors).toBeNull();
    expect(sut.validatedData).toBeNull();
  });

  it('Should validate with errors ', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([{ property: 'field', constraints: { isRequired: 'test error' } }]);
    const sut = new SutbClassValidatorFields();
    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toBeNull();
    expect(sut.errors).toEqual({ field: ['test error'] });
  });

  it('Should validate without errors ', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([]);
    const sut = new SutbClassValidatorFields();
    expect(sut.validate({ field: 'value' })).toBeTruthy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toStrictEqual({ field: 'value' });
    expect(sut.errors).toBeNull();
  });
});
