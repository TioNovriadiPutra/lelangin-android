import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import { useRecoilValue } from "recoil";
import { isLoadingState } from "@store/pageState";
import { LoadingIndicator } from "@components/molecule";

const LoadingModal = () => {
  const isLoading = useRecoilValue(isLoadingState);

  return (
    <ModalContainer visible={isLoading} modalStyles={styles.modal}>
      <LoadingIndicator />
    </ModalContainer>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
