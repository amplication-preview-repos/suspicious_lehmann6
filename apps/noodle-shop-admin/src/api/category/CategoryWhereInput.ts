import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
};
