import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { colors } from "@themes/colors";

type Props = {
  children: ReactNode;
  visible: boolean;
  onClose?: () => void;
  modalStyles?: ViewStyle;
};

const ModalContainer = ({ children, visible, onClose, modalStyles }: Props) => {
  return (
    <Modal visible={visible} transparent>
      <View style={[styles.container, modalStyles]}>
        {onClose && (
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>
        )}

        {children}
      </View>
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Modal,
  },
  backdrop: {
    flex: 1,
  },
});
