import { Get, JsonController } from "routing-controllers";

import { inject, injectable } from "tsyringe";
import { IDiskService } from "@/modules/disk";

@injectable()
@JsonController("/disk")
export class DiskController {
  constructor(@inject("DiskService") private diskService: IDiskService) {}

  @Get("/usage")
  async getFileSystemUsage() {
    return { usage: await this.diskService.getFsUsage() };
  }

  @Get("/transferMetrics")
  async getTransferMetrics() {
    return { transferMetrics: await this.diskService.getTransferMetrics() };
  }
}
