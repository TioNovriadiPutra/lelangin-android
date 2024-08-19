import useHelper from "@hooks/useHelper";
import { AuthStackProps } from "@interfaces/navigationType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { login, logout, register } from "@services/authService";
import { useMutation } from "@tanstack/react-query";

const useAuthModel = () => {
  const nav = useNavigation<AuthStackProps>();

  const { auth, setAuth, onMutate, onSuccess, onError, onSettled } =
    useHelper();

  const useLoginMutation = () =>
    useMutation({
      mutationFn: login,
      onMutate,
      onSuccess: (response) => {
        onSuccess(response.message);
        setAuth({
          token: response.data.token.token,
          userId: response.data.userId,
        });
        AsyncStorage.setItem("@token", response.data.token.token);
        AsyncStorage.setItem("@userId", JSON.stringify(response.data.userId));
      },
      onError,
      onSettled,
    });

  const useRegisterMutation = () =>
    useMutation({
      mutationFn: register,
      onMutate,
      onSuccess: (response) => {
        onSuccess(response.message);
        nav.navigate("Login");
      },
      onError,
      onSettled,
    });

  const useLogoutMutation = () =>
    useMutation({
      mutationFn: () => logout(auth.token),
      onMutate,
      onSuccess: (response) => {
        onSuccess(response.message);
        setAuth({
          token: null,
          userId: null,
        });
        AsyncStorage.removeItem("@token");
        AsyncStorage.removeItem("@userId");
      },
      onError,
      onSettled,
    });

  return {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
  };
};

export default useAuthModel;
