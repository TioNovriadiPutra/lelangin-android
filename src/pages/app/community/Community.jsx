import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "../../../containers/MainContainer";
import AppHeader from "../../../components/molecule/AppHeader";
import { communityHeader } from "../../../utils/constant/header";
import CommunityList from "../../../components/molecule/CommunityList";
import CommunityListSkeleton from "../../../components/skeleton/CommunityListSkeleton";
import useCommunityController from "../../../controllers/communityController";
import AuctionList from "../../../components/molecule/AuctionList";
import AuctionListSkeleton from "../../../components/skeleton/AuctionListSkeleton";

const Community = () => {
  const { useGetCommunitiesQuery } = useCommunityController();

  const { communityData, isLoading } = useGetCommunitiesQuery();

  return (
    <MainContainer withPadding={false} containerStyles={styles.container}>
      <AppHeader headerData={communityHeader} />

      {isLoading ? (
        <CommunityListSkeleton />
      ) : (
        <CommunityList listData={communityData} />
      )}

      {isLoading ? <AuctionListSkeleton /> : <AuctionList />}
    </MainContainer>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
});
