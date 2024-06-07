import React, { useCallback } from "react";
import { AppStack, AppTab } from "../utils/constant/navigation";
import Home from "../pages/app/home/Home";
import { Image } from "react-native";
import { colors } from "../themes/colors";
import Account from "../pages/app/account/Account";
import AccountEdit from "../pages/app/account/AccountEdit";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import AccountEditAddress from "../pages/app/account/AccountEditAddress";

const AppRoute = () => {
  return (
    <AppTab.Navigator
      initialRouteName="HomeRoute"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "HomeRoute") {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/images/homeActive.png")
                    : require("../assets/images/homeInactive.png")
                }
              />
            );
          } else if (route.name === "AccountRoute") {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/images/accountActive.png")
                    : require("../assets/images/accountInactive.png")
                }
              />
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 60,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          shadowColor: colors.Shadow,
          shadowOpacity: 0.1,
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowRadius: 10,
        },
        unmountOnBlur: true,
      })}
    >
      <AppTab.Screen
        name="HomeRoute"
        component={HomeRoute}
        options={{ headerShown: false }}
      />
      <AppTab.Screen
        name="AccountRoute"
        component={AccountRoute}
        options={{ headerShown: false }}
      />
    </AppTab.Navigator>
  );
};

const HomeRoute = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

const AccountRoute = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Account" }],
        })
      );
    }, [navigation])
  );

  return (
    <AppStack.Navigator initialRouteName="Account">
      <AppStack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="AccountEditAddress"
        component={AccountEditAddress}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoute;
