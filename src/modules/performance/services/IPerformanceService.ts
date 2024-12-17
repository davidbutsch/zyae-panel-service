export interface IPerformanceService {
  getAllMetrics(): Promise<string>;
}
