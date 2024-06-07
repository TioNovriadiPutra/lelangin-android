import { useState } from "react";
import { useController } from "react-hook-form";

const useTextInput = (inputData, control) => {
  const [showPassword, setShowPassword] = useState(false);

  const { field } = useController({
    name: inputData.name,
    control,
  });

  const onHandleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    showPassword,
    field,
    onHandleShowPassword,
  };
};

export default useTextInput;
