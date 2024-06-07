import { atom, selector } from "recoil";

export const authTokenState = atom({
  key: "authTokenState",
  default: null,
});

export const isLoggedInSelector = selector({
  key: "isLoggedInSelector",
  get: ({ get }) => {
    const token = get(authTokenState);

    return !!token;
  },
});
