import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  firstName?: SortOrder;
};
