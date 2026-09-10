import { Request, Response, NextFunction } from 'express';
import { ResponseUtil } from '../utils/response.js';
import { ENV } from '../config/env.js';

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const notFoundHandler = (req: Request, res: Response): void => {
  ResponseUtil.error(
    res,
    `Route not found: ${req.method} ${req.originalUrl}`,
    404
  );
};

export const errorHandler = (
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = (err as AppError).statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const errorDetails = !ENV.IS_PRODUCTION ? err.stack || null : null;

  ResponseUtil.error(res, message, statusCode, errorDetails);
};
