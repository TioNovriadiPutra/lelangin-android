import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { colors } from "../themes/colors";

const ModalContainer = ({ children, visible, modalStyles, onClose }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={[styles.backdrop, modalStyles]}>
        {onClose && (
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.close} />
          </TouchableWithoutFeedback>
        )}

        {children}
      </View>
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.Modal,
  },
  close: {
    flex: 1,
  },
});
