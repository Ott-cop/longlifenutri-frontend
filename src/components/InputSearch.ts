import { FetchProductData } from '../api/FetchProductData'
import { GenerateProductList } from './GenerateProductList';

export async function setupInputSearch(searchButton: HTMLButtonElement) {
    searchButton.addEventListener('click', async () => {
    const inputValue = (document.getElementById('searchInput') as HTMLInputElement).value;

    if (inputValue.length <= 0) {
      return;
    }

    const inputValuePage = (document.getElementById('searchInputPage') as HTMLInputElement).value;
    const loader = document.getElementById('loader-div') as HTMLDivElement;
    loader.style.visibility = "visible";
  
    try {
      const products = await FetchProductData(inputValue, inputValuePage);
      GenerateProductList(products);
    } catch (err) {
        console.log(err);
    }
    loader.style.visibility = "hidden";
  });
}