import './style.css';
import { setupInputSearch } from './components/InputSearch';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="container">
    <div id="main">
      <h1 id="title"><span id="t-long">Long</span><span id=t-life>Life</span><span id=t-nutri>Nutri</span> Challenge</h1>

      <div id="searchInput-div">
        <input id="searchInput" class="input" placeholder="Search products...." name="text" type="text" />
        <input id="searchInputPage" class="input" placeholder="Page...." name="text" type="text" />
      </div>

      <button id="searchButton" class="button">Search</button>
    </div>

    <div id="loader-div">
      <svg viewBox="25 25 50 50" class="lloader">
        <circle cx="50" cy="50" r="20" class="loader"></circle>
      </svg>
    </div>

    <div id="product-list"></div>
  </div>
`

setupInputSearch(document.querySelector('#searchButton')!);
