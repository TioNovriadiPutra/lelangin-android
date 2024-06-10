import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "../../../containers/MainContainer";
import AppHeader from "../../../components/molecule/AppHeader";
import { communityHeader } from "../../../utils/constant/header";

const Community = () => {
  return (
    <MainContainer>
      <AppHeader headerData={communityHeader} />
    </MainContainer>
  );
};

export default Community;

const styles = StyleSheet.create({});
