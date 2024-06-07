import { useRecoilState } from "recoil";
import {
  confirmationDataState,
  showConfirmationModalState,
} from "../store/pageState";

const useConfirmationModal = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useRecoilState(
    showConfirmationModalState
  );
  const [confirmationData, setConfirmationData] = useRecoilState(
    confirmationDataState
  );

  const onHandleClose = () => {
    setShowConfirmationModal(false);
    setConfirmationData(null);
  };

  return {
    showConfirmationModal,
    confirmationData,
    onHandleClose,
  };
};

export default useConfirmationModal;
