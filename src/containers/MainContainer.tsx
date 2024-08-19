import { StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { colors } from "@themes/colors";

type Props = {
  children: ReactNode;
  containerStyles?: ViewStyle;
  withPadding?: boolean;
};

const MainContainer = ({
  children,
  containerStyles,
  withPadding = false,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        containerStyles,
        { paddingHorizontal: withPadding ? 14 : 0 },
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
    paddingHorizontal: 14,
  },
});
