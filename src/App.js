import React, { Component } from 'react';
import Question from './Question';
import Profile from './Profile';

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
      ],
      profile: null
    }
  }

  renderQuestions = () => {
    const { questions } = this.state;
    return questions.map(question => {
      return (<Question question={question} key={question.number} onChange={this.onChange} />)
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
    let value = 0;
    const { questions } = this.state;
    questions.map(q => {
      return value += q.value.value;
    });
    console.log(value);
    if (value >= 10 && value <= 15) this.setState({ profile: 'conservador' });
    if (value >= 16 && value <= 24) this.setState({ profile: 'moderado' });
    if (value >= 25 && value <= 30) this.setState({ profile: 'agresivo' });
    this.setState({ showProfile: true });
  }

  renderProfile = () => {
    const { profile: profileSelected } = this.state;
    let profile = {};
    switch (profileSelected) {
      case 'conservador':
        profile = {
          title: 'Conservador',
          description: `No toleras mucho el riesgo. Variaciones en tus inversiones
          podrían quitarte el sueño, asi que prefieres tener mayor certeza y
          rendimientos bajos, incluso aunque solo conserves el poder adquisitivo
          de tu inversión. Sientes inseguridad hacia tus ingresos futuros.`
        }
        break;
      case 'moderado':
        profile = {
          title: 'Moderado',
          description: `Te permites tomar algunos riesgos al invertir buscando
          siempre conseguir una rentabilidad extra en tu inversión. En el corto plazo
          soportas variaciones en tu inversión, pero esperas a mediano plazo
          comenzar a ver rendimientos. Si no sucede, comienzas a preocuparte. Sientes
          seguridad ante ingresos estables en un futuro.`
        }
        break;
      case 'agresivo':
        profile = {
          title: 'Agresivo',
          description: `No te molesta tomar riesgos, y estás dispuesto a soportar
          variaciones grandes en el valor de tu inversión con tal de obtener una
          rentabilidad elevada pensando en el largo plazo. Crees firmemente que
          si en el corto plazo hay perdidas, puedes recuperarte totalmente en el
          largo plazo.`
        }
        break;
      default:
        profile = {};
    }
    return (<Profile profile={profile} />);
  }

  render() {
    const { showProfile } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Perfil de Inversionista Primario</h2>
        </div>
        <p className="App-intro">
          Contesta estas cortas preguntas y descubre cual es tu perfil de inversión
          primario. Para más información visita <a href="http://www.finanzaspersonales.net">FinanzasPersonales.net</a>
        </p>
        <div className="questions">
          {showProfile ? this.renderProfile() : this.renderQuestions()}
          {!showProfile &&
            <button className="btn btn-success" onClick={this.showProfile}>Ver mi perfil</button>
          }
        </div>
      </div>
    );
  }
}

export default App;
