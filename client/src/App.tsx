import React, { useEffect, useState } from "react";
import ViewLayer from "./views/viewLayer";

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ViewLayer />
    </Provider>
  );
}

export default App;
