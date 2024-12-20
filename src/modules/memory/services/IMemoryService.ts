export type MemoryUsage = {
  total: number;
  used: number;
  percentageUsed: number;
};

export interface IMemoryService {
  getUsage(): Promise<MemoryUsage>;
}
