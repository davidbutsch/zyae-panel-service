import {
  ClassConstructor,
  IocAdapter,
  useContainer,
} from "routing-controllers";
import { DependencyContainer, container } from "tsyringe";

import { CpuService } from "@/modules/cpu";
import { MemoryService } from "@/modules/memory";

class TsyringeAdapter implements IocAdapter {
  constructor(private readonly TsyringeContainer: DependencyContainer) {}

  get<T>(someClass: ClassConstructor<T>): T {
    const childContainer = this.TsyringeContainer.createChildContainer();
    return childContainer.resolve<T>(someClass);
  }
}

container.register("CpuService", {
  useClass: CpuService,
});

container.register("MemoryService", {
  useClass: MemoryService,
});

useContainer(new TsyringeAdapter(container));
