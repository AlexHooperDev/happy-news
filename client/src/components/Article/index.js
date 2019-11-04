import React from "./node_modules/react";

import "./index.scss";

export default function Article({ title, description, sentiment }) {
  return (
    <div className="article">
      <div className="article__img">
        <img src="/" />
      </div>
      <div className="article__info">
        <h2>{title}</h2>
        <h3>{sentiment}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
