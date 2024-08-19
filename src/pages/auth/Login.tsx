import { StyleSheet, Image } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import { loginForm } from "@constants/form";
import { AuthForm } from "@components/organism";
import useAuthController from "@controllers/authController";

const Login = () => {
  const { loginService } = useAuthController();

  return (
    <MainContainer withPadding containerStyles={styles.container}>
      <Image
        source={require("@assets/images/loginVector.png")}
        style={styles.vector}
      />

      <AuthForm formData={loginForm} onSubmit={loginService} />
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
