import { Router } from 'express';

import Paths from '../constants/paths';
import { saveModel } from '../services/model.service';

const modelRouter = Router();

modelRouter.post(
  Paths.Model.CreateModel.Post,
 /* jwt({
    secret: env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
  }),
  checkSchema(dataIOCreateRecordBody, ['body']),
  checkValidationErrors,*/
  saveModel,
);




export default modelRouter;
