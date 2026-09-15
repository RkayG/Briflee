export interface ClientDTO {
  id: string;
  name: string;
}

export interface ClientContactDTO {
  id: string;
  clientId: string;
  userId: string;
  isPrimary: boolean;
}
