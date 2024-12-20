export type CpuInfo = {
  model: string;
  cores: number;
  physicalCores: number;
  speed: number;
  uptime: number;
};

export type CpuUsage = {
  average: number;
  current: number;
};

export type CpuSpeed = {
  average: number;
  cores: number[];
};

export interface ICpuService {
  getInfo(): Promise<CpuInfo>;
  getUsage(): Promise<CpuUsage>;
  getSpeed(): Promise<CpuSpeed>;
  getTemperature(): Promise<number>;
}
