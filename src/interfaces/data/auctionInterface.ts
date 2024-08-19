import { DropdownType } from "@interfaces/formInterface";

export interface AuctionDTO {
  id: number;
  auction_name: string;
  timer: string;
  highest_bid: number;
  galleries: string[];
}

export interface Auction {
  id: number;
  auctionName: string;
  timer: string;
  highestBid: number;
  galleries: string[];
}

export interface AddAuction {
  auctionImages?: { uri: string; type: string }[];
  auctionName?: string;
  categoryId?: DropdownType;
  communityId?: DropdownType;
  description?: string;
  startBid?: string;
  buyNow?: boolean;
  buyNowPrice?: string;
  timer?: string;
}
