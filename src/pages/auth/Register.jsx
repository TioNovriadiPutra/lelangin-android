import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "../../containers/MainContainer";
import AuthForm from "../../components/organism/AuthForm";
import { registerForm } from "../../utils/constant/form";
import useAuthController from "../../controllers/authController";

const Register = () => {
  const { register } = useAuthController();

  return (
    <MainContainer>
      <AuthForm
        formData={registerForm}
        containerStyles={styles.form}
        onSubmit={register}
      />
    </MainContainer>
  );
};

export default Register;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginTop: 61,
  },
});
