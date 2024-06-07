import { useController } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { dropdownDataState, showDropdownState } from "../store/formState";

const useDropdown = (inputData, control) => {
  const setShowDropdown = useSetRecoilState(showDropdownState);
  const setDropdownData = useSetRecoilState(dropdownDataState);

  const { field } = useController({
    name: inputData.name,
    control,
  });

  const onHandleShow = () => {
    setShowDropdown(true);
    setDropdownData({
      current: field.value,
      items: inputData.items,
      onPick: (item) => {
        field.onChange(item);
      },
    });
  };

  return {
    field,
    onHandleShow,
  };
};

export default useDropdown;
