import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orders?: Array<Order>;
  address: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  reviews?: Array<Review>;
};
