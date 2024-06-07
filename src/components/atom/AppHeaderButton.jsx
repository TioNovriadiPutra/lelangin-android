import { StyleSheet, View } from "react-native";
import React from "react";
import LelanginTextButton from "./LelanginTextButton";

const AppHeaderButton = ({ buttonData, onSubmit }) => {
  return (
    <View style={styles.container}>
      {buttonData.type === "text" && (
        <LelanginTextButton label={buttonData.label} onPress={onSubmit} />
      )}
    </View>
  );
};

export default AppHeaderButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    right: 0,
  },
});
