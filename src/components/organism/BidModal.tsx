import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import { useRecoilState } from "recoil";
import { bidModalSelector } from "@store/pageState";
import { BidModalBox } from "@components/molecule";

const BidModal = () => {
  const [bidModal, setBidModal] = useRecoilState(bidModalSelector);

  const onHandleClose = () => {
    setBidModal({ show: false, data: null });
  };

  return (
    <ModalContainer visible={bidModal.show} modalStyles={styles.modal}>
      {bidModal.data && (
        <BidModalBox modalData={bidModal.data} onClose={onHandleClose} />
      )}
    </ModalContainer>
  );
};

export default BidModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
