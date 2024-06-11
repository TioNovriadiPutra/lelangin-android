import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "../../../containers/MainContainer";
import AppForm from "../../../components/organism/AppForm";
import { communityAddForm } from "../../../utils/constant/form";
import useCommunityController from "../../../controllers/communityController";

const CommunityAdd = () => {
  const { addCommunity } = useCommunityController();

  return (
    <MainContainer>
      <AppForm formData={communityAddForm} onSubmit={addCommunity} />
    </MainContainer>
  );
};

export default CommunityAdd;

const styles = StyleSheet.create({});
