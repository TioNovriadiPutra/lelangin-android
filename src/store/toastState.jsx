import { atom, selector } from "recoil";

export const showToastState = atom({
  key: "showToastState",
  default: false,
});

export const toastTypeState = atom({
  key: "toastTypeState",
  default: null,
});

export const toastMessageState = atom({
  key: "toastMessageState",
  default: "Default Message",
});

export const toastSelector = selector({
  key: "toastSelector",
  get: ({ get }) => {
    const type = get(toastTypeState);
    const message = get(toastMessageState);

    const data = {
      type,
      message,
    };

    return data;
  },
  set: ({ set }, newValue) => {
    set(showToastState, true);
    set(toastTypeState, newValue.type);
    set(toastMessageState, newValue.message);
  },
});
