import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    isLightOn: true
  };

  flipLight = () => {
    this.setState({
      isLightOn: !this.state.isLightOn
    });
  };

  render() {

    const lightedness = this.state.isLightOn ? "lit" : "dark";
    return (
      <div className='App'>
        <div className={`room ${lightedness}`}>
          The room is {lightedness}
          <br />
          <button onClick={this.flipLight}>Flip</button>
        </div>
      </div>
    );
  }
}

export default App;