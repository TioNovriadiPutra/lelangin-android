import { TabAddButton } from "@components/atom";
import { AppStack, AppTab } from "@constants/navigation";
import {
  Account,
  AccountEdit,
  AccountEditAddress,
  Auction,
  AuctionAdd,
  AuctionDetail,
  Community,
  CommunityAdd,
  Home,
} from "@pages/app";
import React from "react";
import { Image, StyleSheet } from "react-native";

const MainAppRoute = ({ navigation }) => {
  return (
    <AppTab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "absolute",
          height: 60,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <Image
                source={
                  focused
                    ? require("@assets/images/homeActive.png")
                    : require("@assets/images/homeInactive.png")
                }
                style={styles.icon}
              />
            );
          } else if (route.name === "Community") {
            return (
              <Image
                source={
                  focused
                    ? require("@assets/images/communityActive.png")
                    : require("@assets/images/communityInactive.png")
                }
                style={styles.icon}
              />
            );
          } else if (route.name === "Auction") {
            return (
              <Image
                source={
                  focused
                    ? require("@assets/images/auctionActive.png")
                    : require("@assets/images/auctionInactive.png")
                }
                style={styles.icon}
              />
            );
          } else if (route.name === "Account") {
            return (
              <Image
                source={
                  focused
                    ? require("@assets/images/accountActive.png")
                    : require("@assets/images/accountInactive.png")
                }
                style={styles.icon}
              />
            );
          }
        },
      })}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <AppTab.Screen
        name="Community"
        component={Community}
        options={{ headerShown: false }}
      />
      <AppTab.Screen
        name="Add"
        component={Home}
        options={{
          headerShown: false,
          tabBarButton: () => <TabAddButton nav={navigation} />,
        }}
      />
      <AppTab.Screen
        name="Auction"
        component={Auction}
        options={{ headerShown: false }}
      />
      <AppTab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </AppTab.Navigator>
  );
};

const AppRoute = () => {
  return (
    <AppStack.Navigator initialRouteName="MainApp">
      <AppStack.Screen
        name="MainApp"
        component={MainAppRoute}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="CommunityAdd"
        component={CommunityAdd}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="AuctionAdd"
        component={AuctionAdd}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="AuctionDetail"
        component={AuctionDetail}
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

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
