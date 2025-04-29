import { Product } from "../models/Product";

export function GenerateProductList(products: Product[]) {
    const productList = document.getElementById('product-list') as HTMLDivElement;
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
    }

    products.forEach((product) => {
        const title = TruncateTitle(product.title!, 100);
        const card = document.createElement('div');
        card.classList.add("product-card");

        card.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.title}" ">
        <h2 title="${product.title}">${title}</h2>
        <p>Reviews: ${product.numberOfReviews}</p>
        <p><strong>Rating:</strong> ${product.rating}</p>
        `;

        productList.appendChild(card);
    });
}

function TruncateTitle(title: string, maxLength: number) { 
    if (title.length > maxLength) { 
        return title.substring(0, maxLength) + '...';
    } else {
        return title;
    }
}