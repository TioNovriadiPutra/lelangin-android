import React from "react";
import MainContainer from "@containers/MainContainer";
import { AppHeader, FloatingBox, OvalList } from "@components/molecule";
import useCategoryController from "@controllers/categoryController";
import OvalListSkeleton from "@components/skeleton/OvalListSkeleton";
import { StyleSheet, Text } from "react-native";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useAuctionController from "@controllers/auctionController";
import { AuctionListSkeleton } from "@components/skeleton";
import { AuctionList } from "@components/organism";

const Home = () => {
  const { useGetCategoriesDropdownService } = useCategoryController();
  const { useGetAuctionsByCategoryService } = useAuctionController();

  const categories = useGetCategoriesDropdownService();
  const auctions = useGetAuctionsByCategoryService();

  return (
    <MainContainer>
      <AppHeader
        title=""
        withBack={false}
        buttonData={{
          type: "search",
        }}
      />

      <FloatingBox />

      <Text style={styles.title}>Featured Item</Text>

      {categories.isLoading ? (
        <OvalListSkeleton />
      ) : (
        <OvalList listData={categories.finalData} />
      )}

      {auctions.isLoading ? (
        <AuctionListSkeleton />
      ) : (
        <AuctionList listData={auctions.finalData} />
      )}
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.Medium,
    fontSize: 20,
    color: colors.Title,
    marginTop: 14,
    marginBottom: 8,
    marginHorizontal: 14,
  },
});
