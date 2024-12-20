import { Get, JsonController } from "routing-controllers";
import { IMemoryService } from "@/modules/memory";

import { inject, injectable } from "tsyringe";

@injectable()
@JsonController("/memory")
export class MemoryController {
  constructor(@inject("MemoryService") private memoryService: IMemoryService) {}

  @Get("/usage")
  async getMemoryUsage() {
    return { usage: await this.memoryService.getUsage() };
  }
}
