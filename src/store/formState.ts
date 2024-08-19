import {
  DateModalDataType,
  DateModalType,
  DropdownModalDataType,
  DropdownModalType,
} from "@interfaces/formInterface";
import { atom, selector } from "recoil";

export const validationErrorState = atom<ValidationError[] | null>({
  key: "validationErrorState",
  default: null,
});

export const showDropdownModalState = atom<boolean>({
  key: "showDropdownModalState",
  default: false,
});

export const dropdownModalDataState = atom<DropdownModalDataType | null>({
  key: "dropdownModalDataState",
  default: null,
});

export const showDateModalState = atom<boolean>({
  key: "showDateModalState",
  default: false,
});

export const dateModalDataState = atom<DateModalDataType | null>({
  key: "dateModalDataState",
  default: null,
});

export const dropdownModalSelector = selector<DropdownModalType>({
  key: "dropdownModalSelector",
  get: ({ get }) => {
    const show = get(showDropdownModalState);
    const data = get(dropdownModalDataState);

    return {
      show,
      data,
    };
  },
  set: ({ set }, newValue) => {
    const { show, data } = newValue as DropdownModalType;

    set(showDropdownModalState, show);
    set(dropdownModalDataState, data);
  },
});

export const dateModalSelector = selector<DateModalType>({
  key: "dateModalSelector",
  get: ({ get }) => {
    const show = get(showDateModalState);
    const data = get(dateModalDataState);

    return {
      show,
      data,
    };
  },
  set: ({ set }, newValue) => {
    const { show, data } = newValue as DateModalType;

    set(showDateModalState, show);
    set(dateModalDataState, data);
  },
});
