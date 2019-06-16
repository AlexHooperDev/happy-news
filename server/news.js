const fetch = require("isomorphic-fetch");

const API_KEY = "409d3fda9f3d499cb0f6f62bc5da0767";

async function getNews() {
  const apiCall = fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  )
    .then(response => response.json())
    .then(stories => stories);
  return apiCall;
}

module.exports = getNews;
