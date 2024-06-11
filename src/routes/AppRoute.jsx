import React from "react";
import { AppStack } from "../utils/constant/navigation";
import HomeRoute from "./HomeRoute";
import CommunityRoute from "./CommunityRoute";
import AccountRoute from "./AccountRoute";
import AuctionRoute from "./AuctionRoute";
import AppTabRoute from "./AppTabRoute";

const AppRoute = () => {
  return (
    <AppStack.Navigator initialRouteName="AppTabRoute">
      <AppStack.Screen
        name="AppTabRoute"
        component={AppTabRoute}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="CommunityRoute"
        component={CommunityRoute}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="AuctionRoute"
        component={AuctionRoute}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="AccountRoute"
        component={AccountRoute}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoute;
