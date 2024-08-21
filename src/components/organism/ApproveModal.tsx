import { StyleSheet } from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import { approveModalSelector } from "@store/pageState";
import ModalContainer from "@containers/ModalContainer";
import { ApproveModalBox } from "@components/molecule";

const ApproveModal = () => {
  const [approveModal, setApproveModal] = useRecoilState(approveModalSelector);

  const onHandleClose = () => {
    setApproveModal({ show: false, data: null });
  };

  return (
    <ModalContainer visible={approveModal.show} modalStyles={styles.modal}>
      {approveModal.data && (
        <ApproveModalBox
          modalData={approveModal.data}
          onClose={onHandleClose}
        />
      )}
    </ModalContainer>
  );
};

export default ApproveModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
