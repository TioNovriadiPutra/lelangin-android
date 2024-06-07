import { useRecoilState } from "recoil";
import { dropdownDataState, showDropdownState } from "../store/formState";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const useDropdownModal = () => {
  const [showDropdown, setShowDropdown] = useRecoilState(showDropdownState);
  const [dropdownData, setDropdownData] = useRecoilState(dropdownDataState);

  const dropdownAnim = useSharedValue(0);

  const dropdownAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(dropdownAnim.value, [0, 1], [0, 442]);

    return {
      height,
    };
  });

  const onHandleClose = () => {
    dropdownAnim.value = withTiming(0, { duration: 500 });

    setTimeout(() => {
      setShowDropdown(false);
      setDropdownData(null);
    }, 500);
  };

  useEffect(() => {
    if (showDropdown) {
      dropdownAnim.value = withTiming(1, { duration: 500 });
    }
  }, [showDropdown]);

  return {
    showDropdown,
    dropdownData,
    dropdownAnimatedStyle,
    onHandleClose,
  };
};

export default useDropdownModal;
