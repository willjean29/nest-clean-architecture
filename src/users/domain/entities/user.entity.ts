import { Entity } from '../../../shared/domain/entities/entity';
import { UserValidatorFactory } from '../validators/user.validator';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    UserEntity.validate(props);
    super(props, id);
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  updateName(name: string): void {
    UserEntity.validate({ ...this.props, name });
    this.name = name;
  }

  updatePassword(password: string): void {
    UserEntity.validate({ ...this.props, password });
    this.password = password;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  private set name(name: string) {
    this.props.name = name;
  }

  private set password(password: string) {
    this.props.password = password;
  }

  static validate(props: UserProps) {
    const validator = UserValidatorFactory.create();
    validator.validate(props);
  }
}
