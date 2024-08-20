import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const data = Array.from({ length: 10 }, (_, index) => index);

const AuctionListSkeleton = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        {data.map((_, index) => (
          <View key={index.toString()} style={styles.content}>
            <Skeleton width={138} height={138} style={styles.image} />

            <View style={styles.description}>
              <View style={styles.titleContainer}>
                <Skeleton width={86} height={21} />

                <Skeleton width={182} height={42} />
              </View>

              <View style={styles.titleContainer}>
                <Skeleton width={78} height={21} />

                <Skeleton width={109} height={21} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AuctionListSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  list: {
    gap: 14,
    paddingBottom: 72,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    borderRadius: 14,
  },
  description: {
    flex: 1,
    gap: 12,
  },
  titleContainer: {
    gap: 4,
  },
});
