const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
// const API_KEY = "a281e2d7ca91a51ceee55a8112454676"; // xecive8101@huleos.com
const API_KEY = "0f0122346aa550cf7bd9b69790434cb5"; // fesoc50354@cgbird.com

export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
