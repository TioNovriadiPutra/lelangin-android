export interface UserDTO {
  id: number;
  profile_pic: string | null;
  full_name: string;
  address: string;
}

export interface User {
  id: number;
  profilePic: string | null;
  fullName: string;
  address: string;
}

export interface UpdateUser {
  profilePic?: {
    uri: string;
    type: string;
    name: string;
  };
  fullName?: string;
}

export interface UpdateUserAddress {
  address?: string;
}
