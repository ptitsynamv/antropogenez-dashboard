export interface User {
  email: string;
  _id: string;
}

export enum UserRoleE {
  ADMIN = 'admin',
  GUEST = 'guest',
}

export interface DiscoveryDocumentI {
  user_role: string;
}

export class ErrorResponse {
  public code: number;
  public type: string;
  public message: string;

  constructor(error: any) {
    const errorParsed: ErrorResponse = error.error || {};
    const code = error.status || 500;
    const {type = 'warning', message = 'Something went wrong. Please refresh the page.'} = errorParsed;
    this.code = code;
    this.type = type;
    this.message = message;
  }
}

