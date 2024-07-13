import { Product } from "../product/Product";
import { Customer } from "../customer/Customer";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  comment: string | null;
  rating: number | null;
  product?: Product | null;
  customer?: Customer | null;
};
