
import './App.css';
import React, { useState } from 'react';

function App() {

  const [displayValue, setDisplayValue] = useState('0');

  function appendToDisplay(input) {
    
    if(displayValue!=='0'){
    setDisplayValue(prevValue => prevValue + input);}
        else{
    setDisplayValue( input);
    }
  }

  function clearDisplay() {
    setDisplayValue('0');
  }
  function calculate() {

    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input className="display" readonly value={displayValue} />
        <div className="keys">
          <button onClick={() => appendToDisplay('+')} id='operators' className="operator-btn" > + </button>
          <button onClick={() => appendToDisplay('7')} >7</button>
          <button onClick={() => appendToDisplay('8')}>8</button>
          <button onClick={() => appendToDisplay('9')}>9</button>
          <button onClick={() => appendToDisplay('-')} id='operators' className="operator-btn" >-</button>
          <button onClick={() => appendToDisplay('4')}>4</button>
          <button onClick={() => appendToDisplay('5')}>5</button>
          <button onClick={() => appendToDisplay('6')}>6</button>
          <button onClick={() => appendToDisplay('*')} id='operators' className="operator-btn">*</button>
          <button onClick={() => appendToDisplay('1')}>1</button>
          <button onClick={() => appendToDisplay('2')}>2</button>
          <button onClick={() => appendToDisplay('3')}>3</button>
          <button onClick={() => appendToDisplay('/')} id='operators' className="operator-btn">/</button>
          <button onClick={() => appendToDisplay('0')}>0</button>
          <button onClick={() => appendToDisplay('.')}>.</button>
          <button onClick={calculate} className='operator-btn' >=</button>
          <button onClick={clearDisplay} id='clc' className="operator-btn">C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
