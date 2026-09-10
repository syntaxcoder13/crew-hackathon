import { Request, Response } from 'express';
import { HealthService } from '../services/health.service.js';
import { ResponseUtil } from '../utils/response.js';

export class HealthController {
  static getHealth(_req: Request, res: Response): void {
    const health = HealthService.getHealth();
    ResponseUtil.success(res, health, 'Server is healthy and running');
  }
}
