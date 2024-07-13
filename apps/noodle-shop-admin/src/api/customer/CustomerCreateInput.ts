import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { ReviewCreateNestedManyWithoutCustomersInput } from "./ReviewCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  address?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  firstName?: string | null;
  reviews?: ReviewCreateNestedManyWithoutCustomersInput;
};
