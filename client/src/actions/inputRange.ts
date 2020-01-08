// action type import
import { INPUT_RANGE } from "./types";

export const inputRange = (range: any) => {
  return {
    type: INPUT_RANGE,
    payload: range
  };
};
