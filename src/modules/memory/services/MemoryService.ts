import { IMemoryService } from "@/modules/memory";
import osu from "os-utils";

export class MemoryService implements IMemoryService {
  getTotalGb(): number {
    const totalMb = osu.totalmem();
    const totalGb = totalMb * 10 ** -3;

    return totalGb;
  }
  getUsageGb(): number {
    // osu reports in mb
    const freeMb = osu.freemem();
    const totalMb = osu.totalmem();

    const usageMb = totalMb - freeMb;
    const usageGb = usageMb * 10 ** -3; // gb = mb * 10^-3

    return usageGb;
  }
  getUsagePercent(): number {
    const freePercentage = osu.freememPercentage();

    return freePercentage;
  }
}
