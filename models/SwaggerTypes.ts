// Swagger Types for generated models
{
  "RequestPayload": {
    "properties": {
      "requestID": {
        "description": "A unique identifier associated with this request. Can only contain English characters (lowercase and uppercase), numbers and underscores.",
        "type": "string",
        "maxLength": 30,
        "default": "123"
      },
      "PID": {
        "description": "Product ID issued by the Form Fill team. It determines request configuration.",
        "type": "string",
        "default": "device_only"
      },
      "cinfo": {
        "type": "object",
        "$ref": "#/definitions/Cinfo"
      },
      "deviceInfo": {
        "type": "object",
        "$ref": "#/definitions/DeviceInfo"
      }
    },
    "required": [
      "requestID",
      "PID",
      "cinfo",
      "DeviceInfo"
    ]
  },
  "Cinfo": {
    "description": "Consumer's information",
    "type": "object",
    "properties": {
      "firstName": {
        "description": "Consumer's first name",
        "maxLength": 60,
        "type": "string",
        "default": "Julie"
      },
      "lastName": {
        "description": "Consumer's last name",
        "maxLength": 60,
        "type": "string",
        "default": "Murrel"
      },
      "zipCode": {
        "description": "Consumer's 5-digit zip code",
        "maxLength": 5,
        "type": "string",
        "default": "60632"
      },
      "ssn4": {
        "description": "Consumer's last 4-digit SSN",
        "maxLength": 4,
        "type": "string",
        "default": "2887"
      }
    },
    "required": [
      "firstName",
      "lastName",
      "zipCode",
      "ssn4"
    ]
  },
  "DeviceInfo": {
    "description": "Information from the consumer's device that submitted to the web server hosting the form.  This is to be used for fraudnet detection.  Some of this information is submitted as part  of the javascript collector and some of it needs to be extracted from the web request by  the server hosting the form.",
    "type": "object",
    "properties": {
      "jsc": {
        "description": "JavaScript Collector payload",
        "type": "string",
        "default": "a1d03sdf30soflefgid"
      },
      "hdm": {
        "description": "Experian's Hosted Device Manager (HDM) web service response information",
        "type": "string",
        "default": "2odf0gm4ggy4f0sdgk4e"
      },
      "ipAddress": {
        "description": "IP address of the consumer's device that submitted to the web server hosting the form.",
        "type": "string"
      },
      "headers": {
        "description": "Array of httpe headers submitted from the consumer's device to the web server hosting the form.",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "headerName": {
              "type": "string"
            },
            "headerValue": {
              "type": "string"
            }
          }
        }
      }
    },
    "required": [
      "jsc",
      "hdm"
    ]
  },
  "SuccessResponse": {
    "description": "",
    "type": "object",
    "properties": {
      "requestID": {
        "description": "A unique identifier associated with this request.",
        "type": "string"
      },
      "success": {
        "description": "Indicates whether the request is successful or not.",
        "type": "string"
      },
      "code": {
        "description": "An error code mapped to the processing result. Refer to the onboarding document for details.",
        "type": "string"
      },
      "profile": {
        "type": "object",
        "description": "Profile of the consumer found in Datalab's database. If the code is not C000, Profile field does not show up.",
        "properties": {
          "firstName": {
            "description": "first name",
            "type": "string",
            "maxLength": 60
          },
          "middleName": {
            "description": "middle name",
            "type": "string",
            "maxLength": 20
          },
          "lastName": {
            "description": "last name",
            "type": "string",
            "maxLength": 60
          },
          "secondSurname": {
            "description": "Second surname",
            "type": "string",
            "maxLength": 60
          },
          "suffix": {
            "description": "suffix",
            "type": "string",
            "maxLength": 10
          },
          "address": {
            "description": "Street address",
            "type": "string",
            "maxLength": 60
          },
          "unit": {
            "description": "Apt, Unit, etc.",
            "type": "string",
            "maxLength": 10
          },
          "city": {
            "description": "City",
            "type": "string",
            "maxLength": 60
          },
          "state": {
            "description": "State",
            "type": "string",
            "maxLength": 2
          },
          "zip": {
            "description": "Zip code",
            "type": "string",
            "maxLength": 5
          },
          "zip+4": {
            "description": "Zip code extension",
            "type": "string",
            "maxLength": 4
          },
          "yearAtAddress": {
            "description": "Years living in the current address",
            "type": "string",
            "maxLength": 2
          },
          "monthAtAddress": {
            "description": "Additional months living in the current address",
            "type": "string",
            "maxLength": 2
          },
          "primaryPhone": {
            "description": "Priamary phone number",
            "type": "string",
            "maxLength": 10
          },
          "dob": {
            "description": "Date of Birth in the format MM/DD/YYYY.  If dob is not availabe, this variable will be empty.  If only the year of birth is available, it will be provided alone.",
            "type": "string",
            "maxLength": 10
          },
          "ssn4": {
            "description": "Last 4 digits of SSN.",
            "type": "string",
            "maxLength": 4
          },
          "ssn9": {
            "description": "Full digits of SSN. This number may be used for additonal consumer identity verification.",
            "type": "string",
            "maxLength": 9
          },
          "spouseFirstName": {
            "description": "Spouse's first name",
            "type": "string",
            "maxLength": 60
          },
          "previousAddress": {
            "description": "Previous street address",
            "type": "string",
            "maxLength": 60
          },
          "previousUnit": {
            "description": "Apt, Unit, etc.",
            "type": "string",
            "maxLength": 10
          },
          "previousCity": {
            "description": "City",
            "type": "string",
            "maxLength": 60
          },
          "previousState": {
            "description": "State",
            "type": "string",
            "maxLength": 2
          },
          "previousZip": {
            "description": "Zip code",
            "type": "string",
            "maxLength": 5
          },
          "previousZip+4": {
            "description": "Zip code extension",
            "type": "string",
            "maxLength": 4
          },
          "yearAtPreviousAddress": {
            "description": "Years living in the previous address",
            "type": "string",
            "maxLength": 2
          },
          "monthAtPreviousAddress": {
            "description": "Additional months living in the previous address",
            "type": "string",
            "maxLength": 2
          }
        }
      }
    }
  },
  "ErrorResponse": {
    "description": "",
    "type": "object",
    "properties": {
      "requestID": {
        "description": "A unique identifier associated with this request.",
        "type": "string"
      },
      "code": {
        "description": "Error code mapped to a sepecific error. Composed of one character \"C\" or \"G\" followed by three digits. Refer to table 2.3.4-1 in the onboarding document for more details.",
        "type": "string"
      },
      "success": {
        "description": "false",
        "type": "string"
      }
    }
  },
  "v1_request_example": {
    "type": "object",
    "description": "{\n  \"requestID\": \"123\",\n  \"PID\": \"device_only\",\n  \"cinfo\":{\n      \"firstName\": \"Julie\",\n      \"lastName\": \"Murrel\",\n      \"zipCode\": \"60632\",\n      \"ssn4\": \"60632\"},\n  \"deviceInfo\":{\n      \"jsc\": \"a1d03sdf30soflefgid\", \n      \"hdm\": \"2odf0gm4ggy4f0sdgk4e\",\n      \"headers\" : [\n        { \"headerName\": \"accept-language\",\n         \"headerValue\": \"en-US,en;q=0.8\"},\n         {\n          \"headerName\": \"accept\",\n          \"headerValue\": \"*/*\"\n          }\n        ]\n  }\n}"
  },
  "v1_response_example": {
    "type": "object",
    "description": "{\n  \"profile\": {\n    \"yearAtAddress\": 0,\n    \"suffix\": \"Jr.\",\n    \"primaryPhone\": \"1234567891\",\n    \"monthAtAddress\": 7,\n    \"previousAddress\": \"2222 PREVIOUS ST\",\n    \"previousState\": \"CA\",\n    \"city\": \"CHICAGO\",\n    \"zip\": \"60632\",\n    \"middleName\": \"K\",\n    \"state\": \"IL\",\n    \"previousZip+4\": \"1111\",\n    \"unit\": \"5A\",\n    \"monthAtPreviousAddress\": 6,\n    \"previousCity\": \"SAN DIEGO\",\n    \"zip+4\": \"3238\",\n    \"ssn4\": \"2887\",\n    \"previousUnit\": \"APT #1\",\n    \"yearAtPreviousAddress\": 0,\n    \"ssn9\": \"666532887\",\n    \"address\": \"5311 S LAWNDALE AVE\",\n    \"secondSurname\": \"STEVENS\",\n    \"firstName\": \"JULIE\",\n    \"previousZip\": \"92130\",\n    \"dob\": \"02/14/1975\",\n    \"lastName\": \"MURREL\",\n    \"spouseFirstName\": \"ADAM\"},\n  \"code\": \"C000\",\n  \"requestID\": \"123\",\n  \"success\": \"true\"\n}"
  }
}