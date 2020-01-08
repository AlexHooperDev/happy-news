import React from 'react';

import { BottomNavWrapper } from './style';
import RangeSlider from '../../components/rangeSlider';

export default function BottomNav() {
  return (
    <BottomNavWrapper color='red'>
      <RangeSlider />
    </BottomNavWrapper>
  );
}