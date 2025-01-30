const mongoose = require('mongoose');

const RequestPayloadSchema = new mongoose.Schema({
	  requestID: { type: String },
	  PID: { type: String },
	  cinfo: { type: Object },
	  deviceInfo: { type: Object },
});

module.exports.RequestPayload = mongoose.model('RequestPayload', RequestPayloadSchema);

const CinfoSchema = new mongoose.Schema({
	  firstName: { type: String },
	  lastName: { type: String },
	  zipCode: { type: String },
	  ssn4: { type: String },
});

module.exports.Cinfo = mongoose.model('Cinfo', CinfoSchema);

const DeviceInfoSchema = new mongoose.Schema({
	  jsc: { type: String },
	  hdm: { type: String },
	  ipAddress: { type: String },
});

module.exports.DeviceInfo = mongoose.model('DeviceInfo', DeviceInfoSchema);

const SuccessResponseSchema = new mongoose.Schema({
	  requestID: { type: String },
	  success: { type: String },
	  code: { type: String },
	  profile: { type: Object },
});

module.exports.SuccessResponse = mongoose.model('SuccessResponse', SuccessResponseSchema);

const ErrorResponseSchema = new mongoose.Schema({
	  requestID: { type: String },
	  code: { type: String },
	  success: { type: String },
});

module.exports.ErrorResponse = mongoose.model('ErrorResponse', ErrorResponseSchema);

const v1_request_exampleSchema = new mongoose.Schema({
});

module.exports.v1_request_example = mongoose.model('v1_request_example', v1_request_exampleSchema);

const v1_response_exampleSchema = new mongoose.Schema({
});

module.exports.v1_response_example = mongoose.model('v1_response_example', v1_response_exampleSchema);

