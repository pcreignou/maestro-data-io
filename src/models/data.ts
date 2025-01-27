
import mongoose, { Schema, Document, Model } from 'mongoose';



interface BankAccount extends Document {
  
    sortCode: string,
    clearAccountNumber:string
    
}




interface Name extends Document
   {      
      title: string ;
      firstName: string ;
      middleNames: string ;
      surName: string ;
      nameSuffix: string ;
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
    masterRecordId: string,
    responseHeader_requestType: string;
    responseHeader_tenantId: string;
    responseHeader_clientReferenceId: string;
    responseHeader_expRequestId: string;
    responseHeader_messageTime : string;
    responseHeader_overallResponse_decision: string;
    responseHeader_overallResponse_decisionText: string;
    responseHeader_overallResponse_decisionReasons_0: string;
    responseHeader_overallResponse_decisionReasons_1: string;
    responseHeader_overallResponse_decisionReasons_2: string;
    responseHeader_overallResponse_recommendedNextActions: string[];
    responseHeader_overallResponse_spareObjects: string[];
    responseHeader_responseCode: string;
    responseHeader_responseType: string;
    responseHeader_responseMessage: string;
    responseHeader_tenantID: string;
    clientResponsePayload_orchestrationDecisions_sequenceId: string;
    clientResponsePayload_orchestrationDecisions_decisionSource: string;
    clientResponsePayload_orchestrationDecisions_decision: string;
    clientResponsePayload_orchestrationDecisions_decisionReasons_0: string;
    clientResponsePayload_orchestrationDecisions_score: number;
    clientResponsePayload_orchestrationDecisions_decisionText: string;
    clientResponsePayload_orchestrationDecisions_nextAction: string;
    clientResponsePayload_orchestrationDecisions_decisionTime: Date;
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
    clientResponsePayload_decisionElements_serviceName: string;
    clientResponsePayload_decisionElements_applicantId: string;
    clientResponsePayload_decisionElements_warningsErrors: string[],
    clientResponsePayload_decisionElements_otherData_branchData_institutionName: string;
    clientResponsePayload_decisionElements_otherData_branchData_branchName: string;
    clientResponsePayload_decisionElements_otherData_branchData_address_1: string;
    clientResponsePayload_decisionElements_otherData_branchData_address_2: string;
    clientResponsePayload_decisionElements_otherData_branchData_address_3: string;
    clientResponsePayload_decisionElements_otherData_branchData_address_4: string;
    clientResponsePayload_decisionElements_otherData_branchData_address_5: string;
    clientResponsePayload_decisionElements_otherData_branchData_telephoneNumber: string;
    clientResponsePayload_decisionElements_otherData_branchData_subBranchNumber: string;
    clientResponsePayload_decisionElements_decisions_element: string;
    clientResponsePayload_decisionElements_decisions_value: string;
    clientResponsePayload_decisionElements_decisions_1_element: string;
    clientResponsePayload_decisionElements_decisions_1_value: string;
    clientResponsePayload_decisionElements_1_serviceName: string;
    clientResponsePayload_decisionElements_1_applicantId: string;
    clientResponsePayload_decisionElements_1_appReference: string;
    clientResponsePayload_decisionElements_1_warningsErrors: string[];
    clientResponsePayload_decisionElements_1_otherData_response_uuid: string;
    clientResponsePayload_decisionElements_1_auditLogs_eventType: string;
    clientResponsePayload_decisionElements_1_auditLogs_eventDate: Date;
    clientResponsePayload_decisionElements_1_auditLogs_eventOutcome: string;
    clientResponsePayload_decisionElements_2_serviceName: string;
    clientResponsePayload_decisionElements_2_applicantId: string;
    clientResponsePayload_decisionElements_2_score: string;
    clientResponsePayload_decisionElements_2_appReference: string;
    clientResponsePayload_decisionElements_2_rules_ruleId: string;
    clientResponsePayload_decisionElements_2_rules_ruleName: string;
    clientResponsePayload_decisionElements_2_rules_ruleScore: number;
    clientResponsePayload_decisionElements_2_rules_ruleText: string;
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
    clientResponsePayload_decisionElements_2_matches_name: string;
    clientResponsePayload_decisionElements_2_matches_value: string;
    clientResponsePayload_decisionElements_2_matches_1_name: string;
    clientResponsePayload_decisionElements_2_matches_1_value: string;
    clientResponsePayload_decisionElements_2_dataCounts_name: string;
    clientResponsePayload_decisionElements_2_dataCounts_value: number;
    clientResponsePayload_decisionElements_2_dataCounts_1_name: string;
    clientResponsePayload_decisionElements_2_dataCounts_1_value: number;
    clientResponsePayload_decisionElements_2_dataCounts_2_name: string;
    clientResponsePayload_decisionElements_2_dataCounts_2_value: number;
    clientResponsePayload_decisionElements_2_scores_name: string;
    clientResponsePayload_decisionElements_2_scores_score: number;
    clientResponsePayload_decisionElements_2_scores_1_name: string;
    originalRequestData_application_applicants_id: string;
    originalRequestData_application_applicants_contactId: string;
    originalRequestData_source: string;
    originalRequestData_contacts_id: string;
    originalRequestData_contacts_person_typeOfPerson: string;
    originalRequestData_contacts_person_personDetails_dateOfBirth: Date;
    originalRequestData_contacts_person_names_id: string;
    originalRequestData_contacts_person_names_title: string;
    originalRequestData_contacts_person_names_firstName: string;
    originalRequestData_contacts_person_names_middleNames: string;
    originalRequestData_contacts_person_names_surName: string;
    originalRequestData_contacts_person_names_nameSuffix: string;
    originalRequestData_contacts_addresses_id: string;
    originalRequestData_contacts_addresses_addressIdentifier: string;
    originalRequestData_contacts_addresses_indicator: string;
    originalRequestData_contacts_addresses_addressType: string;
    originalRequestData_contacts_addresses_poBoxNumber: string;
    originalRequestData_contacts_addresses_subBuilding: string;
    originalRequestData_contacts_addresses_buildingName: string;
    originalRequestData_contacts_addresses_buildingNumber: string;
    originalRequestData_contacts_addresses_street: string;
    originalRequestData_contacts_addresses_subLocality: string;
    originalRequestData_contacts_addresses_locality: string;
    originalRequestData_contacts_addresses_postTown: string;
    originalRequestData_contacts_addresses_county: string;
    originalRequestData_contacts_addresses_postal: string;
    originalRequestData_contacts_addresses_countryCode: string;
    originalRequestData_contacts_addresses_residentFrom_fullDateFrom: Date;
    originalRequestData_contacts_addresses_residentFrom_yearFrom: string;
    originalRequestData_contacts_addresses_residentFrom_monthFrom: string;
    originalRequestData_contacts_addresses_residentFrom_dayFrom: string;
    originalRequestData_contacts_addresses_residentTo_fullDateTo: string;
    originalRequestData_contacts_addresses_residentTo_yearTo: string;
    originalRequestData_contacts_addresses_residentTo_monthTo: string;
    originalRequestData_contacts_addresses_residentTo_dayTo: string;
    originalRequestData_contacts_bankAccount_sortCode: string;
    originalRequestData_contacts_bankAccount_clearAccountNumber: string;
}

export interface IAccountVerificationModel extends IAccountVerification, Document{

}

const AccountVerificationSchema: Schema = new Schema(
  {
    responseHeader_requestType: {
   type: String
    },
    masterRecordId: {
      type: String
       },
    responseHeader_tenantId: {
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
 clientResponsePayload_orchestrationDecisions_sequenceId : {
   type :  String
    },
 clientResponsePayload_orchestrationDecisions_decisionSource : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_decision : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_decisionReasons_0 : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_score : {
   type :  Number 
    },
 clientResponsePayload_orchestrationDecisions_decisionText : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_nextAction : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_decisionTime : {
   type : String
    },
 clientResponsePayload_orchestrationDecisions_1_sequenceId : {
   type :  String
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
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_1_decisionText : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_1_nextAction : {
   type :  String 
    },
 clientResponsePayload_orchestrationDecisions_1_decisionTime : {
   type :  String
    },
 clientResponsePayload_orchestrationDecisions_2_sequenceId : {
   type :  String
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
 clientResponsePayload_decisionElements_serviceName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_applicantId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_warningsErrors : {
   type :  Array 
    },
 clientResponsePayload_decisionElements_otherData_branchData_institutionName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_otherData_branchData_branchName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_otherData_branchData_address_1 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_otherData_branchData_address_2 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_otherData_branchData_address_3 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_otherData_branchData_address_4 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_otherData_branchData_address_5 : {
   type :  String 
    },
 clientResponsePayload_decisionElements_otherData_branchData_telephoneNumber : {
   type :  String 
    },
 clientResponsePayload_decisionElements_otherData_branchData_subBranchNumber : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_decisions_element : {
   type :  String 
    },
 clientResponsePayload_decisionElements_decisions_value : {
   type :  String
    },
 clientResponsePayload_decisionElements_decisions_1_element : {
   type :  String 
    },
 clientResponsePayload_decisionElements_decisions_1_value : {
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
 clientResponsePayload_decisionElements_1_auditLogs_eventType : {
   type :  String 
    },
 clientResponsePayload_decisionElements_1_auditLogs_eventDate : {
   type :  Date 
    },
 clientResponsePayload_decisionElements_1_auditLogs_eventOutcome : {
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
 clientResponsePayload_decisionElements_2_rules_ruleId : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_ruleName : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_rules_ruleScore : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_rules_ruleText : {
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
   type : String
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
 clientResponsePayload_decisionElements_2_matches_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_matches_value : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_matches_1_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_matches_1_value : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_dataCounts_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_dataCounts_value : {
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
 clientResponsePayload_decisionElements_2_scores_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_scores_score : {
   type :  Number 
    },
 clientResponsePayload_decisionElements_2_scores_1_name : {
   type :  String 
    },
 clientResponsePayload_decisionElements_2_scores_1_score : {
   type :  Number 
    },
 originalRequestData_application_applicants_id : {
   type :  String 
    },
 originalRequestData_application_applicants_contactId : {
   type :  String 
    },
 originalRequestData_source : {
   type :  String 
    },
 originalRequestData_contacts_id : {
   type :  String 
    },
 originalRequestData_contacts_person_typeOfPerson : {
   type :  String 
    },
 originalRequestData_contacts_person_personDetails_dateOfBirth : {
   type :  String 
    },
 originalRequestData_contacts_person_names_id : {
   type :  String 
    },
 originalRequestData_contacts_person_names_title : {
   type :  String 
    },
 originalRequestData_contacts_person_names_firstName : {
   type :  String 
    },
 originalRequestData_contacts_person_names_middleNames : {
   type :  String 
    },
 originalRequestData_contacts_person_names_surName : {
   type :  String 
    },
 originalRequestData_contacts_person_names_nameSuffix : {
   type :  String 
    },
 originalRequestData_contacts_addresses_id : {
   type :  String 
    },
 originalRequestData_contacts_addresses_addressIdentifier : {
   type :  String 
    },
 originalRequestData_contacts_addresses_indicator : {
   type :  String 
    },
 originalRequestData_contacts_addresses_addressType : {
   type :  String 
    },
 originalRequestData_contacts_addresses_poBoxNumber : {
   type :  String 
    },
 originalRequestData_contacts_addresses_subBuilding : {
   type :  String 
    },
 originalRequestData_contacts_addresses_buildingName : {
   type :  String 
    },
 originalRequestData_contacts_addresses_buildingNumber : {
   type :  String 
    },
 originalRequestData_contacts_addresses_street : {
   type :  String 
    },
 originalRequestData_contacts_addresses_street2 : {
   type :  String 
    },
 originalRequestData_contacts_addresses_subLocality : {
   type :  String 
    },
 originalRequestData_contacts_addresses_locality : {
   type :  String 
    },
 originalRequestData_contacts_addresses_postTown : {
   type :  String 
    },
 originalRequestData_contacts_addresses_county : {
   type :  String 
    },
 originalRequestData_contacts_addresses_postal : {
   type :  String 
    },
 originalRequestData_contacts_addresses_countryCode : {
   type :  String 
    },
 originalRequestData_contacts_addresses_residentFrom_fullDateFrom : {
   type :  Date 
    },
 originalRequestData_contacts_addresses_residentFrom_yearFrom : {
   type :  String
    },
 originalRequestData_contacts_addresses_residentFrom_monthFrom : {
   type :  String 
    },
 originalRequestData_contacts_addresses_residentFrom_dayFrom : {
   type :  String 
    },
 originalRequestData_contacts_addresses_residentTo_fullDateTo : {
   type :  String
    },
 originalRequestData_contacts_addresses_residentTo_yearTo : {
   type : String 
    },
 originalRequestData_contacts_addresses_residentTo_monthTo : {
   type :  String 
    },
 originalRequestData_contacts_addresses_residentTo_dayTo : {
   type :  String 
    },
 originalRequestData_contacts_bankAccount_sortCode : {
   type :  String 
    },
 originalRequestData_contacts_bankAccount_clearAccountNumber : {
   type :  String
    }
  },
  { collection: 'accountverififcations' } 
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

export interface OverallResponse  {
  decision?: string;
  decisionText?: string;
  decisionReasons?: string[];
  recommendedNextActions?: string[];
  spareObjects?: string[];
}

export interface ResponseHeader {
  requestType?: string;
  clientReferenceId?: string;
  expRequestId?: string;
  messageTime?: string;
  overallResponse?: OverallResponse;
  responseCode?: string;
  responseType?: string;
  responseMessage?: string;
  tenantID?: string;
}

export interface OtherData {
  branchData?: string[];
}

export interface WarningsErrors {
  responseType?: string;
  responseCode?: string;
  responseMessage?: string;
}

export interface DecisionElements {
  serviceName?: string;
  applicantId?: string;
  warningsErrors?: WarningsErrors[];
  otherData?: OtherData;
  decisions?: string[];
}

export interface OrchestrationDecisions {
  sequenceId?: string;
  decisionSource?: string;
  decision?: string;
  decisionReasons?: string[];
  score?: number;
  decisionText?: string;
  nextAction?: string;
  decisionTime?: string;
}

export interface ClientResponsePayload {
  orchestrationDecisions?: OrchestrationDecisions[];
  decisionElements?: DecisionElements[];
}

export interface PersonNames {
  id?: string;
  type?: string;
  title?: string;
  firstName?: string;
  middleNames?: string;
  surName?: string;
  nameSuffix?: string;
}

export interface PersonDetails {
  dateOfBirth?: string;
}

export interface Person {
  typeOfPerson?: string;
  personDetails?: PersonDetails;
  names?: PersonNames[];
}

export interface ResidentFrom {
  fullDateFrom?: string;
  yearFrom?: string;
  monthFrom?: string;
  dayFrom?: string;
}

export interface ResidentTo {
  fullDateTo?: string;
  yearTo?: string;
  monthTo?: string;
  dayTo?: string;
}

export interface Address {
  id?: string;
  addressIdentifier?: string;
  indicator?: string;
  addressType?: string;
  poBoxNumber?: string;
  subBuilding?: string;
  buildingName?: string;
  buildingNumber?: string;
  street?: string;
  street2?: string;
  subLocality?: string;
  locality?: string;
  postTown?: string;
  county?: string;
  postal?: string;
  countryCode?: string;
  residentFrom?: ResidentFrom;
  residentTo?: ResidentTo;
}

export interface Contact {
  id?: string;
  person?: Person;
  addresses?: Address[];
  bankAccount?: {
    sortCode?: string;
    clearAccountNumber?: string;
  };
}

export interface OriginalRequestData {
  application?: {
    applicants?: {
      id?: string;
      contactId?: string;
    }[];
  };
  source?: string;
  contacts?: Contact[];
}

export interface BAV {
  responseHeader?: ResponseHeader;
  clientResponsePayload?: ClientResponsePayload;
  originalRequestData?: OriginalRequestData;
}


// Sub-schema for BAV_Responseheader_Responseheader_overallresponse
const OverallResponseSchema = new Schema({
  decision: { type: String },
  decisionText: { type: String },
  decisionReasons: { type: [String] },
  recommendedNextActions: { type: [String] },
  spareObjects: { type: [String] },
});

// Sub-schema for BAV_Responseheader
const ResponseHeaderSchema = new Schema({
  requestType: { type: String },
  clientReferenceId: { type: String },
  expRequestId: { type: String },
  messageTime: { type: String },
  overallResponse: OverallResponseSchema,
  responseCode: { type: String },
  responseType: { type: String },
  responseMessage: { type: String },
  tenantID: { type: String },
});

// Sub-schema for BAV_Clientresponsepayload_Clientresponsepayload_decisionelements_Clientresponsepayload_decisionelements_otherdata
const OtherDataSchema = new Schema({
  branchData: { type: [String] },
});

// Sub-schema for BAV_Clientresponsepayload_Clientresponsepayload_decisionelements_Clientresponsepayload_decisionelements_warningserrors
export const WarningsErrorsSchema = new Schema({
  responseType: { type: String },
  responseCode: { type: String },
  responseMessage: { type: String },
});

// Sub-schema for BAV_Clientresponsepayload_Clientresponsepayload_decisionelements
export const DecisionElementsSchema = new Schema({
  serviceName: { type: String },
  applicantId: { type: String },
  warningsErrors: [WarningsErrorsSchema],
  otherData: OtherDataSchema,
  decisions: { type: [String] },
});

// Sub-schema for BAV_Clientresponsepayload_Clientresponsepayload_orchestrationdecisions
export const OrchestrationDecisionsSchema = new Schema({
  sequenceId: { type: String },
  decisionSource: { type: String },
  decision: { type: String },
  decisionReasons: { type: [String] },
  score: { type: Number },
  decisionText: { type: String },
  nextAction: { type: String },
  decisionTime: { type: String },
});

// Sub-schema for BAV_Clientresponsepayload
export const ClientResponsePayloadSchema = new Schema({
  orchestrationDecisions: [OrchestrationDecisionsSchema],
  decisionElements: [DecisionElementsSchema],
});

// Sub-schema for BAV_Originalrequestdata_Originalrequestdata_contacts_Originalrequestdata_contacts_person_Originalrequestdata_contacts_person_names
export const PersonNamesSchema = new Schema({
  id: { type: String },
  type: { type: String },
  title: { type: String },
  firstName: { type: String },
  middleNames: { type: String },
  surName: { type: String },
  nameSuffix: { type: String },
});

// Sub-schema for BAV_Originalrequestdata_Originalrequestdata_contacts_Originalrequestdata_contacts_person_Originalrequestdata_contacts_person_persondetails
export const PersonDetailsSchema = new Schema({
  dateOfBirth: { type: String },
});

// Sub-schema for BAV_Originalrequestdata_Originalrequestdata_contacts_Originalrequestdata_contacts_person
export const PersonSchema = new Schema({
  typeOfPerson: { type: String },
  personDetails: PersonDetailsSchema,
  names: [PersonNamesSchema],
});

// Sub-schema for BAV_Originalrequestdata_Originalrequestdata_contacts_Originalrequestdata_contacts_addresses_Originalrequestdata_contacts_addresses_residentfrom
export const ResidentFromSchema = new Schema({
  fullDateFrom: { type: String },
  yearFrom: { type: String },
  monthFrom: { type: String },
  dayFrom: { type: String },
});

// Sub-schema for BAV_Originalrequestdata_Originalrequestdata_contacts_Originalrequestdata_contacts_addresses_Originalrequestdata_contacts_addresses_residentto
export const ResidentToSchema = new Schema({
  fullDateTo: { type: String },
  yearTo: { type: String },
  monthTo: { type: String },
  dayTo: { type: String },
});

// Sub-schema for BAV_Originalrequestdata_Originalrequestdata_contacts_Originalrequestdata_contacts_addresses
export const AddressesSchema = new Schema({
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
  residentFrom: ResidentFromSchema,
  residentTo: ResidentToSchema,
});

// Sub-schema for BAV_Originalrequestdata_Originalrequestdata_contacts
export const ContactsSchema = new Schema({
  id: { type: String },
  person: PersonSchema,
  addresses: [AddressesSchema],
  bankAccount: {
    sortCode: { type: String },
    clearAccountNumber: { type: String },
  },
});

// Sub-schema for BAV_Originalrequestdata
export const OriginalRequestDataSchema = new Schema({
  application: {
    applicants: [
      {
        id: { type: String },
        contactId: { type: String },
      },
    ],
  },
  source: { type: String },
  contacts: [ContactsSchema],
});

export interface IBAVModel extends BAV, Document{

}

// Main schema for BAV
export const BAVSchema = new Schema({
  responseHeader: ResponseHeaderSchema,
  clientResponsePayload: ClientResponsePayloadSchema,
  originalRequestData: OriginalRequestDataSchema,
});



//export default mongoose.model("BAV", BAVSchema);


/**
 * Additional concepts from the Concerto model will follow the same structure.
 * Define each concept as an interface and schema.
 */


export default mongoose.model<IAccountVerificationModel>('AccountVerififcation', AccountVerificationSchema);
//export default mongoose.model<IContactModel>('Contact', ContactSchema);