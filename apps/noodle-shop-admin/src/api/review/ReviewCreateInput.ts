import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  rating?: number | null;
  product?: ProductWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
};
