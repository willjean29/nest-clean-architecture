import { v4 as uuidv4, validate } from 'uuid';
import { UuidAdapter } from './uuid.adapter';

export class UuidV4Adapter implements UuidAdapter {
  getUuid(): string {
    return uuidv4();
  }

  validate(uuid: string): boolean {
    return validate(uuid);
  }
}

export const uuidV4Adapter = new UuidV4Adapter();
