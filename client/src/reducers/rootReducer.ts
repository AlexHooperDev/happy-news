import { FETCH_DATA, INPUT_RANGE } from "../actions/types";
import { initialState } from "../store";

interface Action {
  type?: string;
  payload?: any;
}

const reducer: any = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        rangeValue: 0,
        feed: action.payload.articles
      };
    }
    case INPUT_RANGE: {
      return {
        rangeValue: action.payload,
        feed: state.feed
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
