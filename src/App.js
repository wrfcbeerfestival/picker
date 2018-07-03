import React, { Component } from 'react';
import logo from './logo.svg';
import beer from './beer.js';
import cider from './cider.js';
import './App.css';

const Question = ({ question, answerQuestion }) => {
  return (
    <div>
      <h2 className="App__title">{question.title}</h2>
      {question.answers.map((answer) => {
        return <button className="App__answer" onClick={() => { answerQuestion(answer.nextId); }}>{answer.title}</button>
      })}
    </div>
  )
}

const Answer = ({ answer, onBackClick }) => {
  return (
    <div>
      <h2 className="App__title--underline">{answer.title}</h2>
      <p className="App__description">{answer.description}</p>
      <div onClick={() => { onBackClick() }}>BACK</div>
    </div>
  )
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: {
        type: 'QUESTION',
        title: 'Which would you prefer?',
        answers: [{
          title: 'Beer',
          nextId: 'beerStart'
        }, {
          title: 'Cider',
          nextId: 'ciderStart'
        }]
      },
      beercider: {
        ...cider,
        ...beer
      }
    }
    this.onAnswerClick = this.onAnswerClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onAnswerClick(id) {
    this.setState({
      currentView: this.state.beercider[id],
      backLink: id
    })
  }

  onBackClick() {
    this.setState({
      currentView: this.state.beercider[this.state.backLink],
      backLink: false
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.currentView.type === 'QUESTION' && <Question question={this.state.currentView} answerQuestion={this.onAnswerClick} />}
        {this.state.currentView.type === 'ANSWER' && <Answer answer={this.state.currentView} onBackClick={this.onBackClick} />}
      </div>
    );
  }
}

export default App;