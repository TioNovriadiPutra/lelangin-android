import { atom } from "recoil";

export const userProfileState = atom({
  key: "userProfileState",
  default: {
    id: null,
    profilePic: null,
    fullname: "",
    address: "",
  },
});
