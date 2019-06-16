const Routes = require("./routes");
const getNews = require("./news");
const parseNews = require("./newsParser");

// Grab news
async function waitForNews() {
  let result = await getNews();
  return result;
}
// Wait for news API, parse news via AWS, then serve via express
waitForNews()
  .then(result => parseNews(result))
  .then(result => Routes(result));
