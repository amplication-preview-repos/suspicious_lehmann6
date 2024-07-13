import { Category } from "../category/Category";
import { Review } from "../review/Review";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  price: number | null;
  description: string | null;
  category?: Category | null;
  reviews?: Array<Review>;
};
