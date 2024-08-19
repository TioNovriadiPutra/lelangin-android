import React from "react";
import MainContainer from "@containers/MainContainer";
import { AuthForm } from "@components/organism";
import { registerForm } from "@constants/form";
import useAuthController from "@controllers/authController";

const Register = () => {
  const { registerService } = useAuthController();

  return (
    <MainContainer withPadding>
      <AuthForm formData={registerForm} onSubmit={registerService} />
    </MainContainer>
  );
};

export default Register;
