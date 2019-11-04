import React, { useEffect, useState } from "./node_modules/react";

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
    <div></div>
  );
}

export default Home;
