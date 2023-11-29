import { v4 as uuidv4 } from 'uuid';
import { UuidAdapter } from './uuid.adapter';

export class UuidV4Adapter implements UuidAdapter {
  getUuid(): string {
    return uuidv4();
  }
}

export const uuidV4Adapter = new UuidV4Adapter();
