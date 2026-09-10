import morgan from 'morgan';
import { ENV } from '../config/env.js';

export const requestLogger = morgan(
  ENV.IS_PRODUCTION ? 'combined' : 'dev'
);
