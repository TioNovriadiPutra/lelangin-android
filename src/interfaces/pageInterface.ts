import { ImageSourcePropType } from "react-native";
import { AppStackParamList } from "./navigationType";

export interface Toast {
  show: boolean;
  type: "success" | "failed";
  message: string;
}

export interface AccountMenu {
  icon: ImageSourcePropType;
  label: string;
  subLabel: string;
  destination?: keyof AppStackParamList;
}

export interface AppHeader {
  title: string;
  withBack: boolean;
}

export interface AppHeaderButton {
  type: "submit" | "search" | "add";
  label?: string;
  color?: string;
}

export interface BidModal {
  show: boolean;
  data: BidModalData | null;
}

export interface BidModalData {
  highestBid: number;
  onBid: (data: any) => void | null;
}

export interface ApproveModal {
  show: boolean;
  data: ApproveModalData | null;
}

export interface ApproveModalData {
  onApprove: () => void;
}
