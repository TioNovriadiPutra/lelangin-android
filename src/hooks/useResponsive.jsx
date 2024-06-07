import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isMobileDevice = useMediaQuery({
    maxWidth: 450,
  });

  return {
    isMobileDevice,
  };
};

export default useResponsive;
