import { useRecoilValue } from "recoil";
import { validationErrorState } from "../store/formState";

const useCustomForm = () => {
  const validationError = useRecoilValue(validationErrorState);

  const onHandleValidation = (name) => {
    return validationError
      ? validationError.find((error) => error.field === name)
      : null;
  };

  return {
    onHandleValidation,
  };
};

export default useCustomForm;
