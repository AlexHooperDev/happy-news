import React, { useEffect, useRef, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/fetchData';

import { FeedWrapper } from './style';

import Article from '../../components/article';


function Feed({ articles, fetchData }: any) {

  const transitions = useTransition(articles, (article: any) => article.id, {
    from: {
      transform: 'translate3d(0%, 10%,0)',
      opacity: 0,
      height: 0,
    },
    enter: (article) => ({
      transform: 'translate3d(0%, 0%,0)',
      opacity: 1,
      height: 160
    }),
    leave: {
      transform: 'translate3d(0%, 10%,0)',
      opacity: 0,
      height: 0,
    },
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <FeedWrapper>
      {transitions.map(({ item, props, key }: any) =>
        <Article {...item} style={props} key={key} id={key} />
      )}

      {/* {articles.map((article: any) => (
        <Article {...article} />
      ))} */}
    </FeedWrapper>
  );
}

const mapDispatchToProps = {
  fetchData
}

function mapStateToProps(state: any) {

  const sortedState = state.feed.sort((a: { sentiment: { Positive: number; }; }, b: { sentiment: { Positive: number; }; }) => (a.sentiment.Positive > b.sentiment.Positive) ? 1 : -1)

  return {
    // articles: state.feed
    articles: state.feed.length > 1 ? sortedState.filter((article: any) => article.sentiment.Positive > state.rangeValue) : state.feed
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Feed);