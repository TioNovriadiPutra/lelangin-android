const BASE_PREFIX = "/v1";

const UPLOAD_PREFIX = BASE_PREFIX + "/uploads";
const AUTH_PREFIX = BASE_PREFIX + "/auth";
const USER_PREFIX = BASE_PREFIX + "/user";

export const API_ENDPOINT = {
  login: AUTH_PREFIX + "/login",
  register: AUTH_PREFIX + "/register",
  logout: AUTH_PREFIX + "/logout",
  getUserProfile: USER_PREFIX + "/profile",
  getUserProfilePic: UPLOAD_PREFIX + "/users",
  updateUserAddress: USER_PREFIX + "/profile/address",
};
