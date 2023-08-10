import Proptypes from 'prop-types';

function CalculatorKeypad({ handler, handlerOperator }) {
  return (
    <div className="calculator-keypad">
      <div className="input-keys">
        <div className="function-keys">
          <button type="button" onClick={(event) => { handler('AC', event); }}>AC</button>
          <button type="button" onClick={(event) => { handler('+/-', event); }}>+/-</button>
          <button type="button" onClick={(event) => { handler('%', event); }}>%</button>
        </div>
        <div className="digit-keys">
          <button type="button" onClick={(event) => { handler('7', event); }}>7</button>
          <button type="button" onClick={(event) => { handler('8', event); }}>8</button>
          <button type="button" onClick={(event) => { handler('9', event); }}>9</button>
          <button type="button" onClick={(event) => { handler('4', event); }}>4</button>
          <button type="button" onClick={(event) => { handler('5', event); }}>5</button>
          <button type="button" onClick={(event) => { handler('6', event); }}>6</button>
          <button type="button" onClick={(event) => { handler('1', event); }}>1</button>
          <button type="button" onClick={(event) => { handler('2', event); }}>2</button>
          <button type="button" onClick={(event) => { handler('3', event); }}>3</button>
          <button type="button" className="key-0" onClick={(event) => { handler('0', event); }}>0</button>
          <button type="button" onClick={(event) => { handler('.', event); }}>●</button>
        </div>
      </div>
      <div className="operator-keys">
        <button type="button" onClick={(event) => { handlerOperator('÷', event); }}>÷</button>
        <button type="button" onClick={(event) => { handlerOperator('x', event); }}>×</button>
        <button type="button" onClick={(event) => { handlerOperator('-', event); }}>−</button>
        <button type="button" onClick={(event) => { handlerOperator('+', event); }}>+</button>
        <button type="button" onClick={(event) => { handlerOperator('=', event); }}> =</button>
      </div>
    </div>
  );
}

CalculatorKeypad.propTypes = {
  handler: Proptypes.func.isRequired,
  handlerOperator: Proptypes.func.isRequired,
};

export default CalculatorKeypad;
