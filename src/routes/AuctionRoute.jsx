import AuctionAdd from "../pages/app/auction/AuctionAdd";
import { AppStack } from "../utils/constant/navigation";

const AuctionRoute = () => {
  return (
    <AppStack.Navigator initialRouteName="AuctionAdd">
      <AppStack.Screen
        name="AuctionAdd"
        component={AuctionAdd}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default AuctionRoute;
