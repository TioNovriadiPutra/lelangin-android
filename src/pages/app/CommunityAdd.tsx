import React from "react";
import MainContainer from "@containers/MainContainer";
import { AppForm } from "@components/organism";
import { addCommunityForm } from "@constants/form";

const CommunityAdd = () => {
  return (
    <MainContainer>
      <AppForm formData={addCommunityForm} />
    </MainContainer>
  );
};

export default CommunityAdd;
