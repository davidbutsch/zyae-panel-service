export type CpuInfo = {
  model: string;
  speed: number;
  count: number;
  uptime: number;
};

export interface ICpuService {
  getInfo(): Promise<CpuInfo>;
  getUsage(): Promise<number>;
}
