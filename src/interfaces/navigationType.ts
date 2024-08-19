import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AppStackParamList = {
  MainApp: NavigatorScreenParams<MainTabParamList>;
  CommunityAdd: undefined;
  AuctionAdd: undefined;
  AccountEdit: undefined;
  AccountEditAddress: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Community: undefined;
  Add: undefined;
  Auction: undefined;
  Account: undefined;
};

export type AuthStackProps = NativeStackNavigationProp<AuthStackParamList>;
export type AppStackProps = NativeStackNavigationProp<AppStackParamList>;
