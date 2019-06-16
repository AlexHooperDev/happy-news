import React, { useEffect, useState } from "react";

import { fetchAsync } from "./api";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(fetchAsync);
  }, []);

  return <div className="App">Happy News</div>;
}

export default App;
