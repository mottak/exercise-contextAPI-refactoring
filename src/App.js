import React, { createContext } from 'react';
import './App.css';
import Cars from './Cars';

export const CarContext = createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.moveCar = this.moveCar.bind(this);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
  }

  moveCar (car, side) {
    this.setState({
      [car]: side,
    })
  }

  render() {
    return (
      <CarContext.Provider value={{...this.state, moveCar: this.moveCar}}> 
      {/* chaves de fora js em HTLM chaves de dentro é a chave do objeto */}
      <Cars />
      </CarContext.Provider>
    );
  }

}

export default App;
