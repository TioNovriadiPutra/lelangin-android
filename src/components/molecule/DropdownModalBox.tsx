import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { colors } from "@themes/colors";
import { DropdownItem } from "@components/atom";
import { DropdownModalDataType, DropdownType } from "@interfaces/formInterface";

type Props = {
  animatedStyle: ViewStyle;
  dropdownData: DropdownModalDataType;
  onPick: (item: DropdownType) => void;
};

const DropdownModalBox = ({ animatedStyle, dropdownData, onPick }: Props) => {
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ScrollView contentContainerStyle={styles.list}>
        {dropdownData.items.map((item: DropdownType, index: number) => (
          <DropdownItem
            key={index.toString()}
            itemData={item}
            active={
              dropdownData.current
                ? dropdownData.current.label === item.label
                : false
            }
            onPick={onPick}
          />
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default DropdownModalBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    padding: 14,
  },
  list: {
    paddingTop: 38,
    gap: 14,
  },
});
