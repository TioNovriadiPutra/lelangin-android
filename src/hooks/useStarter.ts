import AsyncStorage from "@react-native-async-storage/async-storage";
import { authSelector } from "@store/authState";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ApiErrorResponse;
  }
}

const useStarter = () => {
  const [auth, setAuth] = useRecoilState(authSelector);

  const [fontsLoaded] = useFonts({
    "PlusJakartaSans-Bold": require("@assets/fonts/PlusJakartaSans-Bold.ttf"),
    "PlusJakartaSans-SemiBold": require("@assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Medium": require("@assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-Regular": require("@assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Merriweather-Bold": require("@assets/fonts/Merriweather-Bold.ttf"),
  });

  const checkIsLoggedIn = async () => {
    const token = await AsyncStorage.getItem("@token");
    const userId = await AsyncStorage.getItem("@userId");

    if (token && userId) {
      setAuth({ token, userId: JSON.parse(userId) });
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, [auth]);

  return {
    auth,
    fontsLoaded,
  };
};

export default useStarter;
