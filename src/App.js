import React, { Component } from 'react';
import Question from './Question';

import logo from './logo.svg';
import 'react-select/dist/react-select.css';
import './bootstrap/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          text: "¿Cuantos años tienes?",
          number: 1,
          options: [
            { label: "Más de 45", value: 1 },
            { label: "Entre 30 y 45", value: 2 },
            { label: "Menos de 30", value: 3 }
          ],
          value: null
        },
        {
          text: "Al invertir, tu principal objetivo sería:",
          number: 2,
          options: [
            { label: "Conservar tu poder adquisitivo", value: 1 },
            { label: "Obtener un rendimiento periódico. Multiplicar tu inversión.", value: 2 },
            { label: "Que su dinero crezca sin importar los riesgos", value: 3 }
          ],
          value: null
        },
        {
          text: "¿En qué invertirías tu dinero?",
          number: 3,
          options: [
            { label: "Fondos de Inversión", value: 1 },
            { label: "Metales: Oro o plata", value: 2 },
            { label: "Acciones", value: 3 }
          ],
          value: null
        },
        {
          text: "¿En cuánto tiempo planeas alcanzar tu meta de inversión?",
          number: 4,
          options: [
            { label: "En menos de 1 año", value: 1 },
            { label: "De 1 a 3 años", value: 2 },
            { label: "De 3 a 10 años", value: 3 }
          ],
          value: null
        },
        {
          text: "Tu expectativa sobre una inversión sería:",
          number: 5,
          options: [
            { label: "Obtener una rentabilidad mayor a la que te ofrece una caja ahorro pero sin riesgo de capital ni rendimientos negativos.", value: 1 },
            { label: "Obtener una rentabilidad mayor a la que te ofrece un depósito a plazo fijo en un periodo no mayor a un año, estable pero aceptando que pueden existir fluctuaciones temporales.", value: 2 },
            { label: "Obtener la mayor rentabilidad posible en un periodo mayor a 3 años aceptando los riesgos y posibles pérdidas temporales.", value: 3 }
          ],
          value: null
        },
        {
          text: "Para ti la palabra riesgo significa:",
          number: 6,
          options: [
            { label: "Alerta", value: 1 },
            { label: "Inseguridad", value: 2 },
            { label: "Oportunidad", value: 3 }
          ],
          value: null
        },
        {
          text: "¿Cómo consideras tu posición ante el riesgo?",
          number: 7,
          options: [
            { label: "Adverso", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Positivo", value: 3 }
          ],
          value: null
        },
        {
          text: "¿Qué porcentaje de tu patrimonio destinarías a un fondo de inversión?",
          number: 8,
          options: [
            { label: "Menos del 10%", value: 1 },
            { label: "Entre 10% y 25%", value: 2 },
            { label: "Más del 25%", value: 3 }
          ],
          value: null
        },
        {
          text: "Si tu inversión comienza a perder valor, ¿qué harías?",
          number: 9,
          options: [
            { label: "Abandonarla (vender) inmediatamente.", value: 1 },
            { label: "Consultar a un experto.", value: 2 },
            { label: "Asumir pérdidas en el corto plazo y esperar ganar en el largo plazo.", value: 3 }
          ],
          value: null
        },
        {
          text: "El dinero que destinarías a invertir lo pondrías en:",
          number: 10,
          options: [
            { label: "Bonos o fondos de inversión.", value: 1 },
            { label: "Diversos instrumentos: acciones, bonos y fondos.", value: 2 },
            { label: "Acciones", value: 3 }
          ],
          value: null
        },
      ]
    }
  }

  renderQuestions = () => {
    const { questions } = this.state;
    return questions.map(question => {
      return (<Question question={question} onChange={this.onChange} />)
    });
  }

  onChange = (value, number) => {
    const { questions } = this.state;
    const index = questions.findIndex(q => {
      return q.number === number;
    })
    questions[index].value = value;
    this.setState({
      questions: questions
    })
  }

  showProfile = () => {
    console.log("Send")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is a Intro
        </p>
        <div className="questions">
          {this.renderQuestions()}
          <button className="btn btn-success" onClick={this.showProfile}>Ver mi perfil</button>
        </div>
      </div>
    );
  }
}

export default App;
