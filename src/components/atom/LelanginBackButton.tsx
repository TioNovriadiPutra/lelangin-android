import { Image, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  opacity?: number;
  buttonStyles?: ViewStyle;
  onBack?: () => void;
};

const LelanginBackButton = ({ opacity = 1, buttonStyles, onBack }: Props) => {
  const nav = useNavigation();

  const onHandleBack = () => {
    nav.goBack();
  };

  return (
    <TouchableOpacity
      style={[{ opacity }, buttonStyles]}
      onPress={() => {
        if (onBack) {
          onBack();
        } else {
          onHandleBack();
        }
      }}
    >
      <Image source={require("@assets/images/back.png")} />
    </TouchableOpacity>
  );
};

export default LelanginBackButton;
