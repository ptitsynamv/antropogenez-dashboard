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
