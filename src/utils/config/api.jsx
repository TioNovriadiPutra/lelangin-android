const BASE_PREFIX = "/v1";

const UPLOAD_PREFIX = BASE_PREFIX + "/uploads";
const AUTH_PREFIX = BASE_PREFIX + "/auth";
const USER_PREFIX = BASE_PREFIX + "/user";
const COMMUNITY_PREFIX = BASE_PREFIX + "/community";
const AUCTION_PREFIX = BASE_PREFIX + "/auction";

export const API_ENDPOINT = {
  login: AUTH_PREFIX + "/login",
  register: AUTH_PREFIX + "/register",
  logout: AUTH_PREFIX + "/logout",
  getUserProfile: USER_PREFIX + "/profile",
  getUserProfilePic: UPLOAD_PREFIX + "/users",
  updateUserAddress: USER_PREFIX + "/profile/address",
  addCommunity: COMMUNITY_PREFIX,
  getCommunityPic: UPLOAD_PREFIX + "/communities",
  getAuctions: AUCTION_PREFIX,
  getAuctionPic: UPLOAD_PREFIX + "/auctions",
};
