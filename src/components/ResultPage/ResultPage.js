import React from 'react';

const Text = ({correctAnswers}) => {
  if (correctAnswers.length > 5) {
    return <h1>Congratulations! You really do know React!</h1>
  } else {
    return <h1>Oh no.. You should probably study some more. Better luck next time!</h1>
  }
}

const Results = ({ correctAnswers, wrongAnswers }) => {
  return (
    <div className="results">
      <header className="results-header">
      <Text correctAnswers={correctAnswers} />
      </header>
      <h2 className="correct-answers">Correctly answered</h2>
      { correctAnswers.map((answer, index) => {
        return (
          <div className="correct-alternatives" key={`correct:${index}`}>
            <h3>{ answer.question }</h3>
            {answer.answers.map((option, i) => {
              return (
                <p key={option}>{option}</p>
              )
            })}
            <h4>Correct answer</h4>
            <p>{ answer.correct }</p>
          </div>
        )
      })}
      <h2 className="wrong-answers">Wrong answered</h2>
      { wrongAnswers.map((answer, index) => {
        return (
          <div className="correct-alternatives" key={`incorrect:${index}`}>
            <h3>{ answer.question }</h3>
            {answer.answers.map(option => {
              return (
                <p key={option}>{option}</p>
              )
            })}
            <h4>Correct answer</h4>
            <p>{ answer.correct }</p>
          </div>
        )
      })}
    </div>
  )
}

export default Results
