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
    gtag('event', 'answer_click', {
      'value': id
    });
    window.dataLayer.push({'event': 'answer_click', 'next_page_id': id, 'current_title': this.state.currentView.title });
    const currentView = this.state.currentView;
    this.setState({
      currentView: this.state.beercider[id],
      backLinkView: currentView
    })
    gtag('event', 'page_view', {
      'value': this.state.beercider[id].title
    });
  }

  onBackClick() {
    gtag('event', 'back_click', { 'value': this.currentView.title });
    this.setState({
      currentView: this.state.backLinkView,
      backLinkView: false
    })
  }

  render() {
    return (
      <div className="App">
        <a className="App__banner" rel="preconnect" href="http://watfordrfcbeerfestival.co.uk/">
          <div>WRFC Beer Festival 12th - 15th July</div>
          <div>Click for more information</div>
        </a>
        {this.state.currentView.type === 'QUESTION' && <Question question={this.state.currentView} answerQuestion={this.onAnswerClick} />}
        {this.state.currentView.type === 'ANSWER' && <Answer answer={this.state.currentView} onBackClick={this.onBackClick} />}
      </div>
    );
  }
}

export default App;
