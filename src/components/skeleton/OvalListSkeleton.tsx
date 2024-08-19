import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const OvalListSkeleton = () => {
  const data = Array.from({ length: 10 }, (_, index) => index);

  return (
    <View style={{ overflow: "hidden" }}>
      <ScrollView horizontal contentContainerStyle={styles.list}>
        {data.map((_, index) => (
          <Skeleton
            key={index.toString()}
            width={56}
            height={40}
            style={styles.content}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default OvalListSkeleton;

const styles = StyleSheet.create({
  content: {
    borderRadius: 14,
  },
  list: {
    paddingHorizontal: 14,
    gap: 12,
  },
});
