import { Image, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  opacity?: number;
  buttonStyles?: ViewStyle;
};

const LelanginBackButton = ({ opacity = 1, buttonStyles }: Props) => {
  const nav = useNavigation();

  const onHandleBack = () => {
    nav.goBack();
  };

  return (
    <TouchableOpacity
      style={[{ opacity }, buttonStyles]}
      onPress={onHandleBack}
    >
      <Image source={require("@assets/images/back.png")} />
    </TouchableOpacity>
  );
};

export default LelanginBackButton;
