const AWS = require("aws-sdk");

// Setup AWS
AWS.config.update({ region: "us-west-2" });
var comprehend = new AWS.Comprehend();
let fullArticles = [];
let articleStrings = [];

function mapArticles(articles) {
  // grab strings from each article and put into array for AWS
  fullArticles = articles;
  articles.map(article => {
    articleStrings = [...articleStrings, article.content];
  });
  console.log(articleStrings);
}

async function parseNews(articles) {
  mapArticles(articles);
  const language = "en";
  const text = articleStrings;

  await comprehend.batchDetectSentiment(
    { LanguageCode: language, TextList: text },
    function (err, data) {
      if (err) console.log(err, err.stack);
      else {
        console.log(data);
        // For each returned object in the ResultsList array,
        // add sentiment key and value to each articleStrings object
        data.ResultList.forEach((article, i) => {
          fullArticles[i].sentiment = article.SentimentScore;
          fullArticles[i].id = i;
        });
        return fullArticles;
      }
    }
  );
  return fullArticles;
}

module.exports = parseNews;
