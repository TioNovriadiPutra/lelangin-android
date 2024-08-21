import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import { useRecoilState } from "recoil";
import { shippingModalSelector } from "@store/pageState";
import { ShippingModalBox } from "@components/molecule";

const ShippingModal = () => {
  const [shipping, setShipping] = useRecoilState(shippingModalSelector);

  const onHandleClose = () => {
    setShipping({ show: false, data: null });
  };

  return (
    <ModalContainer visible={shipping.show} modalStyles={styles.modal}>
      {shipping.data && (
        <ShippingModalBox modalData={shipping.data} onClose={onHandleClose} />
      )}
    </ModalContainer>
  );
};

export default ShippingModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
