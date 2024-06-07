import React from "react";
import MainContainer from "../../../containers/MainContainer";
import AppForm from "../../../components/organism/AppForm";
import { accountEditAddressForm } from "../../../utils/constant/form";
import useUserController from "../../../controllers/userController";

const AccountEditAddress = () => {
  const { updateUserAddress } = useUserController();

  return (
    <MainContainer>
      <AppForm formData={accountEditAddressForm} onSubmit={updateUserAddress} />
    </MainContainer>
  );
};

export default AccountEditAddress;
