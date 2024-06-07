import { Image, StyleSheet } from "react-native";
import React from "react";
import MainContainer from "../../containers/MainContainer";
import AuthForm from "../../components/organism/AuthForm";
import { loginForm } from "../../utils/constant/form";
import useAuthController from "../../controllers/authController";

const Login = () => {
  const { login } = useAuthController();

  return (
    <MainContainer containerStyles={styles.container}>
      <Image
        source={require("../../assets/images/loginVector.png")}
        style={styles.vector}
      />

      <AuthForm formData={loginForm} onSubmit={login} />
    </MainContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    gap: 33,
  },
  vector: {
    alignSelf: "center",
  },
});
