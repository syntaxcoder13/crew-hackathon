import { Router } from 'express';
import healthRoutes from './health.routes.js';

const apiRouter = Router();

// Mount sub-routes
apiRouter.use('/', healthRoutes);

export default apiRouter;
