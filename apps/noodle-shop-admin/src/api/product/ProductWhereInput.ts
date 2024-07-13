import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  description?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
};
