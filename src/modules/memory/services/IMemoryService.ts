export interface IMemoryService {
  getTotalGb(): number;
  getUsageGb(): number;
  getUsagePercent(): number;
}
