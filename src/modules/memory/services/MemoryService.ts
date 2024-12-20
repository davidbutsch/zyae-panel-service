import { IMemoryService, MemoryUsage } from "@/modules/memory";

import { BYTES_IN_GIGABYTE } from "@/common";
import si from "systeminformation";

export class MemoryService implements IMemoryService {
  async getUsage(): Promise<MemoryUsage> {
    const memory = await si.mem(); // systeminformation reports in bytes

    const usage: MemoryUsage = {
      total: memory.total / BYTES_IN_GIGABYTE, // convert to gigabytes
      used: memory.used / BYTES_IN_GIGABYTE,
      percentageUsed: 100 * (memory.used / memory.total),
    };

    return usage;
  }
}
