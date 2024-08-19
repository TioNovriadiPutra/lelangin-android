import { getCategories } from "@services/categoryService";
import { useQuery } from "@tanstack/react-query";

const useCategoryModel = (token: string) => {
  const useGetCategories = () =>
    useQuery({
      queryKey: ["getCategories"],
      queryFn: () => getCategories(token),
    });

  return {
    useGetCategories,
  };
};

export default useCategoryModel;
