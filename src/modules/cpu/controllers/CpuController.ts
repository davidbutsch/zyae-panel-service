import { Get, JsonController } from "routing-controllers";
import { ICpuService } from "@/modules/cpu";

import { inject, injectable } from "tsyringe";

@injectable()
@JsonController("/cpu")
export class CpuController {
  constructor(@inject("CpuService") private cpuService: ICpuService) {}

  @Get("/info")
  async getCpuInfo() {
    return await this.cpuService.getInfo();
  }

  @Get("/usage")
  async getCpuUsage() {
    return { usage: await this.cpuService.getUsage() };
  }
}
