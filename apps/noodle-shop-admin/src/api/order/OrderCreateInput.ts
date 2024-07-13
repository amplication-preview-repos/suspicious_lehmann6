import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  status?: "Option1" | null;
  orderDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
};
