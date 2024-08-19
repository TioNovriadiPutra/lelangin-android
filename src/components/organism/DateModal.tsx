import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import useDateModal from "@hooks/useDateModal";
import { DateModalBox } from "@components/molecule";

const DateModal = () => {
  const {
    dateModal,
    tempDate,
    dateAnimatedStyle,
    onHandleClose,
    onHandlePick,
    onHandleSubmit,
  } = useDateModal();

  return (
    <ModalContainer
      visible={dateModal.show}
      onClose={onHandleClose}
      modalStyles={styles.modal}
    >
      {dateModal.data && (
        <DateModalBox
          animatedStyle={dateAnimatedStyle}
          tempDate={tempDate}
          type={dateModal.data.type}
          onPick={onHandlePick}
          onSubmit={onHandleSubmit}
        />
      )}
    </ModalContainer>
  );
};

export default DateModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
  },
});
