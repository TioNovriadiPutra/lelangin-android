import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const LelanginSearchButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require("@assets/images/search.png")} />
    </TouchableOpacity>
  );
};

export default LelanginSearchButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: colors.DarkWhite,
  },
});
