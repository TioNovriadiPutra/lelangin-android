import { useController } from "react-hook-form";
import * as DocumentPicker from "expo-document-picker";

const useProfilePicker = (inputData, control) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  const onHandlePick = async () => {
    const pickImage = await DocumentPicker.getDocumentAsync({
      type: "image/*",
    });

    if (!pickImage.canceled) {
      field.onChange({
        uri: pickImage.assets[0].uri,
        name: pickImage.assets[0].name,
        type: pickImage.assets[0].mimeType,
      });
    }
  };

  return {
    field,
    onHandlePick,
  };
};

export default useProfilePicker;
