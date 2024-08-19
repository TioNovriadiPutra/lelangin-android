export interface CommunityDTO {
  id: number;
  thumbnail: string;
  community_name: string;
}

export interface Community {
  id: number;
  thumbnail: string;
  communityName: string;
}

export interface AddCommunity {
  thumbnail?: {
    uri: string;
    type: string;
  };
  communityName?: string;
}
