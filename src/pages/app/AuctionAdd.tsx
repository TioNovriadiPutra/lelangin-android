import React from "react";
import MainContainer from "@containers/MainContainer";
import { AppForm } from "@components/organism";
import { addAuctionForm } from "@constants/form";

const AuctionAdd = () => {
  return (
    <MainContainer>
      <AppForm formData={addAuctionForm} />
    </MainContainer>
  );
};

export default AuctionAdd;
