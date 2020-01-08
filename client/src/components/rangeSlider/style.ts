import styled from "styled-components";

export const RangeInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #164082;
    height: 18px;
    width: 18px;
    margin-top: -8px;
    border-radius: 99px;
  }

  &::-webkit-slider-runnable-track {
    width: 300px;
    height: 4px;
    background: #ddd;
  }

  -webkit-appearance: none;
  background: transparent;
`;
