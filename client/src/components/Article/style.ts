import styled from "styled-components";
import { animated } from "react-spring";

export const ArticleAnimated = styled(animated.div)`
  margin: 0;
  padding: 0;
`;

export const ArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e0e6ee;
  padding: 13px 0px;
  margin: 20px;
`;

export const ArticleInfo = styled.div`
  padding-right: 15px;
`;

export const Image = styled.img`
  min-width: 110px;
  height: 110px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ArticleTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #4c6c9e;
`;

export const ArticleSubInfo = styled.div``;

export const Rating = styled.div`
  display: none;
`;

export const Publisher = styled.h3`
  color: #a9b8cf;
  font-size: 12px;
`;

export const TimePublished = styled.h3`
  color: #a9b8cf;
  font-size: 10px;
`;
