import { CommonActions, useFocusEffect } from "@react-navigation/native";
import Auction from "../pages/app/auction/Auction";
import { AppStack } from "../utils/constant/navigation";
import { useCallback } from "react";

const AuctionRoute = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Auction" }],
        })
      );
    }, [navigation])
  );

  return (
    <AppStack.Navigator initialRouteName="Auction">
      <AppStack.Screen
        name="Auction"
        component={Auction}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default AuctionRoute;
