import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  price?: number | null;
  description?: string | null;
  category?: CategoryWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
