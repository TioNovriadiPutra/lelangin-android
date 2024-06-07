import { Image, StyleSheet } from "react-native";
import React from "react";
import useDatePickerModal from "../../hooks/useDatePickerModal";
import ModalContainer from "../../containers/ModalContainer";
import Animated from "react-native-reanimated";
import { colors } from "../../themes/colors";
import DateTimePicker from "react-native-ui-datepicker";
import { fonts } from "../../themes/fonts";

const DatePickerModal = () => {
  const {
    showDatePicker,
    datePickerData,
    datePickerAnimatedStyle,
    onHandleClose,
  } = useDatePickerModal();

  return (
    <ModalContainer
      visible={showDatePicker}
      modalStyles={styles.modal}
      onClose={onHandleClose}
    >
      <Animated.View style={[styles.container, datePickerAnimatedStyle]}>
        {datePickerData && (
          <DateTimePicker
            mode="single"
            date={datePickerData.current}
            onChange={(params) => {
              datePickerData.onPick(params.date);
              onHandleClose();
            }}
            buttonNextIcon={
              <Image source={require("../../assets/images/rightArrow.png")} />
            }
            buttonPrevIcon={
              <Image source={require("../../assets/images/leftArrow.png")} />
            }
            headerButtonsPosition="right"
            headerTextStyle={{
              fontFamily: fonts.Medium,
              fontSize: 14,
              color: colors.Black,
            }}
            calendarTextStyle={{
              fontFamily: fonts.Regular,
              fontSize: 14,
              color: colors.Black,
            }}
            weekDaysTextStyle={{
              fontFamily: fonts.Regular,
              fontSize: 14,
              color: colors.Black,
            }}
            selectedItemColor={colors.Accent}
          />
        )}
      </Animated.View>
    </ModalContainer>
  );
};

export default DatePickerModal;

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
