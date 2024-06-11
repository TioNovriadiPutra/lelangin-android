import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LelanginBackButton = ({ buttonStyles, onBack }) => {
  let nav = null;

  if (!onBack) {
    nav = useNavigation();
  }

  const onHandleBack = () => {
    nav.goBack();
  };

  return (
    <Pressable
      style={[styles.container, buttonStyles]}
      onPress={() => {
        if (onBack) {
          onBack();
        } else {
          onHandleBack();
        }
      }}
    >
      <Image source={require("../../assets/images/back.png")} />
    </Pressable>
  );
};

export default LelanginBackButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    left: 14,
  },
});
