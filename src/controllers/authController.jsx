import { useMutation } from "react-query";
import { login, logout, register } from "../services/authService";
import useControllerMutation from "../hooks/useControllerMutation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSetRecoilState } from "recoil";
import { authTokenState } from "../store/authState";
import { useNavigation } from "@react-navigation/native";

const useAuthController = () => {
  const setAuthToken = useSetRecoilState(authTokenState);

  const nav = useNavigation();

  const { authToken, handleMutate, handleError, handleSuccess, handleSettled } =
    useControllerMutation();

  const loginMutation = useMutation(login, {
    onMutate: () => {
      handleMutate();
    },
    onSuccess: (response) => {
      AsyncStorage.setItem("@authToken", response.token.token);
      setAuthToken(response.token.token);
      handleSuccess(response.message);
    },
    onError: (error) => {
      handleError(error);
    },
    onSettled: () => {
      handleSettled();
    },
  });

  const registerMutation = useMutation(register, {
    onMutate: () => {
      handleMutate();
    },
    onSuccess: (response) => {
      handleSuccess(response.message);
      nav.navigate("Login");
    },
    onError: (error) => {
      handleError(error);
    },
    onSettled: () => {
      handleSettled();
    },
  });

  const logoutMutation = useMutation(() => logout(authToken), {
    onMutate: () => {
      handleMutate();
    },
    onSuccess: (response) => {
      AsyncStorage.removeItem("@authToken");
      setAuthToken(null);
      handleSuccess(response.message);
    },
    onError: (error) => {
      handleError(error);
    },
    onSettled: () => {
      handleSettled();
    },
  });

  return {
    login: (data) => loginMutation.mutate(data),
    register: (data) => registerMutation.mutate(data),
    logout: () => logoutMutation.mutate(),
  };
};

export default useAuthController;
