import { Customer } from "../customer/Customer";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  orderDate: Date | null;
  customer?: Customer | null;
};
