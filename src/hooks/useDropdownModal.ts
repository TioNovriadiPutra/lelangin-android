import { dropdownModalSelector } from "@store/formState";
import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilState } from "recoil";

const useDropdownModal = () => {
  const [dropdownModal, setDropdownModal] = useRecoilState(
    dropdownModalSelector
  );

  const dropdownAnim = useSharedValue(0);

  const dropdownAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(dropdownAnim.value, [0, 1], [0, 442]);

    return {
      height,
    };
  });

  const entry = () => {
    dropdownAnim.value = withTiming(1, { duration: 500 });
  };

  const onHandleClose = () => {
    dropdownAnim.value = withTiming(0, { duration: 500 });

    setTimeout(() => {
      setDropdownModal({ show: false, data: null });
    }, 500);
  };

  const onHandlePick = (item: DropdownType) => {
    dropdownModal.data.onPick(item);
    onHandleClose();
  };

  useEffect(() => {
    if (dropdownModal.show) {
      entry();
    }
  }, [dropdownModal]);

  return {
    dropdownModal,
    dropdownAnimatedStyle,
    onHandleClose,
    onHandlePick,
  };
};

export default useDropdownModal;
