import { Schema, model } from 'mongoose';

const RequestPayloadSchema = new Schema({
	requestID: { type: String },
	PID: { type: String },
	cinfo: { type: Schema.Types.Mixed },
	deviceInfo: { type: Schema.Types.Mixed },
});

export const RequestPayload = model('RequestPayload', RequestPayloadSchema);

const CinfoSchema = new Schema({
	firstName: { type: String },
	lastName: { type: String },
	zipCode: { type: String },
	ssn4: { type: String },
});

export const Cinfo = model('Cinfo', CinfoSchema);

const DeviceInfoSchema = new Schema({
	jsc: { type: String },
	hdm: { type: String },
	ipAddress: { type: String },
	headers: [{ type: Schema.Types.Mixed }],
});

export const DeviceInfo = model('DeviceInfo', DeviceInfoSchema);

const SuccessResponseSchema = new Schema({
	requestID: { type: String },
	success: { type: String },
	code: { type: String },
	profile: { type: Schema.Types.Mixed },
});

export const SuccessResponse = model('SuccessResponse', SuccessResponseSchema);

const ErrorResponseSchema = new Schema({
	requestID: { type: String },
	code: { type: String },
	success: { type: String },
});

export const ErrorResponse = model('ErrorResponse', ErrorResponseSchema);

const v1_request_exampleSchema = new Schema({
});

export const v1_request_example = model('v1_request_example', v1_request_exampleSchema);

const v1_response_exampleSchema = new Schema({
});

export const v1_response_example = model('v1_response_example', v1_response_exampleSchema);

