import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.Accent} />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    padding: 25,
    borderRadius: 20,
  },
});
