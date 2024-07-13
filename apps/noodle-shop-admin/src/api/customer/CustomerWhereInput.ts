import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  address?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  firstName?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
};
