import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";


@Injectable()
export class LoggingMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {

		const method = req.method;
      const url = req.url;

		console.log(`[${method}] ${url}`);

		next()
  }
}