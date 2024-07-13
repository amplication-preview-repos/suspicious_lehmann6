import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  products?: ProductUpdateManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
};
