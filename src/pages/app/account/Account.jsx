import React from "react";
import MainContainer from "../../../containers/MainContainer";
import AccountHeader from "../../../components/molecule/AccountHeader";
import AccountMenu from "../../../components/organism/AccountMenu";
import useUserController from "../../../controllers/userController";
import AccountHeaderSkeleton from "../../../components/skeleton/AccountHeaderSkeleton";

const Account = () => {
  const { useGetUserProfileQuery } = useUserController();

  const { profileData, isLoading } = useGetUserProfileQuery();

  return (
    <MainContainer>
      {isLoading ? (
        <AccountHeaderSkeleton />
      ) : (
        <AccountHeader profileData={profileData} />
      )}

      <AccountMenu />
    </MainContainer>
  );
};

export default Account;
