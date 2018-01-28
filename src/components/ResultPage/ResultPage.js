import React from 'react';

const Text = ({correctAnswers}) => {
  if (correctAnswers.length > 6) {
    return <h1>Congratulations! You really do know React!</h1>
  } else {
    return <h1>Oh no.. You should probably study some more. Better luck next time!</h1>
  }
}

const Results = ({ allQuestions, correctAnswers, wrongAnswers }) => {
  return (
    <div className="results">
      <header className="results-header">
      <Text correctAnswers={correctAnswers} />
      </header>
      <h2 className="correct-answers">Correctly answered</h2>
      { correctAnswers.map((index) => {
        return (
          <div className="correct-alternatives" key={index}>
            <h3>{ allQuestions[index].question }</h3>
            <p>{ allQuestions[index].answerA }</p>
            <p>{ allQuestions[index].answerB }</p>
            <p>{ allQuestions[index].answerC }</p>
            <p>{ allQuestions[index].answerD }</p>
          </div>
        )
      })}
      <h2 className="wrong-answers">Wrong answered</h2>
      { wrongAnswers.map((index) => {
        return (
          <div className="wrong-alternatives" key={index}>
            <h3>{ allQuestions[index].question }</h3>
            <p>{ allQuestions[index].answerA }</p>
            <p>{ allQuestions[index].answerB }</p>
            <p>{ allQuestions[index].answerC }</p>
            <p>{ allQuestions[index].answerD }</p>
          </div>
        )
      })}
    </div>
  )
}

export default Results
