import Home from "../pages/app/home/Home";
import { AppStack } from "../utils/constant/navigation";

const HomeRoute = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default HomeRoute;
