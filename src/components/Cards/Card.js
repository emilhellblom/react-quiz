import React from 'react';

const Card = ({ index, allQuestions }) => {
  return <p className="question-text">{allQuestions[index].question}</p>
};

export default Card;
