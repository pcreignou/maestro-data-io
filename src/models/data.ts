
import mongoose, {Document, Schema } from "mongoose";


interface BankAccount extends Document {
  
    sortCode: string,
    clearAccountNumber:string
    
}

interface PersonDetails extends Document {
  dateOfBirth?: Date; 
}


interface Name extends Document
   {      
      title: string ;
      firstName: string ;
      middleNames: string ;
      surName: string ;
      nameSuffix: string ;
    }


  interface Person extends Document {
    personDetails: PersonDetails;
    typeOfPerson: string;
    names:Name[]
  }

 interface residentFrom extends Document {
    fullDateFrom: string;
    yearFrom: string;
    monthFrom: string;
    dayFrom: string;
  }

  interface  residentTo extends Document {
    fullDateTo: string;
    yearTo: string;
    monthTo: string;
    dayTo: string;
  }

  interface ContactAddress extends Document{   
    addressIdentifier: string;
    indicator: string;
    addressType: string;
    poBoxNumber: string;
    subBuilding: string;
    buildingName: string;
    buildingNumber: string;
    street: string;
    street2: string;
    subLocality: string;
    locality: string;
    postTown: string;
    county: string;
    postal: string;
    countryCode: string;
    residentFrom: residentFrom;
    residentTo: residentTo;
  }


export interface IContact{
      typeName: string;    
     
      person: Person;
      
    
      bankAccount: BankAccount;

      addresses:ContactAddress[];

}

export interface IAccountVerification{
  
    responseHeader_requestType: string;
    responseHeader_clientReferenceId: string;
    responseHeader_expRequestId: string;
    responseHeader_messageTime : Date;
    responseHeader_overallResponse_decision: string;
    responseHeader_overallResponse_decisionText: string;
    responseHeader_overallResponse_decisionReasons_0: string[];
    responseHeader_overallResponse_decisionReasons_1: string;
    responseHeader_overallResponse_decisionReasons_2: string;
    responseHeader_overallResponse_recommendedNextActions: string[];
    responseHeader_overallResponse_spareObjects: string[];
    responseHeader_responseCode: string;
    responseHeader_responseType: string;
    responseHeader_responseMessage: string;
    responseHeader_tenantID: string;
    clientResponsePayload_orchestrationDecisions_0_sequenceId: string;
    clientResponsePayload_orchestrationDecisions_0_decisionSource: string;
    clientResponsePayload_orchestrationDecisions_0_decision: string;
    clientResponsePayload_orchestrationDecisions_0_decisionReasons_0: string;
    clientResponsePayload_orchestrationDecisions_0_score: number;
    clientResponsePayload_orchestrationDecisions_0_decisionText: string;
    clientResponsePayload_orchestrationDecisions_0_nextAction: string;
    clientResponsePayload_orchestrationDecisions_0_decisionTime: Date;
    clientResponsePayload_orchestrationDecisions_1_sequenceId: string;
    clientResponsePayload_orchestrationDecisions_1_decisionSource: string;
    clientResponsePayload_orchestrationDecisions_1_decision: string;
    clientResponsePayload_orchestrationDecisions_1_decisionReasons_0: string;
    clientResponsePayload_orchestrationDecisions_1_score: number;
    clientResponsePayload_orchestrationDecisions_1_decisionText: string;
    clientResponsePayload_orchestrationDecisions_1_nextAction: string;
    clientResponsePayload_orchestrationDecisions_1_decisionTime: Date;
    clientResponsePayload_orchestrationDecisions_2_sequenceId: string;
    clientResponsePayload_orchestrationDecisions_2_decisionSource: string;
    clientResponsePayload_orchestrationDecisions_2_decision: string;
    clientResponsePayload_orchestrationDecisions_2_decisionReasons_0: string;
    clientResponsePayload_orchestrationDecisions_2_score: number;
    clientResponsePayload_orchestrationDecisions_2_decisionText: string;
    clientResponsePayload_orchestrationDecisions_2_nextAction: string;
    clientResponsePayload_orchestrationDecisions_2_decisionTime: Date;
    clientResponsePayload_decisionElements_0_serviceName: string;
    clientResponsePayload_decisionElements_0_applicantId: string;
    clientResponsePayload_decisionElements_0_warningsErrors: string[],
    clientResponsePayload_decisionElements_0_otherData_branchData_0_institutionName: string;
    clientResponsePayload_decisionElements_0_otherData_branchData_0_branchName: string;
    clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_1: string;
    clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_2: string;
    clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_3: string;
    clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_4: string;
    clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_5: string;
    clientResponsePayload_decisionElements_0_otherData_branchData_0_telephoneNumber: string;
    clientResponsePayload_decisionElements_0_otherData_branchData_0_subBranchNumber: string;
    clientResponsePayload_decisionElements_0_decisions_0_element: string;
    clientResponsePayload_decisionElements_0_decisions_0_value: string;
    clientResponsePayload_decisionElements_0_decisions_1_element: string;
    clientResponsePayload_decisionElements_0_decisions_1_value: string;
    clientResponsePayload_decisionElements_1_serviceName: string;
    clientResponsePayload_decisionElements_1_applicantId: string;
    clientResponsePayload_decisionElements_1_appReference: string;
    clientResponsePayload_decisionElements_1_warningsErrors: string[];
    clientResponsePayload_decisionElements_1_otherData_response_uuid: string;
    clientResponsePayload_decisionElements_1_auditLogs_0_eventType: string;
    clientResponsePayload_decisionElements_1_auditLogs_0_eventDate: Date;
    clientResponsePayload_decisionElements_1_auditLogs_0_eventOutcome: string;
    clientResponsePayload_decisionElements_2_serviceName: string;
    clientResponsePayload_decisionElements_2_applicantId: string;
    clientResponsePayload_decisionElements_2_score: string;
    clientResponsePayload_decisionElements_2_appReference: string;
    clientResponsePayload_decisionElements_2_rules_0_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_0_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_0_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_0_ruleText: string;
    clientResponsePayload_decisionElements_2_rules_1_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_1_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_1_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_1_ruleText: string;
    clientResponsePayload_decisionElements_2_rules_2_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_2_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_2_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_2_ruleText: string;
    clientResponsePayload_decisionElements_2_rules_3_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_3_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_3_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_3_ruleText: string;
    clientResponsePayload_decisionElements_2_rules_4_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_4_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_4_ruleScor: number;
    clientResponsePayload_decisionElements_2_rules_4_ruleText: string;
    clientResponsePayload_decisionElements_2_rules_5_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_5_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_5_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_5_ruleText: string;
    clientResponsePayload_decisionElements_2_rules_6_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_6_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_6_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_6_ruleTex: string;
    clientResponsePayload_decisionElements_2_rules_7_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_7_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_7_ruleText: string;
    clientResponsePayload_decisionElements_2_rules_8_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_8_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_8_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_8_ruleText: string;
    clientResponsePayload_decisionElements_2_rules_9_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_9_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_9_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_9_ruleText: string;
    clientResponsePayload_decisionElements_2_rules_10_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_10_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_10_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_10_ruleText: string;
    clientResponsePayload_decisionElements_2_matches_0_name: string;
    clientResponsePayload_decisionElements_2_matches_0_value: string;
    clientResponsePayload_decisionElements_2_matches_1_name: string;
    clientResponsePayload_decisionElements_2_matches_1_value: string;
    clientResponsePayload_decisionElements_2_dataCounts_0_name: string;
    clientResponsePayload_decisionElements_2_dataCounts_0_value: number;
    clientResponsePayload_decisionElements_2_dataCounts_1_name: string;
    clientResponsePayload_decisionElements_2_dataCounts_1_value: number;
    clientResponsePayload_decisionElements_2_dataCounts_2_name: string;
    clientResponsePayload_decisionElements_2_dataCounts_2_value: number;
    clientResponsePayload_decisionElements_2_scores_0_name: string;
    clientResponsePayload_decisionElements_2_scores_0_score: number;
    clientResponsePayload_decisionElements_2_scores_1_name: string;
    originalRequestData_application_applicants_0_id: string;
    originalRequestData_application_applicants_0_contactId: string;
    originalRequestData_source: string;
    originalRequestData_contacts_0_id: string;
    originalRequestData_contacts_0_person_typeOfPerson: string;
    originalRequestData_contacts_0_person_personDetails_dateOfBirth: Date;
    originalRequestData_contacts_0_person_names_0_id: string;
    originalRequestData_contacts_0_person_names_0_title: string;
    originalRequestData_contacts_0_person_names_0_firstName: string;
    originalRequestData_contacts_0_person_names_0_middleNames: string;
    originalRequestData_contacts_0_person_names_0_surName: string;
    originalRequestData_contacts_0_person_names_0_nameSuffix: string;
    originalRequestData_contacts_0_addresses_0_id: string;
    originalRequestData_contacts_0_addresses_0_addressIdentifier: string;
    originalRequestData_contacts_0_addresses_0_indicator: string;
    originalRequestData_contacts_0_addresses_0_addressType: string;
    originalRequestData_contacts_0_addresses_0_poBoxNumber: string;
    originalRequestData_contacts_0_addresses_0_subBuilding: string;
    originalRequestData_contacts_0_addresses_0_buildingName: string;
    originalRequestData_contacts_0_addresses_0_buildingNumber: string;
    originalRequestData_contacts_0_addresses_0_street: string;
    originalRequestData_contacts_0_addresses_0_subLocality: string;
    originalRequestData_contacts_0_addresses_0_locality: string;
    originalRequestData_contacts_0_addresses_0_postTown: string;
    originalRequestData_contacts_0_addresses_0_county: string;
    originalRequestData_contacts_0_addresses_0_postal: string;
    originalRequestData_contacts_0_addresses_0_countryCode: string;
    originalRequestData_contacts_0_addresses_0_residentFrom_fullDateFrom: Date;
    originalRequestData_contacts_0_addresses_0_residentFrom_yearFrom: string;
    originalRequestData_contacts_0_addresses_0_residentFrom_monthFrom: string;
    originalRequestData_contacts_0_addresses_0_residentFrom_dayFrom: string;
    originalRequestData_contacts_0_addresses_0_residentTo_fullDateTo: string;
    originalRequestData_contacts_0_addresses_0_residentTo_yearTo: string;
    originalRequestData_contacts_0_addresses_0_residentTo_monthTo: string;
    originalRequestData_contacts_0_addresses_0_residentTo_dayTo: string;
    originalRequestData_contacts_0_bankAccount_sortCode: string;
    originalRequestData_contacts_0_bankAccount_clearAccountNumber: string;
}

export interface IAccountVerificationModel extends IAccountVerification, Document{

}

const AccountVerificationSchema: Schema = new Schema(
  {
    responseHeader_requestType: {
   type: String
    },
 responseHeader_clientReferenceId : {
   type :  String 
    },
 responseHeader_expRequestId : {
   type :  String 
    },
 responseHeader_messageTime : {
   type :  Date 
    },
 responseHeader_overallResponse_decision : {
   type :  String 
    },
 responseHeader_overallResponse_decisionText : {
   type :  String 
    },
 responseHeader_overallResponse_decisionReasons_0 : {
   type :  String 
    },
 responseHeader_overallResponse_decisionReasons_1 : {
   type :  String 
    },
 responseHeader_overallResponse_decisionReasons_2 : {
   type :  String 
    },
 responseHeader_overallResponse_recommendedNextActions : {
   type :  Array 
    },
 responseHeader_overallResponse_spareObjects : {
   type :  Array 
    },
 responseHeader_responseCode : {
   type :  String 
    },
 responseHeader_responseType : {
   type :  String 
    },
 responseHeader_responseMessage : {
   type :  String 
    },
 responseHeader_tenantID : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_0_sequenceId : {
   type :  Date 
    },
 clientResponsePayload_orchestrationDecisions_0_decisionSource : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_0_decision : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_0_decisionReasons_0 : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_0_score : {
   type :  Number 
    },
 clientResponsePayload_orchestrationDecisions_0_decisionText : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_0_nextAction : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_0_decisionTime : {
   type :  Date 
    },
 clientResponsePayload_orchestrationDecisions_1_sequenceId : {
   type :  Date 
    },
 clientResponsePayload_orchestrationDecisions_1_decisionSource : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_1_decision : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_1_decisionReasons_0 : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_1_score : {
   type :  Number 
    },
 clientResponsePayload_orchestrationDecisions_1_decisionText : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_1_nextAction : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_1_decisionTime : {
   type :  Date 
    },
 clientResponsePayload_orchestrationDecisions_2_sequenceId : {
   type :  Date 
    },
 clientResponsePayload_orchestrationDecisions_2_decisionSource : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_2_decision : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_2_decisionReasons_0 : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_2_score : {
   type :  Number 
    },
 clientResponsePayload_orchestrationDecisions_2_decisionText : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_2_nextAction : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_2_decisionTime : {
   type :  Date 
    },
 clientResponsePayload_decisionElements_0_serviceName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_applicantId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_warningsErrors : {
   type :  Array 
    },
 clientResponsePayload_decisionElements_0_otherData_branchData_0_institutionName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_otherData_branchData_0_branchName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_1 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_2 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_3 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_4 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_otherData_branchData_0_address_0_5 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_otherData_branchData_0_telephoneNumber : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_otherData_branchData_0_subBranchNumber : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_0_decisions_0_element : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_decisions_0_value : {
   type :  Date 
    },
 clientResponsePayload_decisionElements_0_decisions_1_element : {
   type :  String 
    },
 clientResponsePayload_decisionElements_0_decisions_1_value : {
   type :  String 
    },
 clientResponsePayload_decisionElements_1_serviceName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_1_applicantId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_1_appReference : {
   type :  String 
    },
 clientResponsePayload_decisionElements_1_warningsErrors : {
   type :  Array 
    },
 clientResponsePayload_decisionElements_1_otherData_response_uuid : {
   type :  String 
    },
 clientResponsePayload_decisionElements_1_auditLogs_0_eventType : {
   type :  String 
    },
 clientResponsePayload_decisionElements_1_auditLogs_0_eventDate : {
   type :  Date 
    },
 clientResponsePayload_decisionElements_1_auditLogs_0_eventOutcome : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_serviceName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_applicantId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_score : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_appReference : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_0_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_0_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_0_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_0_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_1_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_1_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_1_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_1_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_2_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_2_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_2_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_2_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_3_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_3_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_3_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_3_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_4_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_4_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_4_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_4_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_5_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_5_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_5_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_5_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_6_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_6_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_6_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_6_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_7_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_7_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_7_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_7_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_8_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_8_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_8_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_8_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_9_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_9_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_9_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_9_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_10_ruleId : {
   type :  Date 
    },
 clientResponsePayload_decisionElements_2_rules_10_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_10_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_10_ruleText : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_matches_0_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_matches_0_value : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_matches_1_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_matches_1_value : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_dataCounts_0_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_dataCounts_0_value : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_dataCounts_1_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_dataCounts_1_value : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_dataCounts_2_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_dataCounts_2_value : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_scores_0_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_scores_0_score : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_scores_1_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_scores_1_score : {
   type :  Number 
    },
 originalRequestData_application_applicants_0_id : {
   type :  String 
    },
 originalRequestData_application_applicants_0_contactId : {
   type :  String 
    },
 originalRequestData_source : {
   type :  String 
    },
 originalRequestData_contacts_0_id : {
   type :  String 
    },
 originalRequestData_contacts_0_person_typeOfPerson : {
   type :  String 
    },
 originalRequestData_contacts_0_person_personDetails_dateOfBirth : {
   type :  String 
    },
 originalRequestData_contacts_0_person_names_0_id : {
   type :  String 
    },
 originalRequestData_contacts_0_person_names_0_title : {
   type :  String 
    },
 originalRequestData_contacts_0_person_names_0_firstName : {
   type :  String 
    },
 originalRequestData_contacts_0_person_names_0_middleNames : {
   type :  String 
    },
 originalRequestData_contacts_0_person_names_0_surName : {
   type :  String 
    },
 originalRequestData_contacts_0_person_names_0_nameSuffix : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_id : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_addressIdentifier : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_indicator : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_addressType : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_poBoxNumber : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_subBuilding : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_buildingName : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_buildingNumber : {
   type :  Date 
    },
 originalRequestData_contacts_0_addresses_0_street : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_street2 : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_subLocality : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_locality : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_postTown : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_county : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_postal : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_countryCode : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_residentFrom_fullDateFrom : {
   type :  Date 
    },
 originalRequestData_contacts_0_addresses_0_residentFrom_yearFrom : {
   type :  Date 
    },
 originalRequestData_contacts_0_addresses_0_residentFrom_monthFrom : {
   type :  Date 
    },
 originalRequestData_contacts_0_addresses_0_residentFrom_dayFrom : {
   type :  String 
    },
 originalRequestData_contacts_0_addresses_0_residentTo_fullDateTo : {
   type :  Date 
    },
 originalRequestData_contacts_0_addresses_0_residentTo_yearTo : {
   type :  Date 
    },
 originalRequestData_contacts_0_addresses_0_residentTo_monthTo : {
   type :  Date 
    },
 originalRequestData_contacts_0_addresses_0_residentTo_dayTo : {
   type :  String 
    },
 originalRequestData_contacts_0_bankAccount_sortCode : {
   type :  Date 
    },
 originalRequestData_contacts_0_bankAccount_clearAccountNumber : {
   type :  String
    }
  }
);



export interface IContactModel extends IContact, Document{

}

const ContactSchema: Schema = new Schema(
    
        
  {
    typeName: { type: String },
    
      id: { type: String },
      person: {
        typeOfPerson: { type: String },
        personDetails: {
          dateOfBirth: {type: Date},
        },
        names: 
         [{
            id: { type: String },
            title: { type: String },
            firstName: { type: String },
            middleNames: { type: String },
            surName: { type: String },
            nameSuffix: { type: String },
          }],
      },
      addresses:  [{
          id: { type: String },
          addressIdentifier: { type: String },
          indicator: { type: String },
          addressType: { type: String },
          poBoxNumber: { type: String },
          subBuilding: { type: String },
          buildingName: { type: String },
          buildingNumber: { type: String },
          street: { type: String },
          street2: { type: String },
          subLocality: { type: String },
          locality: { type: String },
          postTown: { type: String },
          county: { type: String },
          postal: { type: String },
          countryCode: { type: String },
          residentFrom: {
            fullDateFrom: { type: String },
            yearFrom: { type: String },
            monthFrom: { type: String },
            dayFrom: { type: String },
          },
          residentTo: {
            fullDateTo: { type: String },
            yearTo: { type: String },
            monthTo: { type: String },
            dayTo: { type: String },
          },
        }],
      bankAccount: {
        sortCode: { type: String },
        clearAccountNumber: { type: String },
      },
    
  }
);

export default mongoose.model<IContactModel>('AccountVerififcation', AccountVerificationSchema);
//export default mongoose.model<IContactModel>('Contact', ContactSchema);