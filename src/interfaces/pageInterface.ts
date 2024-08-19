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
