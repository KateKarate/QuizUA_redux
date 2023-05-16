import React from 'react';
import { useSelector } from 'react-redux';

function Score() {
  const score = useSelector(state => state.score);

  return (
    <h3 id="score">{`Your score is: ${score}`}</h3>
  );
}

export default Score;