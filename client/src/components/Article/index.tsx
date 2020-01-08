import React from 'react';
import LazyLoad from 'react-lazyload';

import { ArticleAnimated, ArticleWrapper, Image, ArticleInfo, ArticleTitle, ArticleSubInfo, Rating, Publisher, TimePublished } from './style';

export default function Article({ title, sentiment, source, publishedAt, urlToImage, style, id }: any) {
  return (
    <ArticleAnimated style={style} key={id}>
      <ArticleWrapper>
        <ArticleInfo>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleSubInfo>
            <Rating>{sentiment.Positive}</Rating>
            <Publisher>{source.name}</Publisher>
            <TimePublished>{publishedAt}</TimePublished>
          </ArticleSubInfo>
        </ArticleInfo>
        <LazyLoad once height={110} offset={100} unmountIfInvisible={true}>
          <Image src={urlToImage} />
        </LazyLoad>
      </ArticleWrapper>
    </ArticleAnimated>
  );
}
