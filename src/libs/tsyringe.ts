import {
  ClassConstructor,
  IocAdapter,
  useContainer,
} from "routing-controllers";
import { DependencyContainer, container } from "tsyringe";
import { IPerformanceService, PerformanceService } from "@/modules/performance";

class TsyringeAdapter implements IocAdapter {
  constructor(private readonly TsyringeContainer: DependencyContainer) {}

  get<T>(someClass: ClassConstructor<T>): T {
    const childContainer = this.TsyringeContainer.createChildContainer();
    return childContainer.resolve<T>(someClass);
  }
}

container.register<IPerformanceService>("PerformanceService", {
  useClass: PerformanceService,
});

useContainer(new TsyringeAdapter(container));
