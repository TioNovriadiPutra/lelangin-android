import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const DATA = Array.from({ length: 10 }, (_, i) => ({
  key: `${i + 1}`,
  value: i + 1,
}));

const CommunityListSkeleton = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View>
            <Skeleton width={68} height={68} circle />

            <Skeleton width={68} height={17} />
          </View>
        )}
      />
    </View>
  );
};

export default CommunityListSkeleton;

const styles = StyleSheet.create({
  list: {
    gap: 14,
    paddingLeft: 14,
  },
});
