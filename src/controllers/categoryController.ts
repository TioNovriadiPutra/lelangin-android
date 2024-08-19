import { responseMapper } from "@helpers/mapper";
import useHelper from "@hooks/useHelper";
import { Category } from "@interfaces/data/categoryInterface";
import useCategoryModel from "@models/categoryModel";

const useCategoryController = () => {
  const { auth, onError } = useHelper();

  const { useGetCategories } = useCategoryModel(auth.token);

  const useGetCategoriesDropdownService = () => {
    const { data, isLoading, isError, error } = useGetCategories();

    let finalData: Category[] = [];

    if (isError) {
      onError(error);
    } else {
      if (data) {
        const convert = responseMapper<Category[]>(data.data);

        finalData = convert;
      }
    }

    return {
      finalData,
      isLoading,
    };
  };

  return {
    useGetCategoriesDropdownService,
  };
};

export default useCategoryController;
