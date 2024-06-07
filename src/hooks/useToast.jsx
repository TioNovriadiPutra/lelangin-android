import { useRecoilState } from "recoil";
import {
  showToastState,
  toastMessageState,
  toastTypeState,
} from "../store/toastState";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const useToast = () => {
  const [showToast, setShowToast] = useRecoilState(showToastState);
  const [toastType, setToastType] = useRecoilState(toastTypeState);
  const [toastMessage, setToastMessage] = useRecoilState(toastMessageState);

  const toastAnim = useSharedValue(0);

  const toastAnimatedStyle = useAnimatedStyle(() => {
    const bottom = interpolate(toastAnim.value, [0, 1], [-72, 72]);

    return {
      bottom,
    };
  });

  const handleShow = () => {
    toastAnim.value = withSequence(
      withTiming(1, { duration: 500 }),
      withDelay(2000, withTiming(0, { duration: 500 }))
    );

    setTimeout(() => {
      setShowToast(false);
      setToastType(null);
      setToastMessage("Default Message");
    }, 3000);
  };

  useEffect(() => {
    if (showToast) {
      handleShow();
    }
  }, [showToast]);

  return {
    toastType,
    toastMessage,
    toastAnimatedStyle,
  };
};

export default useToast;
