import useAuthModel from "@models/authModel";

const useAuthController = () => {
  const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
    useAuthModel();

  const loginMutation = useLoginMutation();

  const registerMutation = useRegisterMutation();

  const logoutMutation = useLogoutMutation();

  return {
    loginService: (data: any) => loginMutation.mutate(data),
    registerService: (data: any) => registerMutation.mutateAsync(data),
    logoutService: () => logoutMutation.mutate(),
  };
};

export default useAuthController;
