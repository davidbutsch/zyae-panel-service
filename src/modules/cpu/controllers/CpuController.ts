import { Get, JsonController } from "routing-controllers";
import { ICpuService } from "@/modules/cpu";

import { inject, injectable } from "tsyringe";

@injectable()
@JsonController("/cpu")
export class CpuController {
  constructor(@inject("CpuService") private cpuService: ICpuService) {}

  @Get("/info")
  async getCpuInfo() {
    return { info: await this.cpuService.getInfo() };
  }

  @Get("/usage")
  async getCpuUsage() {
    return { usage: await this.cpuService.getUsage() };
  }

  @Get("/speed")
  async getCpuSpeed() {
    return { speed: await this.cpuService.getSpeed() };
  }

  @Get("/temperature")
  async getCpuTemperature() {
    return { temperature: await this.cpuService.getTemperature() };
  }
}
