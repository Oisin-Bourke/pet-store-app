export interface Info {
  description: string;
  version: string;
  title: string;
  termsOfService: string;
  contact: {
    email: string;
  };
  license: {
    name: string;
    url: string;
  };
}

export interface Tag {
  name: string;
  description?: string;
  externalDocs?: any;
}

export interface Parameter {
  name: string;
  in: string;
  description: string;
  required: boolean;
  type: string;
  items: {
    type: string;
  };
  colelctionFormat: string;
}

export interface Responses {
  [key: string]: Response;
}

export interface Response {
  description: string;
  schema?: Schema;
}

export interface Schema {
  type: string;
  items: Items;
}

export interface Items {
  $ref: string;
}

export interface Method {
  method: string;
  tags: string[];
  summary: string;
  description: string;
  operationId: string;
  produces: string[];
  parameters: any[];
  responses: Responses;
  path: string;
}

export interface Path {
  path: string;
  pathId: string;
  methods: Method[];
  tag: string;
}

export interface InitialData {
  info: Info;
  tags: Tag[];
  paths: Path[];
}
