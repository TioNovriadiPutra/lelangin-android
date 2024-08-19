import React from "react";
import MainContainer from "@containers/MainContainer";
import { AccountInfo, AccountMenu } from "@components/molecule";
import useUserController from "@controllers/userController";
import { AccountInfoSkeleton } from "@components/skeleton";

const Account = () => {
  const { useGetUserProfileService } = useUserController();

  const { finalData, isLoading } = useGetUserProfileService();

  return (
    <MainContainer>
      {isLoading ? (
        <AccountInfoSkeleton />
      ) : (
        <AccountInfo infoData={finalData} />
      )}

      <AccountMenu />
    </MainContainer>
  );
};

export default Account;
