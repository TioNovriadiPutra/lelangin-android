import React from "react";
import MainContainer from "@containers/MainContainer";
import { AppForm } from "@components/organism";
import { editAddressForm } from "@constants/form";

const AccountEditAddress = () => {
  return (
    <MainContainer>
      <AppForm formData={editAddressForm} />
    </MainContainer>
  );
};

export default AccountEditAddress;
