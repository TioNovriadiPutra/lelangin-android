import { atom } from "recoil";

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
