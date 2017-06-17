import React, { Component } from 'react';
import Question from './Question';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    this.state = {
      questions: [
        {
          text: "¿Cuantos años tienes?",
          number: 1,
          options: [
            "Más de 45",
            "Entre 30 y 45",
            "Menos de 30"
          ],
          value: null
        }
      ]
    }
  }

  renderQuestions = () => {
    const { questions } = this.state;
    return questions.map(question => {
      <Question question={question} />
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
