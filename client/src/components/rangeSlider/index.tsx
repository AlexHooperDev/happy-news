import React from 'react';
import { connect } from 'react-redux';
import { inputRange } from '../../actions/inputRange';
import { RangeInput } from './style';

function RangeSlider({ inputRange }: any) {
  return (
    <RangeInput type="range" min="0" max="0.1" step="0.01" onTouchEnd={(e) => inputRange((e.target as HTMLInputElement).value)} />
    // TODO: This should not be on Change. Should be on mouse up so not to constantly fire
  )
};

const mapDispatchToProps = {
  inputRange
}

export default connect(null, mapDispatchToProps)(RangeSlider);