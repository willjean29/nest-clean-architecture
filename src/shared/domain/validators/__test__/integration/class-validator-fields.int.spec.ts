import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ClassValidatorFields } from '../../class-validator-fields';

class StubRules {
  @MaxLength(15)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

class SutbClassValidatorFields extends ClassValidatorFields<StubRules> {
  validate(data: any) {
    return super.validate(new StubRules(data));
  }
}
describe('ClassValidatorFields integration test', () => {
  it('Should validate with errors ', () => {
    const validator = new SutbClassValidatorFields();
    expect(validator.validate(null)).toBeFalsy();
    expect(validator.errors).toEqual({
      name: [
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 15 characters',
      ],
      price: ['price should not be empty', 'price must be a number conforming to the specified constraints'],
    });
  });

  it('Should validate without errors ', () => {
    const validator = new SutbClassValidatorFields();
    expect(validator.validate({ name: 'value', price: 10 })).toBeTruthy();
    expect(validator.validatedData).toStrictEqual(new StubRules({ name: 'value', price: 10 }));
  });
});
