import React, { Component } from 'react';
import '../App.css';
// import logo from './logo.svg';
import Card from '../Cards/Card.js';
import { allQuestions } from '../../data/Questions';
import { Answers } from '../Cards/Options';
import Results from '../ResultPage/ResultPage';
import LandingPage from '../LandingPage/LandingPage';
import {connect} from 'react-redux'
import {addCorrectAnswer, addIncorrectAnswer, resetGame} from '../../actions/results'

class App extends Component {
    state = {
      activeIndex: 0,
      landingPage: true,
    }


  increaseActiveIndex = (event) => {
    const { addCorrectAnswer, addIncorrectAnswer } = this.props
    if (event.target.value === allQuestions[this.state.activeIndex].correct) {
    addCorrectAnswer([allQuestions[this.state.activeIndex]])
    } else {
    addIncorrectAnswer([allQuestions[this.state.activeIndex]]);
    }
    this.setState({ activeIndex: this.state.activeIndex + 1 });
  }

  resetQuiz = () => {
    this.props.resetGame()
    this.setState({
      activeIndex: 0,
    });
  }

  render() {
    // Return landing page.
    console.log(this.props)
    return (this.state.landingPage) ? <LandingPage onClick={ () => this.setState({ landingPage: false }) } /> :
    // Show questions.
    (allQuestions.length > this.state.activeIndex) ? 
    <div className="App">
      <header className="App-header">
        <h1 className="header-text">{`Question ${this.state.activeIndex + 1}`}</h1>
      </header>
      <Card index={ this.state.activeIndex } allQuestions={ allQuestions }/>
      <Answers increaseActiveIndex={ this.increaseActiveIndex } allQuestions={ allQuestions } index={ this.state.activeIndex }/>
      <button className="reset-button" onClick={ this.resetQuiz }> Reset </button>
    </div> :
    // Show results.
    <div>
      <Results
        allQuestions={ allQuestions }
        correctAnswers={ this.props.correct }
        wrongAnswers={ this.props.incorrect } />
      <button onClick={ this.resetQuiz }> Reset </button>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    correct: state.correct,
    incorrect: state.incorrect
  }
}

export default connect(mapStateToProps, {addCorrectAnswer, addIncorrectAnswer, resetGame})(App);
