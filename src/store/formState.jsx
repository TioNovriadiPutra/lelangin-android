import { atom } from "recoil";

export const validationErrorState = atom({
  key: "validationErrorState",
  default: null,
});

export const showDropdownState = atom({
  key: "showDropdownState",
  default: false,
});

export const dropdownDataState = atom({
  key: "dropdownDataState",
  default: null,
});

export const showDatePickerState = atom({
  key: "showDatePickerState",
  default: false,
});

export const datePickerDataState = atom({
  key: "datePickerDataState",
  default: null,
});
