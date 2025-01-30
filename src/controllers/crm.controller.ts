import { Router } from 'express';

import Paths from '../constants/paths';
import { createRecord, getAllRecords, getTypeDefinitions, getTypeNames, patchRecord,  searchRecords } from '../services/dataio.service';
import { expressjwt as jwt } from 'express-jwt';
import { checkSchema } from 'express-validator';
import { dataIOCreateRecordBody, dataIOGetTypeDefinitionsRecordBody, dataIOGetTypeNamesRecordBody, dataIOPatchRecordBody, dataIOSearchRecordsBody } from '../validationSchemas/dataio';
import checkValidationErrors from '../middleware/checkValidationErrors';
import env from '../env';

const crmRouter = Router();

crmRouter.post(
  Paths.CRM.CreateRecord.Post,
  jwt({
    secret: env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
  }),
  checkSchema(dataIOCreateRecordBody, ['body']),
  checkValidationErrors,
  createRecord,
);

crmRouter.post(
  Paths.CRM.PatchRecord.Post,
  jwt({
    secret: env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
  }),
  checkSchema(dataIOPatchRecordBody, ['body']),
  checkValidationErrors,
  patchRecord,
);

crmRouter.post(
  Paths.CRM.SearchRecords.Post,
  jwt({
    secret: env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
  }),
  checkSchema(dataIOSearchRecordsBody, ['body']),
  checkValidationErrors,
  searchRecords,
);

crmRouter.post(
  Paths.CRM.GetTypeNames.Post,
  jwt({
    secret: env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
  }),
  checkSchema(dataIOGetTypeNamesRecordBody, ['body']),
  checkValidationErrors,
  getTypeNames,
);

crmRouter.post(
  Paths.CRM.GetTypeDefinitions.Post,
  jwt({
    secret: env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
  }),
  checkSchema(dataIOGetTypeDefinitionsRecordBody, ['body']),
  checkValidationErrors,
  getTypeDefinitions,
);

crmRouter.get(
  Paths.CRM.GetAllRecords.Get,
  /*jwt({
    secret: env.JWT_SECRET_KEY,
    algorithms: ['HS256'],
  }),
  checkSchema(dataIOGetTypeNamesRecordBody, ['body']),
  checkValidationErrors,*/
  getAllRecords,
);



export default crmRouter;
