import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  status?: "Option1" | null;
  orderDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
};
