import AccountEdit from "../pages/app/account/AccountEdit";
import AccountEditAddress from "../pages/app/account/AccountEditAddress";
import { AppStack } from "../utils/constant/navigation";

const AccountRoute = () => {
  return (
    <AppStack.Navigator>
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
