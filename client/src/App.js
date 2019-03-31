import React, { Component } from 'react';
import Header from './components/Header';
import TimeLine from './components/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TimeLine />
      </div>
    );
  }
}

export default App;
