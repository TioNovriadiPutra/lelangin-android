import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";
import LelanginBackButton from "../atom/LelanginBackButton";
import AppHeaderButton from "../atom/AppHeaderButton";

const AppHeader = ({ headerData, onSubmit }) => {
  return (
    <View style={styles.container}>
      {headerData.withBack && <LelanginBackButton />}

      <Text style={styles.title}>{headerData.title}</Text>

      {headerData.buttonData && (
        <AppHeaderButton
          buttonData={headerData.buttonData}
          onSubmit={onSubmit}
        />
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 24,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Black,
    textAlign: "center",
    flex: 1,
  },
});
