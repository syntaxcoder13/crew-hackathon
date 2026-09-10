import { createApp } from './app.js';
import { ENV } from './config/env.js';

const app = createApp();

const server = app.listen(ENV.PORT, () => {
  console.log(`=================================`);
  console.log(`🚀 Server running in ${ENV.NODE_ENV} mode`);
  console.log(`📡 URL: http://localhost:${ENV.PORT}`);
  console.log(`🩺 Health check: http://localhost:${ENV.PORT}${ENV.API_PREFIX}/health`);
  console.log(`=================================`);
});

// Graceful shutdown
const handleTermination = (signal: string) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Forcing server shutdown after timeout.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => handleTermination('SIGTERM'));
process.on('SIGINT', () => handleTermination('SIGINT'));
