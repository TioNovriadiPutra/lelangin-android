import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../themes/colors";
import { fonts } from "../themes/fonts";

const ErrorPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Your Device Not Supported. Use Mobile Phone
      </Text>
    </View>
  );
};

export default ErrorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: fonts.SemiBold,
    fontSize: 20,
    color: colors.Black,
  },
});
