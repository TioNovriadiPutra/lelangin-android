import React from "react";
import { AppTab } from "../utils/constant/navigation";
import { colors } from "../themes/colors";
import HomeRoute from "./HomeRoute";
import CommunityRoute from "./CommunityRoute";
import AccountRoute from "./AccountRoute";
import TabBarIcon from "../components/atom/TabBarIcon";
import AuctionRoute from "./AuctionRoute";

const AppRoute = () => {
  return (
    <AppTab.Navigator
      initialRouteName="HomeRoute"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={route.name} />
        ),
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
        name="CommunityRoute"
        component={CommunityRoute}
        options={{ headerShown: false }}
      />
      <AppTab.Screen
        name="AuctionRoute"
        component={AuctionRoute}
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

export default AppRoute;
