import { Router } from 'express';
import Paths from '../constants/paths';
import authRouter from './auth.controller';
import dataIORouter from './dataio.controller';
import modelRouter from './swaggerController';
import crmRouter from './crm.controller';

const apiRouter = Router();

apiRouter.use(Paths.DataIO.Base, dataIORouter);

apiRouter.use(Paths.Auth.Base, authRouter);

apiRouter.use(Paths.Model.Base, modelRouter)

apiRouter.use(Paths.CRM.Base, crmRouter);

export default apiRouter;
