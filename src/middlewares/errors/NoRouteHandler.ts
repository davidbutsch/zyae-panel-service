import {
  ExpressMiddlewareInterface,
  Middleware,
  NotFoundError,
} from "routing-controllers";
import { NextFunction, Request, Response } from "express";

@Middleware({ type: "after" })
export class NoRouteHandler implements ExpressMiddlewareInterface {
  public use(_req: Request, res: Response, next: NextFunction): void {
    if (res.headersSent)
      res.end(); // end response if header data has already been sent
    else next(new NotFoundError("Route not found"));
  }
}
