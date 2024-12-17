import { Get, JsonController } from "routing-controllers";

import { inject, injectable } from "tsyringe";
import { IPerformanceService } from "@/modules/performance";

@injectable()
@JsonController("/performance")
export class PerformanceController {
  constructor(
    @inject("PerformanceService")
    private performanceService: IPerformanceService
  ) {}

  @Get("/all")
  async getAllMetrics() {
    const metrics = await this.performanceService.getAllMetrics();

    return metrics;
  }
}
