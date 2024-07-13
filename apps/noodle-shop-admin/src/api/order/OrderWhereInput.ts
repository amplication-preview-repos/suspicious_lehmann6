import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  orderDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
};
