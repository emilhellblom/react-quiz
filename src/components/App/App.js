import React, { Component } from 'react';
import '../App.css';
import Card from '../Cards/Card.js';
import { allQuestions } from '../../data/Questions';
import Answers from '../Cards/Options';
import Results from '../ResultPage/ResultPage';
import LandingPage from '../LandingPage/LandingPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
      correctAnswers: [],
      wrongAnswers: [],
      landingPage: true
    }
  }

  increaseActiveIndex = (event) => {
    if (event.target.value === allQuestions[this.state.activeIndex].correct) {
      this.state.correctAnswers.push(this.state.activeIndex)
    } else {
      this.state.wrongAnswers.push(this.state.activeIndex)
    }
    this.setState({ activeIndex: this.state.activeIndex + 1 })
  }

  resetQuiz = () => {
    this.setState({
      activeIndex: 0,
      correctAnswers: [],
      wrongAnswers: []
    })
  }

  startQuiz = () => {
    this.setState({
      landingPage: false
    })
  }

  render() {
    if (this.state.landingPage) {
      return <LandingPage onClick={ this.startQuiz } />
    }
    if (allQuestions.length > this.state.activeIndex + 1) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="header-text">{`Question ${this.state.activeIndex + 1}`}</h1>
          </header>
          <Card index={ this.state.activeIndex } allQuestions={ allQuestions }/>
          <Answers increaseActiveIndex={ this.increaseActiveIndex } allQuestions={ allQuestions } index={ this.state.activeIndex }/>
          <button className="reset-button" onClick={ this.resetQuiz }> Reset </button>
        </div>
      );
    } else {
      return (
        <div>
          <Results
            allQuestions={ allQuestions }
            correctAnswers={ this.state.correctAnswers }
            wrongAnswers={ this.state.wrongAnswers } />
          <button onClick={ this.resetQuiz }> Reset </button>
        </div>
      );
    }
  }
}

export default App;
