import { Product } from "@/lib/product-type";
import https from "@/axios";

export const getProducts = async (
): Promise<Product[]> => {
  try {
    const res = await https.get(`https://jsonplaceholder.typicode.com/posts`);
    return res as unknown as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } 
};


