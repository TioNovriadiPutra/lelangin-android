import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "../../containers/ModalContainer";
import useConfirmationModal from "../../hooks/useConfirmationModal";
import ConfirmationBox from "../molecule/ConfirmationBox";

const ConfirmationModal = () => {
  const { showConfirmationModal, confirmationData, onHandleClose } =
    useConfirmationModal();

  return (
    <ModalContainer visible={showConfirmationModal} modalStyles={styles.modal}>
      {confirmationData && (
        <ConfirmationBox
          confirmationData={confirmationData}
          onClose={onHandleClose}
        />
      )}
    </ModalContainer>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
