export interface Product {
  id: string;
  title: string;
  [key: string]: unknown;
  image?: string;
  rule: [];
  date: string;
}
