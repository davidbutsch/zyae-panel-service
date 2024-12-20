import { BYTES_IN_GIGABYTE, BYTES_IN_KILOBYTE } from "@/common";
import { DiskTransferMetrics, DiskUsage, IDiskService } from "@/modules/disk";

import { NotFoundError } from "routing-controllers";
import { injectable } from "tsyringe";
import si from "systeminformation";

@injectable()
export class DiskService implements IDiskService {
  async getFsUsage(): Promise<DiskUsage[]> {
    const fsSize = await si.fsSize();

    const fsUsage = fsSize.map((fs) => {
      const usage: DiskUsage = {
        mount: fs.mount,
        size: fs.size / BYTES_IN_GIGABYTE, // convert to gigabytes
        used: fs.used / BYTES_IN_GIGABYTE,
        percentageUsed: fs.use,
      };

      return usage;
    });

    return fsUsage;
  }

  async getTransferMetrics(): Promise<DiskTransferMetrics> {
    const fsStats = await si.fsStats();

    if (fsStats == null)
      throw new NotFoundError("Transfer metrics not found on system");

    const transferMetrics: DiskTransferMetrics = {
      rxKb: fsStats.rx, // read
      wxKb: fsStats.wx, // write
      txKb: fsStats.tx, // total
      rxKbPerSec: fsStats.rx_sec || 0, // default 0 if null
      wxKbPerSec: fsStats.wx_sec || 0, // ^ per second metrics are null on first request
      txKbPerSec: fsStats.tx_sec || 0,
    };

    Object.keys(transferMetrics).forEach((key) => {
      transferMetrics[key as keyof DiskTransferMetrics] /= BYTES_IN_KILOBYTE; // convert each to kilobytes
    });

    return transferMetrics;
  }
}
