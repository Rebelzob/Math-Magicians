import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeypad from './CalculatorKeypad';
import calculate from '../logic/calculate';

function Calculator() {
  const [digits, setDigits] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const handler = (button, event) => {
    event.target.classList.add('clicked');
    setDigits(calculate(digits, button));
    setTimeout(() => {
      event.target.classList.remove('clicked');
    }, 100);
  };

  const handlerOperator = (button, event) => {
    event.target.classList.add('clickedOperator');
    setDigits(calculate(digits, button));
    setTimeout(() => {
      event.target.classList.remove('clickedOperator');
    }, 100);
  };

  return (
    <div className="calculator">
      <CalculatorDisplay
        digits={digits}
      />
      <CalculatorKeypad
        handler={handler}
        handlerOperator={handlerOperator}
      />
    </div>
  );
}

export default Calculator;
