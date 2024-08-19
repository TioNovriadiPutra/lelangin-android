import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const FloatingBox = () => {
  return (
    <LinearGradient
      colors={["#FFCC9C", "#DE4D39"]}
      start={{ x: -0.1, y: 0.2 }}
      style={styles.container}
    >
      <Text style={styles.quote}>Bid, Win,{"\n"}Thrill, Repeat</Text>

      <Image
        source={require("@assets/images/vector.png")}
        style={styles.vector}
      />
    </LinearGradient>
  );
};

export default FloatingBox;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 14,
    marginHorizontal: 14,
    padding: 14,
    justifyContent: "flex-end",
    height: 140,
    borderRadius: 14,
  },
  quote: {
    fontFamily: fonts.MerrBold,
    fontSize: 20,
    color: colors.White,
  },
  vector: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
