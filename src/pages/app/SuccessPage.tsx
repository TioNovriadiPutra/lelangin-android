import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { LelanginButton } from "@components/atom";
import { useNavigation } from "@react-navigation/native";
import { AppStackProps } from "@interfaces/navigationType";

const SuccessPage = () => {
  const nav = useNavigation<AppStackProps>();

  const onHandleNav = () => {
    nav.navigate("MainApp", {
      screen: "Home",
    });
  };

  return (
    <MainContainer containerStyles={styles.container}>
      <Image
        source={require("@assets/images/success.png")}
        style={styles.image}
      />

      <Text style={styles.desc}>
        Your payment has been processed successfully
      </Text>

      <LelanginButton
        buttonData={{
          label: "Back to Home",
          color: colors.Main,
        }}
        buttonStyles={styles.button}
        onPress={onHandleNav}
      />
    </MainContainer>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginBottom: 34,
  },
  desc: {
    width: 251,
    fontFamily: fonts.SemiBold,
    fontSize: 20,
    color: colors.Black,
    marginBottom: 100,
  },
  button: {
    width: 184,
  },
});
