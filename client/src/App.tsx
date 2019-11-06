import React, { useEffect, useState } from "react";

import StateProvider from './store';
import ViewLayer from "./views/viewLayer";

function App() {
  return (
    <StateProvider>
      <ViewLayer />
    </StateProvider>
  );
}

export default App;
