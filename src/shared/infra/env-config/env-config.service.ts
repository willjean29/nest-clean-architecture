import { Injectable } from '@nestjs/common';
import { EnvConfig, EnvNames } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}

  getAppPort(): number {
    return Number(this.configService.get<number>(EnvNames.Port));
  }

  getNodeEnv(): string {
    return this.configService.get<string>(EnvNames.NodeEnv);
  }
}
