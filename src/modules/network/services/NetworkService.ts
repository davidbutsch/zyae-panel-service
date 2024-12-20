import { INetworkService, NetworkTransferMetrics } from "@/modules/network";

import { BYTES_IN_KILOBYTE } from "@/common";
import si from "systeminformation";

export class NetworkService implements INetworkService {
  async getTransferMetrics(): Promise<NetworkTransferMetrics> {
    const defaultInterface = await si.networkInterfaceDefault();
    const defaultInterfaceStats = (await si.networkStats(defaultInterface))[0]; // returns array with index 0 being default

    const transferMetrics: NetworkTransferMetrics = {
      rxKb: defaultInterfaceStats.rx_bytes, // read
      txKb: defaultInterfaceStats.tx_bytes, // total
      rxKbPerSec: defaultInterfaceStats.rx_sec,
      txKbPerSec: defaultInterfaceStats.tx_sec,
    };

    Object.keys(transferMetrics).forEach((key) => {
      transferMetrics[key as keyof NetworkTransferMetrics] /= BYTES_IN_KILOBYTE; // convert each to kilobytes
    });

    return transferMetrics;
  }
}
