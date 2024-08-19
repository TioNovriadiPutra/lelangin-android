import {
  AppStackParamList,
  AuthStackParamList,
  MainTabParamList,
} from "@interfaces/navigationType";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();
export const AppStack = createNativeStackNavigator<AppStackParamList>();
export const AppTab = createBottomTabNavigator<MainTabParamList>();
