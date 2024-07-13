import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  products?: ProductCreateNestedManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
};
