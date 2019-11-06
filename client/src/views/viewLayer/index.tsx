import React, { useState, useContext } from "react";
import { contextStore } from '../../store';

import Header from '../../components/header';

export default function ViewLayer() {

  const state = useContext(contextStore);

  return (
    <>
      <Header />
      {/* <Feed />
      <BottomNav /> */}
    </>
  );
}
