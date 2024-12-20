import { Get, JsonController } from "routing-controllers";
import { INetworkService } from "@/modules/network";

import { inject, injectable } from "tsyringe";

@injectable()
@JsonController("/network")
export class NetworkController {
  constructor(
    @inject("NetworkService") private networkService: INetworkService
  ) {}

  @Get("/TransferMetrics")
  async getMemoryUsage() {
    return { transferMetrics: await this.networkService.getTransferMetrics() };
  }
}
