import { atom } from "recoil";

export const isLoadingState = atom<boolean>({
  key: "isLoadingState",
  default: false,
});

export const currentCommunityState = atom<number>({
  key: "currentCommunityState",
  default: 0,
});

export const currentCategoryState = atom<number>({
  key: "currentCategoryState",
  default: 0,
});
