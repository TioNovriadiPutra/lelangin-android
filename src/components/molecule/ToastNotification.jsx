import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useToast from "../../hooks/useToast";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";
import Animated from "react-native-reanimated";

const ToastNotification = () => {
  const { toastType, toastMessage, toastAnimatedStyle } = useToast();

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor:
            toastType === "success" ? colors.SuccessLight : colors.DangerLight,
        },
        toastAnimatedStyle,
      ]}
    >
      <View
        style={[
          styles.circle,
          {
            backgroundColor:
              toastType === "success" ? colors.Success : colors.Danger,
          },
        ]}
      >
        <Image
          source={
            toastType === "success"
              ? require("../../assets/images/success.png")
              : require("../../assets/images/failed.png")
          }
        />
      </View>

      <Text style={styles.message}>{toastMessage}</Text>
    </Animated.View>
  );
};

export default ToastNotification;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 24,
    right: 24,
    paddingVertical: 14,
    borderRadius: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  message: {
    fontFamily: fonts.Medium,
    fontSize: 13,
    color: colors.DarkGrey,
    textAlign: "center",
    flex: 1,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
