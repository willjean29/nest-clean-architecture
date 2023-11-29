export interface UuidAdapter {
  getUuid(): string;
  validate(uuid: string): boolean;
}
