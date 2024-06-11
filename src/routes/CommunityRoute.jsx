import CommunityAdd from "../pages/app/community/CommunityAdd";
import { AppStack } from "../utils/constant/navigation";
import CommunitySearch from "../pages/app/community/CommunitySearch";

const CommunityRoute = () => {
  return (
    <AppStack.Navigator>
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
