import { IPerformanceService } from "./IPerformanceService";
import { injectable } from "tsyringe";

@injectable()
export class PerformanceService implements IPerformanceService {
  async getAllMetrics(): Promise<string> {
    return "metrics";
  }
}
