export type DiskUsage = {
  mount: string;
  size: number;
  used: number;
  percentageUsed: number;
};

export type DiskTransferMetrics = {
  rxKb: number; // read
  wxKb: number; // write
  txKb: number; // total
  rxKbPerSec: number;
  wxKbPerSec: number;
  txKbPerSec: number;
};

export interface IDiskService {
  getFsUsage(): Promise<DiskUsage[]>;
  getTransferMetrics(): Promise<DiskTransferMetrics>;
}
