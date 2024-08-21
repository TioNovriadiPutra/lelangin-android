import {
  ApproveModal,
  ApproveModalData,
  BidModal,
  BidModalData,
  ShippingModal,
  ShippingModalData,
} from "@interfaces/pageInterface";
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

export const showApproveModalState = atom<boolean>({
  key: "showApproveModalState",
  default: false,
});

export const approveModalDataState = atom<ApproveModalData>({
  key: "approveModalDataState",
  default: null,
});

export const currentSwitchState = atom<number>({
  key: "currentSwitchState",
  default: 0,
});

export const showShippingModalState = atom<boolean>({
  key: "showShippingModalState",
  default: false,
});

export const shippingModalDataState = atom<ShippingModalData | null>({
  key: "shippingModalDataState",
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

export const approveModalSelector = selector<ApproveModal>({
  key: "approveModalSelector",
  get: ({ get }) => {
    const show = get(showApproveModalState);
    const data = get(approveModalDataState);

    return {
      show,
      data,
    };
  },
  set: ({ set }, newValue) => {
    const { show, data } = newValue as ApproveModal;

    set(showApproveModalState, show);
    set(approveModalDataState, data);
  },
});

export const shippingModalSelector = selector<ShippingModal>({
  key: "shippingModalSelector",
  get: ({ get }) => {
    const show = get(showShippingModalState);
    const data = get(shippingModalDataState);

    return {
      show,
      data,
    };
  },
  set: ({ set }, newValue) => {
    const { show, data } = newValue as ShippingModal;

    set(showShippingModalState, show);
    set(shippingModalDataState, data);
  },
});
