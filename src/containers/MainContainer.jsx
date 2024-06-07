import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../themes/colors";

const MainContainer = ({ children, withPadding = true, containerStyles }) => {
  return (
    <View
      style={[
        styles.container,
        { paddingHorizontal: withPadding ? 14 : 0 },
        containerStyles,
      ]}
    >
      {children}
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
});
