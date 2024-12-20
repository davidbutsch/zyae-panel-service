import { CpuInfo, CpuSpeed, CpuUsage, ICpuService } from "@/modules/cpu";

import { CelsiusToFahrenheit } from "@/common";
import { NotFoundError } from "routing-controllers";
import { injectable } from "tsyringe";
import si from "systeminformation";

@injectable()
export class CpuService implements ICpuService {
  async getInfo(): Promise<CpuInfo> {
    const cpu = await si.cpu();
    const { uptime } = si.time();

    const info: CpuInfo = {
      model: cpu.brand,
      cores: cpu.cores,
      physicalCores: cpu.physicalCores,
      speed: cpu.speed,
      uptime,
    };

    return info;
  }

  async getUsage(): Promise<CpuUsage> {
    const currentLoad = await si.currentLoad();

    const usage: CpuUsage = {
      average: currentLoad.avgLoad,
      current: currentLoad.currentLoad,
    };

    return usage;
  }

  async getSpeed(): Promise<CpuSpeed> {
    const currentSpeed = await si.cpuCurrentSpeed();

    const speed: CpuSpeed = {
      average: currentSpeed.avg,
      cores: currentSpeed.cores,
    };

    return speed;
  }

  async getTemperature(): Promise<number> {
    const cpuTemperature = await si.cpuTemperature();

    const temperature = cpuTemperature.main;

    if (temperature == null)
      throw new NotFoundError("Temperature metric not found on system");

    return CelsiusToFahrenheit(temperature);
  }
}
