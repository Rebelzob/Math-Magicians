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

  const handler = (button) => {
    setDigits(calculate(digits, button));
  };

  return (
    <div className="calculator">
      <CalculatorDisplay
        digits={digits}
      />
      <CalculatorKeypad
        handler={handler}
      />
    </div>
  );
}

export default Calculator;
