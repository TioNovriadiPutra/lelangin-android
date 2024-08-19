import React from "react";
import MainContainer from "@containers/MainContainer";
import { AppForm } from "@components/organism";
import { editAccountForm } from "@constants/form";

const AccountEdit = () => {
  return (
    <MainContainer>
      <AppForm formData={editAccountForm} />
    </MainContainer>
  );
};

export default AccountEdit;
