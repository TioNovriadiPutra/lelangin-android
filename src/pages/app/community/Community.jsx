import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "../../../containers/MainContainer";
import AppHeader from "../../../components/molecule/AppHeader";
import { communityHeader } from "../../../utils/constant/header";
import CommunityList from "../../../components/molecule/CommunityList";
import CommunityListSkeleton from "../../../components/skeleton/CommunityListSkeleton";
import useCommunityController from "../../../controllers/communityController";

const Community = () => {
  const { useGetCommunitiesQuery, useGetCommunityPicQuery } =
    useCommunityController();

  const { communityData, isLoading } = useGetCommunitiesQuery();

  return (
    <MainContainer withPadding={false} containerStyles={styles.container}>
      <AppHeader headerData={communityHeader} />

      {isLoading ? (
        <CommunityListSkeleton />
      ) : (
        <CommunityList
          listData={communityData}
          fetchImage={useGetCommunityPicQuery}
        />
      )}
    </MainContainer>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
});
