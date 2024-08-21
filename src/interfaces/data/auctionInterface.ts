import { DropdownType } from "@interfaces/formInterface";

export interface AuctionDTO {
  id: number;
  auction_name: string;
  timer: string;
  highest_bid: number;
  approve: boolean;
  status?: string;
  galleries: string[];
}

export interface AuctionDetailDTO extends AuctionDTO {
  category_name: string;
  buy_now_price: number | null;
  description: string;
  approve: boolean;
  profile_id: number;
}

export interface Auction {
  id: number;
  auctionName: string;
  timer: string;
  highestBid: number;
  approve: boolean;
  status?: string;
  galleries: string[];
}

export interface AuctionDetail extends Auction {
  categoryName: string;
  buyNowPrice: number | null;
  description: string;
  approve: boolean;
  profileId: number;
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

export interface BidAuction {
  nominal?: string;
}

export interface ShippingAuction {
  shippingCode: string;
}
