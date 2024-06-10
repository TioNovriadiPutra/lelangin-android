import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../themes/colors";

const LelanginSearchButton = ({ root, child }) => {
  const nav = useNavigation();

  const onHandleSearch = () => {
    nav.navigate(root, {
      screen: child,
    });
  };

  return (
    <Pressable style={styles.container} onPress={onHandleSearch}>
      <Image
        source={require("../../assets/images/search.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default LelanginSearchButton;

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.LightGrey,
  },
  icon: {
    width: 18,
    height: 18,
  },
});
