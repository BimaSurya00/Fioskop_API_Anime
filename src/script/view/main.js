import '../component/anime.js';
import '../component/search-bar.js';
import '../component/app-bar.js';

import DataSource from '../data/data-source.js';
 
const main = () => {
  
  const searchElement = document.querySelector('search-bar');
  const animeElement = document.querySelector('anime-list');
 
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchanime(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
 
  const renderResult = results => {
    animeElement.animes = results;
  };
 
  const fallbackResult = message => {
    animeElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked; 
};
 
export default main;