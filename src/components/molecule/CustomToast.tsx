import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useToast from "@hooks/useToast";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import Animated from "react-native-reanimated";

const CustomToast = () => {
  const { toast, toastAnimatedStyle } = useToast();

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor:
            toast.type === "success" ? colors.SuccessLight : colors.DangerLight,
        },
        toastAnimatedStyle,
      ]}
    >
      <View
        style={[
          styles.circle,
          {
            backgroundColor:
              toast.type === "success" ? colors.Success : colors.Danger,
          },
        ]}
      >
        <Image
          source={
            toast.type === "success"
              ? require("@assets/images/success.png")
              : require("@assets/images/failed.png")
          }
        />
      </View>

      <Text style={styles.message}>{toast.message}</Text>

      <View style={styles.dummy} />
    </Animated.View>
  );
};

export default CustomToast;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 999,
    bottom: 72,
    left: 24,
    right: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 24,
    borderRadius: 14,
  },
  circle: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  message: {
    fontFamily: fonts.Medium,
    fontSize: 13,
    color: colors.Dark,
  },
  dummy: {
    width: 24,
  },
});
