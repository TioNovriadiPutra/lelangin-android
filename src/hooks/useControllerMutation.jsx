import { useRecoilState, useSetRecoilState } from "recoil";
import { toastSelector } from "../store/toastState";
import { isLoadingState } from "../store/pageState";
import { validationErrorState } from "../store/formState";
import { authTokenState } from "../store/authState";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useControllerMutation = () => {
  const [authToken, setAuthToken] = useRecoilState(authTokenState);
  const setToast = useSetRecoilState(toastSelector);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setValidationError = useSetRecoilState(validationErrorState);

  const handleMutate = () => {
    setIsLoading(true);
    setValidationError(null);
  };

  const handleSuccess = (message) => {
    setToast({ type: "success", message });
  };

  const handleError = (error) => {
    if (error.errors) {
      setAuthToken(null);
      AsyncStorage.removeItem("@authToken");
      setToast({ type: "failed", message: "Token expired!" });
    } else if (error.error.status === 422) {
      setValidationError(error.error.message);
    } else {
      setToast({ type: "failed", message: error.error.message });
    }
  };

  const handleSettled = () => {
    setIsLoading(false);
  };

  return {
    authToken,
    handleMutate,
    handleSuccess,
    handleError,
    handleSettled,
  };
};

export default useControllerMutation;
