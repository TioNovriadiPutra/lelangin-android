import React from "react";
import { AuthStack } from "../utils/constant/navigation";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AuthRoute = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
