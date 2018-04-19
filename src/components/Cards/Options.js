import React from 'react';

const Button = ({ onClick, answer}) => (
  <button 
    className="answer-button" 
    value={ answer }
    onClick={ onClick }>
    { answer }
  </button>
);

export const Answers = ({ increaseActiveIndex, allQuestions, index }) => (
  allQuestions[index].answers.map(answer => 
     <Button answer={ answer } onClick={ increaseActiveIndex } />
  )
);
