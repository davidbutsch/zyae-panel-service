export interface IDiskService {
  getTotalGb(): Promise<number>;
  getUsageGb(): Promise<number>;
  getUsagePercent(): Promise<number>;
}
