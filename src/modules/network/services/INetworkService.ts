export type NetworkTransferMetrics = {
  rxKb: number;
  txKb: number;
  rxKbPerSec: number;
  txKbPerSec: number;
};

export interface INetworkService {
  getTransferMetrics(): Promise<NetworkTransferMetrics>;
}
