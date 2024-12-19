import { Get, JsonController } from "routing-controllers";

import { inject, injectable } from "tsyringe";
import { IDiskService } from "@/modules/disk";

@injectable()
@JsonController("/disk")
export class DiskController {
  constructor(@inject("DiskService") private diskService: IDiskService) {}

  @Get("/total")
  async getDiskTotal() {
    return { total: await this.diskService.getTotalGb() };
  }

  @Get("/usage")
  async getDiskUsage() {
    return {
      usage: {
        gb: await this.diskService.getUsageGb(),
        percent: await this.diskService.getUsagePercent(),
      },
    };
  }
}
