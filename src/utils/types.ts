import * as e from 'express';
import { Query } from 'express-serve-static-core';

export interface IReq<T = void> extends e.Request {
  body: T;
}

export interface IReqQuery<T extends Query, U = void> extends e.Request {
  query: T;
  body: U;
}

export interface IRes extends e.Response {}

export type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>;
};

export interface SwaggerSchema {
  type?: string;
  properties?: { [key: string]: SwaggerSchema };
  required?: string[]; // List of required properties
  items?: SwaggerSchema; // Handles arrays
  additionalProperties?: SwaggerSchema ; // Handles dynamic object properties
}

export interface SwaggerObject {
  info?: {
    title?: string;
  };
  components?: {
    schemas?: {
      [key: string]: SwaggerSchema;
    };
  };
  definitions?: {
      [key: string]: SwaggerSchema;
  };
}


