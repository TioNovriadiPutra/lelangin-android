import React from "react";
import { AppTab } from "../utils/constant/navigation";
import Home from "../pages/app/home/Home";
import Community from "../pages/app/community/Community";
import Auction from "../pages/app/auction/Auction";
import Account from "../pages/app/account/Account";
import { colors } from "../themes/colors";
import TabBarIcon from "../components/atom/TabBarIcon";
import Add from "../pages/app/add/Add";
import TabAddButton from "../components/atom/TabAddButton";

const AppTabRoute = () => {
  return (
    <AppTab.Navigator
      initialRouteName="Home"
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
        name="AddButton"
        component={Home}
        options={({ navigation }) => ({
          tabBarButton: (props) => (
            <TabAddButton {...props} navigation={navigation} />
          ),
        })}
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

export default AppTabRoute;

/* 
ddddddddddddddddddddd = 21
oooooooooo = 10
nnnnnnnnnnnnnnnnnnn = 19

ddddddddddddddddddddd = 21
oooooooooo = 10
nnnnnnnnnnnnnnnnnnn = 19
*/
