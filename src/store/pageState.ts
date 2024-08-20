import { BidModal, BidModalData } from "@interfaces/pageInterface";
import { atom, selector } from "recoil";

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

export const showBidModalState = atom<boolean>({
  key: "showBidModalState",
  default: false,
});

export const bidModalDataState = atom<BidModalData>({
  key: "bidModalDataState",
  default: null,
});

export const bidModalSelector = selector<BidModal>({
  key: "bidModalSelector",
  get: ({ get }) => {
    const show = get(showBidModalState);
    const data = get(bidModalDataState);

    return {
      show,
      data,
    };
  },
  set: ({ set }, newValue) => {
    const { show, data } = newValue as BidModal;

    set(showBidModalState, show);
    set(bidModalDataState, data);
  },
});
