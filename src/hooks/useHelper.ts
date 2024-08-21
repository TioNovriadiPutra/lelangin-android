import AsyncStorage from "@react-native-async-storage/async-storage";
import { authSelector } from "@store/authState";
import { validationErrorState } from "@store/formState";
import { bidModalSelector, isLoadingState } from "@store/pageState";
import { toastSelector } from "@store/toastState";
import { useRecoilState, useSetRecoilState } from "recoil";

const useHelper = () => {
  const [auth, setAuth] = useRecoilState(authSelector);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setValidationError = useSetRecoilState(validationErrorState);
  const setToast = useSetRecoilState(toastSelector);
  const setBidModal = useSetRecoilState(bidModalSelector);

  const onMutate = () => {
    setIsLoading(true);
    setValidationError(null);
  };

  const onSuccess = (message: string) => {
    setToast({ show: true, type: "success", message });
  };

  const onError = (error: ApiErrorResponse) => {
    if (error.error.status === 422) {
      setValidationError(error.error.message as ValidationError[]);
    } else if (error.error.status === 401) {
      setAuth({ token: null, userId: null });
      AsyncStorage.removeItem("@token");
      AsyncStorage.removeItem("@userId");
    } else {
      setToast({
        show: true,
        type: "failed",
        message: error.error.message as string,
      });
      setBidModal({ show: false, data: null });
    }
  };

  const onSettled = () => {
    setIsLoading(false);
  };

  return {
    auth,
    setAuth,
    onMutate,
    onSuccess,
    onError,
    onSettled,
  };
};

export default useHelper;
