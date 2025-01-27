import { CreateRecordBody, GetTypeDefinitionsBody, GetTypeNamesBody, PatchRecordBody, SearchRecordsBody, TypeNameInfo } from '../models/datawriteback';
import { IReq, IRes } from '../utils/types';
import { QueryExecutor } from 'src/utils/queryExecutor';
import { FileDB } from 'src/db/fileDB';
import moment from 'moment';
import { ConceptDeclaration, ModelManager } from '@accordproject/concerto-core';
import path from 'path';
import { ModelManagerUtil } from 'src/utils/modelManagerUtil';
import { ResultRehydrator } from 'src/utils/resultRehydrator';
import Data , {BAV, IAccountVerification} from '../models/data';
import mongoose from 'mongoose';
import { convertChalkStringToMarkdown } from 'ts-command-line-args';
import { BankAccountVerificationResponse, convertSourceToTarget, SourceJSON, TargetJSON } from 'src/utils/jsonTransformUtil';
import { BAVSchema } from 'src/models/data';
import { response } from 'express';
import { NextFunction, Request, Response } from 'express';

enum DECORATOR_NAMES {
  TERM = 'Term',
  CRUD = 'Crud',
}

enum CRUD_ARGUMENTS {
  CREATEABLE = 'Createable',
  READABLE = 'Readable',
  UPDATEABLE = 'Updateable',
}
enum ErrorCode {
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  BAD_REQUEST = 'BAD_REQUEST',
}

type ErrorResponse = {
  message: string;
  code: string;
}



/**
 * Formats the date properties of the given data object to 'YYYY-MM-DDTHH:mm:ss.SSSZ'.
 * 
 * Iterates over the properties of the data object and checks if the property
 * is a date-time property based on the typeName. If it is a date-time property,
 * it validates and formats the date to 'YYYY-MM-DDTHH:mm:ss.SSSZ' using moment.
 * 
 * @param data - The data object containing properties to be formatted.
 * @param typeName - The type name used to identify date-time properties.
 * @throws Error if a date property does not match valid ISO 8601 formats.
 */
const formatISO8061DateProperties = (data: object, typeName: string): void => {
  const concept: ConceptDeclaration = CONCEPTS.filter(c => c.getName() === typeName)[0];
  const dataRecord: Record<string, unknown> = data as Record<string, unknown>;

  // Define a regex for valid ISO 8601 date-time formats
  const validISO8601Regex = /^(\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{1,3})?(Z|[+-]\d{2}:\d{2})?)?)$/;

  for (const key in dataRecord) {
    if (concept.getProperty(key).getType() === 'DateTime') {
      const value = dataRecord[key] as string;

      // Validate against allowed ISO 8601 formats
      if (!validISO8601Regex.test(value)) {
        throw new Error(`Invalid date format for property "${key}": "${value}". Must match a valid ISO 8601 format.`);
      }

      // Format to ISO 8601 UTC with 'Z' suffix (e.g., 'YYYY-MM-DDTHH:mm:ss.SSSZ')
      dataRecord[key] = moment.utc(value).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    }
  }
};


/**
 * Converts date properties of the given data object to ISO 8601 format.
 * 
 * Iterates over the properties of the data object and checks if the property
 * is a date-time property based on the typeName. If it is a date-time property,
 * it converts the date to ISO 8601 format using moment.
 * 
 * @param data - The data object containing properties to be converted.
 * @param typeName - The type name used to identify date-time properties.
 */
const convertDateToISO8601 = (data: object, typeName: string): void => {
  const concept: ConceptDeclaration = CONCEPTS.filter(c => c.getName() === typeName)[0];
  const dataRecord: Record<string, unknown> = data as Record<string, unknown>;
  for (const key in dataRecord) {
    if (concept.getProperty(key).getType() === 'DateTime') {
      dataRecord[key] = moment.utc(dataRecord[key] as string).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    }
  }
}

/**
 * Append .json to typeName, so that a file can be created for FileDB
 * @param typeName the typeName to create a file for
 * @returns {string}
 */
const generateFilePath = (typeName: string): string => `${typeName}.json`;

/**
 * Checks if the given declaration is a readable concept by checking for a Crud decorator with "Readable".
 * @param declaration - The declaration to check.
 * @returns {boolean} True if the declaration is a readable concept, false otherwise.
 */
const isReadableConcept = (concept: ConceptDeclaration): boolean => {
  return (concept.getDecorator(DECORATOR_NAMES.CRUD).arguments[0] as string).includes(CRUD_ARGUMENTS.READABLE);
}

/**
 * Generates an error response object with the provided message and code.
 *
 * @param {string} message - The error message.
 * @param {string} code - The error code.
 * @return {ErrorResponse} The generated error response object.
 */
const generateErrorResponse = (message: string, code: string): ErrorResponse => {
  return {
    message,
    code
  }
}

/**
 * Concerto model manager setup using CTO file.
 * Model manager allowes users to load in CTO files and use Concerto model features directly in code.
 */
const MODEL_MANAGER: ModelManager = ModelManagerUtil.createModelManagerFromCTO(path.join(__dirname, "../dataModel/model.cto"));
const CONCEPTS: ConceptDeclaration[] = MODEL_MANAGER.getConceptDeclarations();
const READABLE_CONCEPTS: ConceptDeclaration[] = CONCEPTS.filter(isReadableConcept);

/**
 * Create a record in the database based on the provided data and typeName.
 * @param {IReq<CreateRecordBody>} req - The request object containing data and typeName.
 * @param {IRes} res - The response object to send back.
 * @return {IRes}
 */
export const createRecord = async (req: IReq<CreateRecordBody>, res: IRes): Promise<IRes> => {
  const {
    body: {
      data,
      typeName
    },
  } = req;
  try {
    if (!data || !typeName) {
      return res.status(400).json(generateErrorResponse(ErrorCode.BAD_REQUEST, 'data or typeName missing in request')).send();
    }
    // const db: FileDB = new FileDB(generateFilePath(typeName));
    // const recordId: string = JSON.stringify(db.readFile().length);
    // (data as any)['Id'] = recordId;
    // db.appendToFile(data)

   /* let contact: IContact = JSON.parse(JSON.stringify(data));
    console.log(contact);

    
    //const {typeOfPerson} = contact.data.person;
    
    const {bankAccount} = contact;
    const {person} = contact;
    const {addresses} = contact;
    
    
    const recordId = new mongoose.Types.ObjectId();

    const item = new Data({
      _id: recordId,  
      typeName,  
      bankAccount,
     person,
     addresses
     

    });*/

    let bav: IAccountVerification= JSON.parse(JSON.stringify(data));
    console.debug('### bav:');
    console.debug( bav);

    
    
    /*const {originalRequestData_contacts_bankAccount_sortCode} = bav;
    const {originalRequestData_contacts_bankAccount_clearAccountNumber} = bav;*/
    
    
    const { responseHeader_requestType } = bav;
    const { responseHeader_tenantId } = bav;
    const { responseHeader_clientReferenceId } = bav;
    const { responseHeader_expRequestId } = bav;
    const { responseHeader_messageTime } = bav;
    const { responseHeader_overallResponse_decision } = bav;
    const { responseHeader_overallResponse_decisionText } = bav;
    const { responseHeader_overallResponse_decisionReasons_0 } = bav;
    const { responseHeader_overallResponse_decisionReasons_1 } = bav;
    const { responseHeader_overallResponse_decisionReasons_2 } = bav;
    const { responseHeader_overallResponse_recommendedNextActions } = bav;
    const { responseHeader_overallResponse_spareObjects } = bav;
    const { responseHeader_responseCode } = bav;
    const { responseHeader_responseType } = bav;
    const { responseHeader_responseMessage } = bav;
    const { responseHeader_tenantID } = bav;
    const { clientResponsePayload_orchestrationDecisions_sequenceId } = bav;
    const { clientResponsePayload_orchestrationDecisions_decisionSource } = bav;
    const { clientResponsePayload_orchestrationDecisions_decision } = bav;
    const { clientResponsePayload_orchestrationDecisions_decisionReasons_0 } = bav;
    const { clientResponsePayload_orchestrationDecisions_score } = bav;
    const { clientResponsePayload_orchestrationDecisions_decisionText } = bav;
    const { clientResponsePayload_orchestrationDecisions_nextAction } = bav;
    const { clientResponsePayload_orchestrationDecisions_decisionTime } = bav;
    const { clientResponsePayload_decisionElements_serviceName } = bav;
    const { clientResponsePayload_decisionElements_applicantId } = bav;
    const { clientResponsePayload_decisionElements_warningsErrors } = bav;
    const { clientResponsePayload_decisionElements_otherData_branchData_institutionName } = bav;
    const { clientResponsePayload_decisionElements_otherData_branchData_branchName } = bav;
    const { clientResponsePayload_decisionElements_otherData_branchData_address_1 } = bav;
    const { clientResponsePayload_decisionElements_otherData_branchData_address_2 } = bav;
    const { originalRequestData_application_applicants_id } = bav;
    const { originalRequestData_application_applicants_contactId } = bav;
    const { originalRequestData_source } = bav;
    const { originalRequestData_contacts_id } = bav;
    const { originalRequestData_contacts_person_typeOfPerson } = bav;
    const { originalRequestData_contacts_person_personDetails_dateOfBirth } = bav;
    const { originalRequestData_contacts_person_names_id } = bav;
    const { originalRequestData_contacts_person_names_title } = bav;
    const { originalRequestData_contacts_person_names_firstName } = bav;
    const { originalRequestData_contacts_person_names_middleNames } = bav;
    const { originalRequestData_contacts_person_names_surName } = bav;
    const { originalRequestData_contacts_person_names_nameSuffix } = bav;
    const { originalRequestData_contacts_addresses_id } = bav;
    const { originalRequestData_contacts_addresses_addressIdentifier } = bav;
    const { originalRequestData_contacts_addresses_indicator } = bav;
    const { originalRequestData_contacts_addresses_addressType } = bav;
    const { originalRequestData_contacts_addresses_poBoxNumber } = bav;
    const { originalRequestData_contacts_addresses_subBuilding } = bav;
    const { originalRequestData_contacts_addresses_buildingName } = bav;
    const { originalRequestData_contacts_addresses_buildingNumber } = bav;
    const { originalRequestData_contacts_addresses_street } = bav;
    const { originalRequestData_contacts_addresses_subLocality } = bav;
    const { originalRequestData_contacts_addresses_locality } = bav;
    const { originalRequestData_contacts_addresses_postTown } = bav;
    const { originalRequestData_contacts_addresses_county } = bav;
    const { originalRequestData_contacts_addresses_postal } = bav;
    const { originalRequestData_contacts_addresses_countryCode } = bav;
    const { originalRequestData_contacts_addresses_residentFrom_fullDateFrom } = bav;
    const { originalRequestData_contacts_addresses_residentFrom_yearFrom } = bav;
    const { originalRequestData_contacts_addresses_residentFrom_monthFrom } = bav;
    const { originalRequestData_contacts_addresses_residentFrom_dayFrom } = bav;
    const { originalRequestData_contacts_addresses_residentTo_fullDateTo } = bav;
    const { originalRequestData_contacts_addresses_residentTo_yearTo } = bav;
    const { originalRequestData_contacts_addresses_residentTo_monthTo } = bav;
    const { originalRequestData_contacts_addresses_residentTo_dayTo } = bav;
    const { originalRequestData_contacts_bankAccount_sortCode } = bav;
    const { originalRequestData_contacts_bankAccount_clearAccountNumber } = bav;
    
    const recordId = new mongoose.Types.ObjectId();

    const item = new Data({
      _id: recordId,
       typeName,
       masterRecordId : recordId.toString(),
       responseHeader_requestType ,
       responseHeader_tenantId ,
       responseHeader_clientReferenceId ,
       responseHeader_expRequestId ,
       responseHeader_messageTime ,
       responseHeader_overallResponse_decision ,
       responseHeader_overallResponse_decisionText ,
       responseHeader_overallResponse_decisionReasons_0 ,
       responseHeader_overallResponse_decisionReasons_1 ,
       responseHeader_overallResponse_decisionReasons_2 ,
       responseHeader_overallResponse_recommendedNextActions ,
       responseHeader_overallResponse_spareObjects ,
       responseHeader_responseCode ,
       responseHeader_responseType ,
       responseHeader_responseMessage ,
       responseHeader_tenantID ,
       clientResponsePayload_orchestrationDecisions_sequenceId ,
       clientResponsePayload_orchestrationDecisions_decisionSource ,
       clientResponsePayload_orchestrationDecisions_decision ,
       clientResponsePayload_orchestrationDecisions_decisionReasons_0 ,
       clientResponsePayload_orchestrationDecisions_score ,
       clientResponsePayload_orchestrationDecisions_decisionText ,
       clientResponsePayload_orchestrationDecisions_nextAction ,
       clientResponsePayload_orchestrationDecisions_decisionTime ,
       clientResponsePayload_decisionElements_serviceName ,
       clientResponsePayload_decisionElements_applicantId ,
       clientResponsePayload_decisionElements_warningsErrors ,
       clientResponsePayload_decisionElements_otherData_branchData_institutionName ,
       clientResponsePayload_decisionElements_otherData_branchData_branchName ,
       clientResponsePayload_decisionElements_otherData_branchData_address_1 ,
       clientResponsePayload_decisionElements_otherData_branchData_address_2 ,
       originalRequestData_application_applicants_id ,
       originalRequestData_application_applicants_contactId ,
       originalRequestData_source ,
       originalRequestData_contacts_id ,
       originalRequestData_contacts_person_typeOfPerson ,
       originalRequestData_contacts_person_personDetails_dateOfBirth ,
       originalRequestData_contacts_person_names_id ,
       originalRequestData_contacts_person_names_title ,
       originalRequestData_contacts_person_names_firstName ,
       originalRequestData_contacts_person_names_middleNames ,
       originalRequestData_contacts_person_names_surName ,
       originalRequestData_contacts_person_names_nameSuffix ,
       originalRequestData_contacts_addresses_id ,
       originalRequestData_contacts_addresses_addressIdentifier ,
       originalRequestData_contacts_addresses_indicator ,
       originalRequestData_contacts_addresses_addressType ,
       originalRequestData_contacts_addresses_poBoxNumber ,
       originalRequestData_contacts_addresses_subBuilding ,
       originalRequestData_contacts_addresses_buildingName ,
       originalRequestData_contacts_addresses_buildingNumber ,
       originalRequestData_contacts_addresses_street ,
       originalRequestData_contacts_addresses_subLocality ,
       originalRequestData_contacts_addresses_locality ,
       originalRequestData_contacts_addresses_postTown ,
       originalRequestData_contacts_addresses_county ,
       originalRequestData_contacts_addresses_postal ,
       originalRequestData_contacts_addresses_countryCode ,
       originalRequestData_contacts_addresses_residentFrom_fullDateFrom ,
       originalRequestData_contacts_addresses_residentFrom_yearFrom ,
       originalRequestData_contacts_addresses_residentFrom_monthFrom ,
       originalRequestData_contacts_addresses_residentFrom_dayFrom ,
       originalRequestData_contacts_addresses_residentTo_fullDateTo ,
       originalRequestData_contacts_addresses_residentTo_yearTo ,
       originalRequestData_contacts_addresses_residentTo_monthTo ,
       originalRequestData_contacts_addresses_residentTo_dayTo ,
       originalRequestData_contacts_bankAccount_sortCode ,
       originalRequestData_contacts_bankAccount_clearAccountNumber 
    });

    const destination = convertSourceToTarget(item);
    console.log('##### JSON Conversion ###');
    console.log(JSON.stringify(destination, null, 2));
   
    const decision = await asyncCall(JSON.stringify(destination));
    
    console.log('##### Response from Experian ###');
    console.log(decision.responseHeader.overallResponse.decision);
    item.responseHeader_overallResponse_decision = decision.responseHeader.overallResponse.decision;
    item.responseHeader_overallResponse_decisionText = decision.responseHeader.overallResponse.decisionText;
    const reasons = decision.responseHeader.overallResponse.decisionReasons;
    item.responseHeader_overallResponse_decisionReasons_0 = reasons[0];
    item.responseHeader_overallResponse_decisionReasons_1 = reasons[1];
    item.responseHeader_overallResponse_decisionReasons_2 = reasons[2];
    
    const item_1 = await item.save();
    console.log('##### MONGO DB Record ###');
    console.log(item_1);
    return res.status(201).json({recordId});
  } catch (error) {
    console.log(`Encountered an error creating data: ${error.message}`);
    return res.status(500).json(generateErrorResponse(ErrorCode.INTERNAL_ERROR, error)).send()
  }
};

/**
 * Patches a record in the database.
 * @param {IReq<PatchRecordBody>} req - The request object containing data, typeName, and recordId.
 * @param {IRes} res - The response object to send back.
 * @return {IRes}
 */
export const patchRecord = (req: IReq<PatchRecordBody>, res: IRes): IRes => {
  const {
    body: {
      data,
      typeName,
      recordId
    },
  } = req;
  try {
    if (!data || !typeName || !recordId) {
      return res.status(400).json(generateErrorResponse(ErrorCode.BAD_REQUEST, 'data, typeName or recordId missing in request')).send();
    }
    const db: FileDB = new FileDB(generateFilePath(typeName));
    formatISO8061DateProperties(data, typeName);
    db.updateFile(recordId as unknown as number, data)
    return res.json({ success: true });
  } catch (err) {
    console.log(`Encountered an error patching data: ${err.message}`);
    return res.status(500).json(generateErrorResponse(ErrorCode.INTERNAL_ERROR, err)).send();
  }
};

/**
 * Searches records based on the provided query and pagination.
 * @param {IReq<SearchRecordsBody>} req - The request object containing query and pagination.
 * @param {IRes} res - The response object to send back.
 * @return {IRes}
 */
/*export const searchRecords = async (req: IReq<SearchRecordsBody>, res: IRes): Promise<IRes> => {
  const {
    body: {
      query,
      pagination
    },
  } = req;
  try {
    if (!query || !pagination) {
      return res.status(400).json(generateErrorResponse(ErrorCode.BAD_REQUEST, 'Query or pagination missing in request')).send();
    }
    const data = await Data.find();
    const index: number = QueryExecutor.execute(query, data);

    if (index === -1) {
      return res.json({ records: [] })
    }
    const dataResult: object = data[index];
    console.debug(dataResult);
    //convertDateToISO8601(dataResult, query.from);

    return res.json({ records: [ResultRehydrator.filterAndRehydrate(query.attributesToSelect, data[index])] });
  } catch (err) {
    console.log(`Encountered an error searching data: ${err.message}`);
    return res.status(500).json(generateErrorResponse(ErrorCode.INTERNAL_ERROR, err)).send();
  }
 
};*/


/**
 * Retrieves the type names for Account and MasterRecordId and Address.
 * @param {IReq<GetTypeNamesBody>} req - the request object
 * @param {IRes} res - the response object
 * @return {IRes}
 */
export const getTypeNames = (req: IReq<GetTypeNamesBody>, res: IRes): IRes => {
  const typeNameInfos: TypeNameInfo[] = READABLE_CONCEPTS.map((concept: ConceptDeclaration) => {
    return {
      typeName: concept.getName(),
      label: (concept.getDecorator(DECORATOR_NAMES.TERM).getArguments()[0]) as unknown as string,
    }
  });

  return res.json({ typeNames: typeNameInfos as TypeNameInfo[]})
};

/**
 * Retrieves the type definitions for the given type names.
 * @param {IReq<GetTypeDefinitionsBody>} req - The request object.
 * @param {IRes} res - The response object.
 * @return {IRes}
 */
export const getTypeDefinitions = (req: IReq<GetTypeDefinitionsBody>, res: IRes): IRes => {
  const {
    body: {
      typeNames
    },
  } = req;
  console.log(req.body);
  if (!typeNames) {
    console.log('Missing typeNames in request');
    return res.status(400).json(generateErrorResponse(ErrorCode.BAD_REQUEST, 'Missing typeNames in request')).send();
  }
  MODEL_MANAGER.addCTOModel
  try {
    console.log('Get TypeDefinitions');
    return res.json({
      declarations: READABLE_CONCEPTS.map((concept: ConceptDeclaration) => concept.ast)
    })
  } catch (err) {
    console.log(`Encountered an error getting type definitions: ${err.message}`);
    return res.status(500).json(generateErrorResponse(ErrorCode.INTERNAL_ERROR, err)).send();
  }
};

const tokenUrl = 'https://sandbox-uk-api.experian.com/oauth2/v1/token';
const clientId = 'fsbhNMAfgiu60Gk32vIFAUGJk9g5oPxP';
const clientSecret = 'g473eCKDIx3xvwdO';
const username =  "philippe.creignou@docusign.com";
const password = "Xerox@2626!2626";
var accountFound = false;


async function getToken() {
    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
            'Grant_type':'password'
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
            "client_id": clientId,
            "client_secret": clientSecret
        })
    });
    const data = await response.json();
    return data.access_token;
}

async function fetchData(token:string, jsonInput:string): Promise<BankAccountVerificationResponse> {
  

  // POST request using fetch   
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 
          'Authorization':  `Bearer ${token}`},
      body: jsonInput
  };  

  const response = await fetch('https://sandbox-uk-api.experian.com/da/ccis-devportalapis/v1/api', requestOptions);  
  
  
  const data = await response.json();  
  console.log(data);
  return data;
}



async function asyncCall(jsonInput: string)  {
  console.log('calling');
  const token = await getToken();
  console.log('EXPERIAN Token ' +JSON.stringify(token));
  console.log('####### EXPERIAN Payload #####');
  console.log( jsonInput);
  const result = await fetchData(token,jsonInput);
  console.log('EXPERIAN BAV response ' +JSON.stringify(result));
  // Expected output: "resolved"
  return result;
  
}

export const getAllRecords = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const records = await Data.find();
    return res.status(200).json({ records });
  } catch (error) {
    return res.status(500).json({ error });
  }
};


export const verifyBankAccount = async (req: IReq<TargetJSON>, res: IRes) => {
  const {
    body: {
      header,
      payload   
    },
  } = req;
  try {
    // Check that accountNumber and routingNumber only contain digits
   /* if (!/^\d+$/.test(header.tenantId)) {
      throw new Error('Invalid account number.');
    }   */

    const decision = asyncCall(JSON.stringify(req));

    (await decision).responseHeader.overallResponse.decision

    if ((await decision).responseHeader.overallResponse.decision =='CONTINUE'){
      accountFound = true;
    } else{
      accountFound = false;
    }

    

   /* const accountFound = SAMPLE_BANK_ACCOUNTS.find(acc =>
      acc.accountNumber === accountNumber &&
      acc.routingNumber === routingNumber &&
      acc.accountType.toLowerCase() === accountType.toLowerCase()
    ); */
    if (accountFound) {
      //const result: IAccountVerification = { responseHeader_overallResponse_decisionText:(await decision).responseHeader.overallResponse.decision }
      return res.json(decision);
    } else {
      throw new Error('No matching account found. Verification failed.');
    }


    // Mock database lookup
    /*const accountFound = SAMPLE_BANK_ACCOUNTS.find(acc =>
      acc.accountNumber === accountNumber &&
      acc.routingNumber === routingNumber &&
      acc.accountType.toLowerCase() === accountType.toLowerCase()
    ); 
    

    if (accountFound) {
      const result: BankAccountResponse = { verified: true }
      return res.json(result);
    } else {
      throw new Error('No matching account found. Verification failed.');
    }*/
  } catch (err) {
    console.error(`Encountered an error verifying bank account: ${err.message}`);
   // const result: IAccountVerification = { verified: false, verifyFailureReason: err.message };
    return res.json(err);
  }
}

/**
 * Searches records based on the provided query and pagination.
 * @param {IReq<SearchRecordsBody>} req - The request object containing query and pagination.
 * @param {IRes} res - The response object to send back.
 * @return {IRes}
 */
export const searchRecords = async (req: IReq<SearchRecordsBody>, res: IRes): Promise<IRes> => {
  const {
    body: {
      query,
      pagination
    },
  } = req;
  try {
    if (!query || !pagination) {
      return res.status(400).json(generateErrorResponse(ErrorCode.BAD_REQUEST, 'Query or pagination missing in request')).send();
    }
    const data = await Data.find();
    
    const index: number = QueryExecutor.execute(query, data);

    if (index === -1) {
      return res.json({ records: [] })
    }
    const dataResult: object = data[index];
    console.debug(dataResult);
    //convertDateToISO8601(dataResult, query.from);

    return res.json({ records: [ResultRehydrator.filterAndRehydrate(query.attributesToSelect, data[index])] });
  } catch (err) {
    console.log(`Encountered an error searching data: ${err.message}`);
    return res.status(500).json(generateErrorResponse(ErrorCode.INTERNAL_ERROR, err)).send();
  }
 
};