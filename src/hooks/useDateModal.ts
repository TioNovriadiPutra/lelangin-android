import { dateModalSelector } from "@store/formState";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { DateType } from "react-native-ui-datepicker";
import { useRecoilState } from "recoil";

const useDateModal = () => {
  const [dateModal, setDateModal] = useRecoilState(dateModalSelector);

  const [tempDate, setTempDate] = useState<
    DateType | string | dayjs.Dayjs | undefined
  >(undefined);

  const dateAnim = useSharedValue(0);

  const dateAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(dateAnim.value, [0, 1], [0, 472]);

    return {
      height,
    };
  });

  const entry = () => {
    dateAnim.value = withTiming(1, { duration: 500 });
  };

  const onHandleClose = () => {
    dateAnim.value = withTiming(0, { duration: 500 });

    setTimeout(() => {
      setDateModal({ show: false, data: null });
      setTempDate(undefined);
    }, 500);
  };

  const onHandlePick = (params: { date: DateType }) => {
    setTempDate(params.date);
  };

  const onHandleSubmit = () => {
    dateModal.data.onPick(tempDate);
    onHandleClose();
  };

  useEffect(() => {
    if (dateModal.show) {
      entry();
    }
  }, [dateModal]);

  return {
    dateModal,
    tempDate,
    dateAnimatedStyle,
    onHandleClose,
    onHandlePick,
    onHandleSubmit,
  };
};

export default useDateModal;
