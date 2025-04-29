import { Product } from "../models/Product";

export async function FetchProductData(product: string, page: string = "1"): Promise<Product[]> {
    const url = `http://localhost:8080/api/scrape?keyword=${product}&page=${page}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Problem to fetch products");
        }

        const products: Product[] = await response.json();
        
        return products;
    
    } catch (err) {
        throw err;
    }
    
}