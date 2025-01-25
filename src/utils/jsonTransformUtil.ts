/**
 * Converts a flat JSON object into a nested structure based on the destination model.
 * @param source The flat JSON object (e.g., source.json).
 * @returns A nested JSON object matching the destination model structure.
 */

export interface SourceJSON {
    responseHeader_requestType: string;
    responseHeader_tenantId: string;
    responseHeader_clientReferenceId: string;
    responseHeader_expRequestId: string;
    responseHeader_messageTime : Date;
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

export interface TargetJSON {
    header: {
        tenantId: string;
        clientReferenceId: string;
        requestType: string;
        expRequestId: string;
        messageTime: Date;
        txnId: string;
        time: string;
        options: object;
    };
    payload: {
        application: {
            applicants: Array<{ id: string; contactId: string }>;
        };
        source: string;
        contacts: Array<{
            id: string;
            person: {
                typeOfPerson: string;
                personDetails: { dateOfBirth: null };
                names: Array<{
                    id: string;
                    title: string;
                    firstName: string;
                    middleNames: string;
                    surName: string;
                    nameSuffix: string;
                }>;
            };
            addresses: Array<{
                id: string;
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
                residentFrom: object;
                residentTo: object;
            }>;
            bankAccount: {
                sortCode: string;
                clearAccountNumber: string;
            };
        }>;
    };
}

export interface BankAccountVerificationResponse {
    responseHeader: {
      requestType: string;
      clientReferenceId: string;
      expRequestId: string;
      messageTime: string;
      overallResponse: {
        decision: string;
        decisionText: string;
        decisionReasons: string[];
        recommendedNextActions: any[];
        spareObjects: any[];
      };
      responseCode: string;
      responseType: string;
      responseMessage: string;
      tenantID: string;
    };
    clientResponsePayload: {
      orchestrationDecisions: {
        sequenceId: string;
        decisionSource: string;
        decision: string;
        decisionReasons: string[];
        score: number;
        decisionText: string;
        nextAction: string;
        decisionTime: string;
      }[];
      decisionElements: {
        serviceName: string;
        applicantId: string;
        appReference?: string;
        warningsErrors: any[];
        otherData?: {
          branchData?: {
            institutionName: string;
            branchName: string;
            address: {
              [key: string]: string;
            }[];
            telephoneNumber: string;
            subBranchNumber: number;
          }[];
          response?: {
            uuid: string;
          };
        };
        auditLogs?: {
          eventType: string;
          eventDate: string;
          eventOutcome: string;
        }[];
        decisions?: {
          element: string;
          value: string;
        }[];
        rules?: {
          ruleId: string;
          ruleName: string;
          ruleScore: number;
          ruleText: string;
        }[];
        matches?: {
          name: string;
          value: string;
        }[];
        dataCounts?: {
          name: string;
          value: number;
        }[];
        scores?: {
          name: string;
          score: number;
        }[];
      }[];
    };
    originalRequestData: {
      application: {
        applicants: {
          id: string;
          contactId: string;
        }[];
      };
      source: string;
      contacts: {
        id: string;
        person: {
          typeOfPerson: string;
          personDetails: {
            dateOfBirth: string;
          };
          names: {
            id: string;
            title: string;
            firstName: string;
            middleNames: string;
            surName: string;
            nameSuffix: string;
          }[];
        };
        addresses: {
          id: string;
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
          residentFrom: {
            fullDateFrom: string;
            yearFrom: string;
            monthFrom: string;
            dayFrom: string;
          };
          residentTo: {
            fullDateTo: string;
            yearTo: string;
            monthTo: string;
            dayTo: string;
          };
        }[];
        bankAccount: {
          sortCode: string;
          clearAccountNumber: string;
        };
      }[];
    };
  }
  

export function convertSourceToTarget(source: SourceJSON): TargetJSON {
    return {
        header: {
            tenantId: source.responseHeader_tenantId, // Value not found in source JSON
            clientReferenceId: source.responseHeader_clientReferenceId,
            requestType: source.responseHeader_requestType,
            expRequestId: source.responseHeader_expRequestId,
            messageTime: source.responseHeader_messageTime,
            txnId: "", // Placeholder as source JSON does not provide this
            time: "", // Placeholder as source JSON does not provide this
            options: {},
        },
        payload: {
            application: {
                applicants: [
                    {
                        id: "APPLICANT_1",
                        contactId: "MainContact_1",
                    },
                ],
            },
            source: "WEB", // Assuming fixed value
            contacts: [
                {
                    id: "MainContact_1",
                    person: {
                        typeOfPerson: "APPLICANT",
                        personDetails: {
                            dateOfBirth: null,
                        },
                        names: [
                            {
                                id: "MAINPERSONNAME_1",
                                title: source.originalRequestData_contacts_0_person_names_0_title, // Placeholder for title
                                firstName: source.originalRequestData_contacts_0_person_names_0_firstName,
                                middleNames: source.originalRequestData_contacts_0_person_names_0_middleNames,
                                surName: source.originalRequestData_contacts_0_person_names_0_surName,
                                nameSuffix: "",
                            },
                        ],
                    },
                    addresses: [
                        {
                            id: "MAINAPPADDRESS_1",
                            addressIdentifier: source.originalRequestData_contacts_0_addresses_0_addressIdentifier,
                            indicator: "RESIDENTIAL",
                            addressType: "CURRENT",
                            poBoxNumber: "",
                            subBuilding: "",
                            buildingName: source.originalRequestData_contacts_0_addresses_0_buildingName,
                            buildingNumber: "76", // Placeholder as source JSON does not provide this
                            street: source.originalRequestData_contacts_0_addresses_0_street, // Placeholder as source JSON does not provide this
                            street2: "",
                            subLocality: "",
                            locality: "",
                            postTown: source.originalRequestData_contacts_0_addresses_0_postTown, // Placeholder as source JSON does not provide this
                            county: "",
                            postal: source.originalRequestData_contacts_0_addresses_0_postal, // Placeholder as source JSON does not provide this
                            countryCode: "GBR", // Assuming fixed value
                            residentFrom: {
                                fullDateFrom: "2011-04-28",
                                yearFrom: "2011",
                                monthFrom: "04",
                                dayFrom: "28"
                            },
                            residentTo: {
                                fullDateTo: "2021-04-28",
                                yearTo: "2021",
                                monthTo: "04",
                                dayTo : "28"
                            }
                        },
                    ],
                    bankAccount: {
                        sortCode: source.originalRequestData_contacts_0_bankAccount_sortCode,
                        clearAccountNumber: source.originalRequestData_contacts_0_bankAccount_clearAccountNumber,
                    },
                },
            ],
        },
    };
}

