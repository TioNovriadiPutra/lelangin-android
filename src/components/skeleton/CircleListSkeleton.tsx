import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const CircleListSkeleton = () => {
  const data = Array.from({ length: 10 }, (_, index) => index);

  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        {data.map((_, index) => (
          <Skeleton key={index.toString()} width={68} height={68} circle />
        ))}
      </ScrollView>
    </View>
  );
};

export default CircleListSkeleton;

const styles = StyleSheet.create({
  container: {
    gap: 14,
    paddingHorizontal: 14,
    marginVertical: 14,
  },
});
