import { IDiskService } from "@/modules/disk";
import cds from "check-disk-space";
import { config } from "@/common";
import { injectable } from "tsyringe";

@injectable()
export class DiskService implements IDiskService {
  async getTotalGb(): Promise<number> {
    const { size } = await cds(config.diskPath);

    const totalGb = size * 10 ** -9;

    return totalGb;
  }

  async getUsageGb(): Promise<number> {
    const { free, size } = await cds(config.diskPath); // cds reports in bytes

    const usageBytes = size - free;

    const usageGb = usageBytes * 10 ** -9; // gb = byte * 10^-9

    return usageGb;
  }

  async getUsagePercent(): Promise<number> {
    const total = await this.getTotalGb();
    const used = await this.getUsageGb();

    const percent = (used / total) * 100;

    return percent;
  }
}
