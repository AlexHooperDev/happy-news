import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

interface appState {
  rangeValue: number;
  feed: any;
}

export const initialState: appState = {
  rangeValue: 0,
  feed: []
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
