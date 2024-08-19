import { StyleSheet, Text, ViewStyle } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import { LelanginButton } from "@components/atom";
import { Dayjs } from "dayjs";

type Props = {
  animatedStyle: ViewStyle;
  tempDate?: DateType | Dayjs;
  type: "date" | "time";
  onPick: (params: { date: DateType }) => void;
  onSubmit: () => void;
};

const DateModalBox = ({
  animatedStyle,
  tempDate,
  type,
  onPick,
  onSubmit,
}: Props) => {
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.title}>Pilih Tanggal</Text>

      <DateTimePicker
        mode="single"
        timePicker={type === "time"}
        date={tempDate}
        onChange={onPick}
        headerTextStyle={styles.calendarHeader}
        weekDaysTextStyle={styles.calenderBody}
        calendarTextStyle={styles.calenderBody}
        selectedItemColor={colors.Accent}
      />

      <LelanginButton
        buttonData={{
          label: "Pilih",
          color: colors.Accent,
        }}
        buttonStyles={styles.button}
        onPress={onSubmit}
      />
    </Animated.View>
  );
};

export default DateModalBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingBottom: 14,
    paddingTop: 20,
    gap: 14,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.Black,
    textAlign: "center",
  },
  button: {
    width: "90%",
  },
  calendarHeader: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
  },
  calenderBody: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
  },
});
