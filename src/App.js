import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import FirstComponent from './component/learning/FirstComponent';
import SecondComponent from './component/learning/SecondComponent';
import ThirdComponent from './component/learning/ThirdComponent';
import Counter from './component/counter/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">

       <Counter/>
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
      </div>
    );
  }
}


export default App;
