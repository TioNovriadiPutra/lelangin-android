import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  LelanginBackButton,
  LelanginButton,
  LelanginSearchButton,
  SwitchButton,
} from "@components/atom";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { AppHeaderButton } from "@interfaces/pageInterface";
import { useRecoilState } from "recoil";
import { currentSwitchState } from "@store/pageState";

type Props = {
  type?: "normal" | "switch";
  title?: string;
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
  const [current, setCurrent] = useRecoilState(currentSwitchState);

  if (type === "switch") {
    return (
      <View style={[styles.container, styles.containerSwitch]}>
        <SwitchButton
          label="Biddings"
          active={current === 0}
          onPress={() => setCurrent(0)}
        />

        <SwitchButton
          label="My Auctions"
          active={current === 1}
          onPress={() => setCurrent(1)}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, styles.containerNormal]}>
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
  },
  containerNormal: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  containerSwitch: {
    marginBottom: 14,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Black,
  },
});
