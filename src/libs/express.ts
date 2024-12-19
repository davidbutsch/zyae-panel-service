import {
  ErrorLogger,
  HttpErrorHandler,
  NoRouteHandler,
  RequestLogger,
  ToHttpError,
} from "@/middlewares";
import { ForbiddenError, useExpressServer } from "routing-controllers";
import { config, defaultValidationConfig } from "@/common";
import express, { Express } from "express";

import { CpuController } from "@/modules/cpu";
import { Logger } from ".";
import { MemoryController } from "@/modules/memory";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

const securityMiddleware = (app: Express) => {
  app.enable("trust proxy");
  app.use(helmet());
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || config.corsWhitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new ForbiddenError("Not allowed by CORS"), false);
        }
      },
      credentials: true,
    })
  );
};

const standardMiddleware = (app: Express) => {
  app.use(express.json());
  app.use(cookieParser());
};

export const app = express();

securityMiddleware(app);
standardMiddleware(app);

useExpressServer(app, {
  controllers: [CpuController, MemoryController],
  routePrefix: config.basePath,
  defaultErrorHandler: false,
  validation: defaultValidationConfig,
  middlewares: [
    RequestLogger,
    NoRouteHandler,
    ToHttpError,
    HttpErrorHandler,
    ErrorLogger,
  ],
});

app.listen(config.port, () => {
  Logger.info(`HTTP server listening on port ${config.port}`);
});
