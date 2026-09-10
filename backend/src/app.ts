import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { ENV } from './config/env.js';
import { requestLogger } from './middlewares/logger.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';
import apiRouter from './routes/index.js';

export const createApp = (): Express => {
  const app = express();

  // Security & Utility Middlewares
  app.use(helmet());
  app.use(
    cors({
      origin: [ENV.CLIENT_URL, 'http://localhost:3000', 'http://127.0.0.1:3000'],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestLogger);

  // Root welcome route
  app.get('/', (_req, res) => {
    res.json({
      name: 'Crew Hackathon Backend API',
      version: '1.0.0',
      status: 'active',
      endpoints: {
        health: `${ENV.API_PREFIX}/health`,
      },
    });
  });

  // API Routes
  app.use(ENV.API_PREFIX, apiRouter);

  // 404 and Global Error Handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
