import { useNavigation } from "@react-navigation/native";
import useAuthController from "../controllers/authController";
import { useSetRecoilState } from "recoil";
import {
  confirmationDataState,
  showConfirmationModalState,
} from "../store/pageState";
import { logoutConfirmationData } from "../utils/constant/page";

const useAccountMenu = () => {
  const setShowConfirmationModal = useSetRecoilState(
    showConfirmationModalState
  );
  const setConfirmationData = useSetRecoilState(confirmationDataState);

  const nav = useNavigation();

  const { logout } = useAuthController();

  const onHandleNav = (destination) => {
    nav.navigate("AccountRoute", {
      screen: destination,
    });
  };

  const onHandleLogout = () => {
    setShowConfirmationModal(true);
    setConfirmationData({
      ...logoutConfirmationData,
      onConfirm: logout,
    });
  };

  return {
    onHandleNav,
    onHandleLogout,
  };
};

export default useAccountMenu;
