import { StyleSheet } from "react-native";
import React from "react";
import useDropdownModal from "../../hooks/useDropdownModal";
import ModalContainer from "../../containers/ModalContainer";
import Animated from "react-native-reanimated";
import { colors } from "../../themes/colors";
import DropdownList from "../molecule/DropdownList";

const DropdownModal = () => {
  const { showDropdown, dropdownData, dropdownAnimatedStyle, onHandleClose } =
    useDropdownModal();

  return (
    <ModalContainer
      visible={showDropdown}
      onClose={onHandleClose}
      modalStyles={styles.modal}
    >
      <Animated.View style={[styles.container, dropdownAnimatedStyle]}>
        {dropdownData && (
          <DropdownList dropdownData={dropdownData} onClose={onHandleClose} />
        )}
      </Animated.View>
    </ModalContainer>
  );
};

export default DropdownModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: colors.White,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingTop: 52,
  },
});
