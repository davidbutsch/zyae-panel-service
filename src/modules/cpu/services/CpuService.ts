import { CpuInfo, ICpuService } from "@/modules/cpu";

import { injectable } from "tsyringe";
import os from "os";
import osu from "os-utils";

@injectable()
export class CpuService implements ICpuService {
  async getInfo(): Promise<CpuInfo> {
    const cpu0 = os.cpus()[0];
    const info = {
      model: cpu0.model.trim(),
      speed: cpu0.speed,
      count: osu.cpuCount(),
      uptime: osu.sysUptime(),
    };

    return info;
  }

  async getUsage(): Promise<number> {
    const usage = await new Promise<number>((resolve) =>
      osu.cpuUsage((data) => resolve(data * 100))
    );

    return usage;
  }
}
