import { CommonActions, useFocusEffect } from "@react-navigation/native";
import Account from "../pages/app/account/Account";
import AccountEdit from "../pages/app/account/AccountEdit";
import AccountEditAddress from "../pages/app/account/AccountEditAddress";
import { AppStack } from "../utils/constant/navigation";
import { useCallback } from "react";

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

export default AccountRoute;
