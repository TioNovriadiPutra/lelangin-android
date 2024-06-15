import { atom } from "recoil";

export const tabBarIndexState = atom({
  key: "tabBarIndex",
  default: 0,
});

export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});

export const showConfirmationModalState = atom({
  key: "showConfirmationModalState",
  default: false,
});

export const confirmationDataState = atom({
  key: "confirmationDataState",
  default: null,
});

export const currentCommunityState = atom({
  key: "currentCommunityState",
  default: null,
});
