import React, { useEffect, useState } from "react";
import Article from "../Article";

import "../../App.scss";

function Home() {
  const [articles, setArticles] = useState([]);

  async function fetchAsync() {
    let response = await fetch("http://localhost:4000/stories");
    const json = await response.json();
    setArticles(json.articles);
  }

  useEffect(() => {
    fetchAsync();
  }, []);

  return (
    <div className="wrapper">
      {articles.map(article => {
        return <Article {...article} />;
      })}
    </div>
  );
}

export default Home;
