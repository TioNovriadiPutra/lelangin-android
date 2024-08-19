import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  opacity?: number;
};

const LelanginBackButton = ({ opacity = 1 }: Props) => {
  const nav = useNavigation();

  const onHandleBack = () => {
    nav.goBack();
  };

  return (
    <TouchableOpacity style={{ opacity }} onPress={onHandleBack}>
      <Image source={require("@assets/images/back.png")} />
    </TouchableOpacity>
  );
};

export default LelanginBackButton;
