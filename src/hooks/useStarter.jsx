import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authTokenState, isLoggedInSelector } from "../store/authState";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useStarter = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  const setAuthToken = useSetRecoilState(authTokenState);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const handleIsLoggedIn = async () => {
    const token = await AsyncStorage.getItem("@authToken");

    if (token) {
      setAuthToken(token);
    }
  };

  useEffect(() => {
    handleIsLoggedIn();
  }, []);

  return {
    isLoggedIn,
    fontsLoaded,
  };
};

export default useStarter;
