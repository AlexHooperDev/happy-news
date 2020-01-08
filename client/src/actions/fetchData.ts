// action type import
import { FETCH_DATA } from "./types";

export const recieve_data = (data: any) => {
  return {
    type: FETCH_DATA,
    payload: data
  };
};

export const fetchData = () => (dispatch: any) => {
  return fetch("http://192.168.0.13:4000/stories")
    .then(data => data.json())
    .then(data => dispatch(recieve_data(data)));
};
