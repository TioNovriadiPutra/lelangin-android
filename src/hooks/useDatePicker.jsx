import { useController } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { datePickerDataState, showDatePickerState } from "../store/formState";

const useDatePicker = (inputData, control) => {
  const setShowDatePicker = useSetRecoilState(showDatePickerState);
  const setDatePickerData = useSetRecoilState(datePickerDataState);

  const { field } = useController({
    name: inputData.name,
    control,
  });

  const onHandleShow = () => {
    setShowDatePicker(true);
    setDatePickerData({
      current: field.value,
      onPick: (date) => {
        field.onChange(date);
      },
    });
  };

  return {
    field,
    onHandleShow,
  };
};

export default useDatePicker;
