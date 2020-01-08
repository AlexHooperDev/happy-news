import React from 'react';

import Header from '../../containers/header';
import Feed from '../../containers/feed';
import BottomNav from '../../containers/bottomNav';

export default function ViewLayer() {

  return (
    <>
      <Header />
      <Feed />
      <BottomNav />
    </>
  );
}
