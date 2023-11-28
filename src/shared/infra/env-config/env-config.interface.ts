export interface EnvConfig {
  getAppPort(): number;
  getNodeEnv(): string;
}

export enum EnvNames {
  Port = 'PORT',
  NodeEnv = 'NODE_ENV',
}
