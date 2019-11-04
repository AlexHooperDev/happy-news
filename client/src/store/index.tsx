import React, { useState, useEffect } from 'react';

export const contextStore = React.createContext({
  test: false,
  setTest: () => { }
});

export default function StateProvider({ children }) {

  const setTest = () => {
    setStore({ ...store, test: true })
  }

  const initialState: object = {
    test: false,
    setTest: setTest
  };

  const [store, setStore] = useState(initialState);

  return (
    <contextStore.Provider value={store}>
      {children}
    </contextStore.Provider>

  );
};

