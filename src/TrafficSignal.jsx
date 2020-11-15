// src/TrafficSignal.jsx

import React from 'react';
import { TrafficContext } from './App'

class TrafficSignal extends React.Component{
  render() {
    return (
      <TrafficContext.Consumer>
        {( {sign, handleTrafficSign, setTrafficSignColor })=> (
          <div>
            <div className="button-container">
              <button onClick={() => handleTrafficSign('red')} type="button">
                Red
              </button>
              <button onClick={() => handleTrafficSign('yellow')} type="button">
                Yellow
              </button>
              <button onClick={() => handleTrafficSign('green')} type="button">
                Green
              </button>
            </div>
            <img className="signal" src={setTrafficSignColor(sign)} alt="" />
          </div>
          )
        }
   
      </TrafficContext.Consumer>
     
    );
  }
}

export default TrafficSignal;
