import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { API_ENDPOINT } from "@configs/api";
import { colors } from "@themes/colors";

type Props = {
  galleriesData: string[];
};

const WIDTH = Dimensions.get("window").width;

const DetailCarousel = ({ galleriesData }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {galleriesData.map((item, index) => (
          <Image
            key={index.toString()}
            source={{
              uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getAuctionImage}/${item}`,
            }}
            style={styles.image}
          />
        ))}
      </ScrollView>

      <View style={styles.dotContainer}>
        {galleriesData.map((_, index) => (
          <View
            key={index.toString()}
            style={[
              styles.dot,
              {
                backgroundColor:
                  activeIndex === index ? colors.Accent : colors.Dot,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default DetailCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Placeholder,
  },
  image: {
    width: WIDTH,
    height: "100%",
    resizeMode: "contain",
  },
  dotContainer: {
    position: "absolute",
    gap: 3,
    flexDirection: "row",
    bottom: 14,
    alignSelf: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 50,
  },
});
