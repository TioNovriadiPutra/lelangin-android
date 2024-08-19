import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  LelanginBackButton,
  LelanginButton,
  LelanginSearchButton,
} from "@components/atom";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { AppHeaderButton } from "@interfaces/pageInterface";

type Props = {
  type?: "normal" | "switch";
  title: string;
  withBack: boolean;
  buttonData?: AppHeaderButton;
  onSubmit?: () => void;
};

const AppHeader = ({
  type = "normal",
  title,
  withBack,
  buttonData,
  onSubmit,
}: Props) => {
  return (
    <View style={styles.container}>
      <LelanginBackButton opacity={withBack ? 1 : 0} />

      <Text style={styles.title}>{title}</Text>

      {buttonData ? (
        buttonData.type === "submit" ? (
          <LelanginButton
            type="text"
            buttonData={{
              label: buttonData.label,
              color: buttonData.color,
            }}
            onPress={onSubmit}
          />
        ) : (
          <LelanginSearchButton />
        )
      ) : (
        <LelanginBackButton opacity={0} />
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Black,
  },
});
