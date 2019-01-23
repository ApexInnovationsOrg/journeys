import React, { Component } from 'react';
import './journeys.css';
import QuestionMedia from './components/QuestionMedia';
import Footer from './components/Footer';
import NextButton from './components/NextButton';
import QuestionText from './components/QuestionText';
import AnswerSelections from './components/AnswerSelections';
import HeaderComponent from './components/HeaderComponent';
import { Provider } from 'react-redux';
import store from './store';

class Journeys extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="container">
        <HeaderComponent></HeaderComponent>
        <nav>NAV</nav>
        <main>
          {/* <Content /> */}
          <div>
            <QuestionMedia></QuestionMedia>
            <div className="questionContainer">
              <QuestionText></QuestionText>
              <AnswerSelections></AnswerSelections>
            </div>
            <NextButton></NextButton>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </Provider>
    );
  }
}

export default Journeys;
