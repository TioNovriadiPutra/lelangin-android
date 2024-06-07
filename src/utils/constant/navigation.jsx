import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AuthStack = createNativeStackNavigator();
export const AppStack = createNativeStackNavigator();
export const AppTab = createBottomTabNavigator();
