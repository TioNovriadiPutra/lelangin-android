import { CommonActions, useFocusEffect } from "@react-navigation/native";
import Community from "../pages/app/community/Community";
import CommunityAdd from "../pages/app/community/CommunityAdd";
import { AppStack } from "../utils/constant/navigation";
import { useCallback } from "react";
import CommunitySearch from "../pages/app/community/CommunitySearch";

const CommunityRoute = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Community" }],
        })
      );
    }, [navigation])
  );

  return (
    <AppStack.Navigator initialRouteName="Community">
      <AppStack.Screen
        name="Community"
        component={Community}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="CommunityAdd"
        component={CommunityAdd}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="CommunitySearch"
        component={CommunitySearch}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default CommunityRoute;
