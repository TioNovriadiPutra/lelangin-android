import { DropdownType } from "@interfaces/formInterface";

export interface LoginData {
  token: Token;
  userId: number;
}

export interface Auth {
  token: string | null;
  userId: number | null;
}

export interface Token {
  type: string;
  name: string | null;
  token: string;
  abilities: string[];
  lastUsedAt: string | null;
  expiresAt: string | null;
}

export interface Login {
  email?: string;
  password?: string;
}

export interface Register extends Login {
  password_confirmation?: string;
  fullName?: string;
  gender?: DropdownType;
  dob?: string;
  address?: string;
}
