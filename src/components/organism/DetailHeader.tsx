import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DetailCarousel, Timer } from "@components/molecule";

type Props = {
  galleriesData: string[];
  timer: string;
};

const DetailHeader = ({ galleriesData, timer }: Props) => {
  return (
    <View style={styles.container}>
      <DetailCarousel galleriesData={galleriesData} />

      <Timer timer={timer} />
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  container: {
    height: 408,
  },
});
