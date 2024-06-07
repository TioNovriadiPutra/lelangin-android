import { useRecoilState } from "recoil";
import { datePickerDataState, showDatePickerState } from "../store/formState";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const useDatePickerModal = () => {
  const [showDatePicker, setShowDatePicker] =
    useRecoilState(showDatePickerState);
  const [datePickerData, setDatePickerData] =
    useRecoilState(datePickerDataState);

  const datePickerAnim = useSharedValue(0);

  const datePickerAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(datePickerAnim.value, [0, 1], [0, 422]);

    return {
      height,
    };
  });

  const onHandleClose = () => {
    datePickerAnim.value = withTiming(0, { duration: 500 });

    setTimeout(() => {
      setShowDatePicker(false);
      setDatePickerData(null);
    }, 500);
  };

  useEffect(() => {
    if (showDatePicker) {
      datePickerAnim.value = withTiming(1, { duration: 500 });
    }
  }, [showDatePicker]);

  return {
    showDatePicker,
    datePickerData,
    datePickerAnimatedStyle,
    onHandleClose,
  };
};

export default useDatePickerModal;
