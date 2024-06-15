import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useCountdownTimer from "../../hooks/useCountdownTimer";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

const CountdownTimer = ({ timer }) => {
  const { timeLeft } = useCountdownTimer(timer);

  return (
    <Text
      style={[
        styles.time,
        { color: timeLeft.hours < 1 ? colors.Danger : colors.Success },
      ]}
    >{`${timeLeft.hours}H ${timeLeft.minutes < 10 ? "0" : ""}${
      timeLeft.minutes
    }M ${timeLeft.seconds < 10 ? "0" : ""}${timeLeft.seconds}S`}</Text>
  );
};

export default CountdownTimer;

const styles = StyleSheet.create({
  time: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
});
