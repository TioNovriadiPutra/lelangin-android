import { Auth } from "@interfaces/data/authInterface";
import { atom, selector } from "recoil";

export const authTokenState = atom<string | null>({
  key: "authTokenState",
  default: null,
});

export const userIdState = atom<number | null>({
  key: "userIdState",
  default: null,
});

export const authSelector = selector<Auth>({
  key: "authSelector",
  get: ({ get }) => {
    const token = get(authTokenState);
    const userId = get(userIdState);

    return {
      token,
      userId,
    };
  },
  set: ({ set }, newValue) => {
    const { token, userId } = newValue as Auth;

    set(authTokenState, token);
    set(userIdState, userId);
  },
});
