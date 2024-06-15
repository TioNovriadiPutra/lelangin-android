import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { dummyData } from "../../utils/constant/page";
import { Skeleton } from "@rneui/themed";

const AuctionListSkeleton = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dummyData}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Skeleton width={138} height={138} style={styles.image} />

            <View style={styles.descContainer}>
              <View style={styles.box}>
                <Skeleton width={86} height={21} />

                <Skeleton width="100%" height={42} />
              </View>

              <View style={styles.box}>
                <Skeleton width={78} height={21} />

                <Skeleton width={109} height={42} />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AuctionListSkeleton;

const styles = StyleSheet.create({
  list: {
    gap: 14,
    paddingHorizontal: 14,
    paddingBottom: 74,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    borderRadius: 14,
  },
  descContainer: {
    flex: 1,
    gap: 12,
  },
  box: {
    gap: 4,
  },
});
