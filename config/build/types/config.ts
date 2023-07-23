export type BuildModeType = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildOptionsType {
  mode: BuildModeType;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnvType {
  mode: BuildModeType;
  port: number;
}
