import React from 'react';


const Answers = ({ increaseActiveIndex, allQuestions, index }) => {
  return <div className="answer-buttons">
    <button className="answer-button" value={ allQuestions[index].answerA }
      onClick={ increaseActiveIndex }>{ allQuestions[index].answerA }</button>
    <button className="answer-button" value={ allQuestions[index].answerB }
      onClick={ increaseActiveIndex }>{ allQuestions[index].answerB }</button>
    <button className="answer-button" value={ allQuestions[index].answerC }
      onClick={ increaseActiveIndex }>{ allQuestions[index].answerC }</button>
    <button className="answer-button" value={ allQuestions[index].answerD }
      onClick={ increaseActiveIndex }>{ allQuestions[index].answerD }</button>
  </div>
}

export default Answers
