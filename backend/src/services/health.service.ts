import { HealthStatus } from '../types/index.js';
import { ENV } from '../config/env.js';

export class HealthService {
  static getHealth(): HealthStatus {
    const memory = process.memoryUsage();
    return {
      status: 'ok',
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      environment: ENV.NODE_ENV,
      memoryUsage: {
        rss: `${Math.round((memory.rss / 1024 / 1024) * 100) / 100} MB`,
        heapTotal: `${Math.round((memory.heapTotal / 1024 / 1024) * 100) / 100} MB`,
        heapUsed: `${Math.round((memory.heapUsed / 1024 / 1024) * 100) / 100} MB`,
      },
    };
  }
}
