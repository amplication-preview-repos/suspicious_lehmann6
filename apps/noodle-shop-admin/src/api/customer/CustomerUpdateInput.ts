import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { ReviewUpdateManyWithoutCustomersInput } from "./ReviewUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  orders?: OrderUpdateManyWithoutCustomersInput;
  address?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  firstName?: string | null;
  reviews?: ReviewUpdateManyWithoutCustomersInput;
};
