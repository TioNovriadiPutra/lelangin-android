import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import { DropdownModalBox } from "@components/molecule";
import useDropdownModal from "@hooks/useDropdownModal";

const DropdownModal = () => {
  const { dropdownModal, dropdownAnimatedStyle, onHandleClose, onHandlePick } =
    useDropdownModal();

  return (
    <ModalContainer
      visible={dropdownModal.show}
      onClose={onHandleClose}
      modalStyles={styles.modal}
    >
      {dropdownModal.data && (
        <DropdownModalBox
          animatedStyle={dropdownAnimatedStyle}
          dropdownData={dropdownModal.data}
          onPick={onHandlePick}
        />
      )}
    </ModalContainer>
  );
};

export default DropdownModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
  },
});
