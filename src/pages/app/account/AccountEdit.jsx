import React from "react";
import MainContainer from "../../../containers/MainContainer";
import AppForm from "../../../components/organism/AppForm";
import { accountEditForm } from "../../../utils/constant/form";
import useUserController from "../../../controllers/userController";

const AccountEdit = () => {
  const { updateUserProfile } = useUserController();

  return (
    <MainContainer>
      <AppForm formData={accountEditForm} onSubmit={updateUserProfile} />
    </MainContainer>
  );
};

export default AccountEdit;
