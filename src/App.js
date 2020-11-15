import React, { createContext } from "react";
import TrafficSignal from "./TrafficSignal";
import "./App.css";
import Cars from "./Cars";
import redSignal from "./images/redSignal.jpeg";
import yellowSignal from "./images/yellowSignal.jpeg";
import greenSignal from "./images/greenSignal.jpeg";

export const TrafficContext = createContext({});
export const CarContext = createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      color: "red",
      red: false,
      blue: false,
      yellow: false,
   };
    this.handleTrafficSign = this.handleTrafficSign.bind(this);
    this.setTrafficSignColor = this.setTrafficSignColor.bind(this);
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car) {
    
      this.setState({ 
        [car]: true,
      });
    
 
  }

  handleTrafficSign(color) {
    this.setState({ color: color });
  }

  setTrafficSignColor(color) {
    if (color === "red") return redSignal;
    if (color === "yellow") return yellowSignal;
    if (color === "green") return greenSignal;
    return null;
  }

  render() {
    const contextTrafficValue = {
      ...this.state.color,
      sign: this.state.color,
      handleTrafficSign: this.handleTrafficSign,
      setTrafficSignColor: this.setTrafficSignColor,
    };
    const contextCarValue = {
      ...this.state.red, redCar: this.state.red,
      ...this.state.blue, blueCar:this.state.blue,
      ...this.state.yellow, yellowCar: this.state.yellow,
      moveCar: this.moveCar,

    };
    return (
      <TrafficContext.Provider value={contextTrafficValue}>
        <CarContext.Provider value={contextCarValue}>
          <div className="container">
            <Cars />
            <TrafficSignal />
          </div>
        </CarContext.Provider>
      </TrafficContext.Provider>
    );
  }
}

export default App;
