const AUTH_PREFIX = "/auth";
const UPLOAD_PREFIX = "/uploads";
const USER_PREFIX = "/user";
const COMMUNITY_PREFIX = "/community";
const AUCTION_PREFIX = "/auction";
const CATEGORY_PREFIX = "/category";

export const API_ENDPOINT = {
  login: AUTH_PREFIX + "/login",
  register: AUTH_PREFIX + "/register",
  logout: AUTH_PREFIX + "/logout",
  getUserImage: UPLOAD_PREFIX + "/users",
  getCommunityImage: UPLOAD_PREFIX + "/communities",
  getAuctionImage: UPLOAD_PREFIX + "/auctions",
  getUserProfile: USER_PREFIX,
  updateUserProfile: USER_PREFIX + "/profile",
  updateUserAddress: USER_PREFIX + "/address",
  getCommunities: COMMUNITY_PREFIX,
  getAuctionsUser: AUCTION_PREFIX,
  getApproveAuctions: AUCTION_PREFIX + "/approve",
  getAuctionsByCommunity: AUCTION_PREFIX + "/community",
  getAuctionsByCategory: AUCTION_PREFIX + "/category",
  addAuction: AUCTION_PREFIX,
  bidAuction: AUCTION_PREFIX + "/bid",
  paymentAuction: AUCTION_PREFIX + "/payment",
  getCategories: CATEGORY_PREFIX,
};
