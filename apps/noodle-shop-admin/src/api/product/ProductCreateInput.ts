import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  price?: number | null;
  description?: string | null;
  category?: CategoryWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
