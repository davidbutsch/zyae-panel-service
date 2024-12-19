import { Get, JsonController } from "routing-controllers";
import { IMemoryService } from "@/modules/memory";

import { inject, injectable } from "tsyringe";

@injectable()
@JsonController("/memory")
export class MemoryController {
  constructor(@inject("MemoryService") private memoryService: IMemoryService) {}

  @Get("/total")
  async getTotalMemory() {
    return { total: this.memoryService.getTotalGb() };
  }

  @Get("/usage")
  async getMemoryUsage() {
    return {
      usage: {
        gb: this.memoryService.getUsageGb(),
        percent: this.memoryService.getUsagePercent,
      },
    };
  }
}
